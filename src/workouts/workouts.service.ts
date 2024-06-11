import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Workout } from './workout.entity';
import { Block, BlockExercise } from '../blocks/block.entity';
import { Exercise } from '../exercises/exercise.entity';

@Injectable()
export class WorkoutsService {
  constructor(private dataSource: DataSource) {}

  async find(id: number) {
    const workoutRepo = this.dataSource.getRepository(Workout);
    const workout = await workoutRepo.findOneBy({ id });
    return workout;
  }

  async replaceExercise({
    workoutId,
    blockExerciseId,
    fromOrder,
    fromBlockId,
    swappedForBlockExerciseId,
  }: {
    workoutId: number;
    blockExerciseId: number;
    fromOrder: number;
    fromBlockId: number;
    swappedForBlockExerciseId?: number;
  }) {
    const blockRepo = this.dataSource.getRepository(Block);
    const block = await blockRepo.findOneByOrFail({ id: fromBlockId });
    // swap back to original id if provided
    if (swappedForBlockExerciseId) {
      await this.dataSource
        .createQueryBuilder('workout_block_exercise', 'wbe')
        .update()
        .set({ block_exercise: swappedForBlockExerciseId })
        .where('block_exercise = :blockExerciseId', { blockExerciseId })
        .andWhere('workout = :workoutId', { workoutId })
        .execute();
    } else {
      const blockExerciseRepo = this.dataSource.getRepository(BlockExercise);
      const exercisesRepository = this.dataSource.getRepository(Exercise);

      const plank = await exercisesRepository.findOneByOrFail({
        name: 'Plank With Stability Ball',
      });

      // give new exercise same blockId and order as swapped blockExercise
      const plk: Omit<BlockExercise, 'id'> = {
        exercise: plank,
        repBase: 1,
        durationBase: 20,
        order: fromOrder, // from the original blockExercise
        block: block, // from the original blockExercise
        swappedForBlockExerciseId: blockExerciseId, // from the swapped blockExercise, for easily re-swapping back. this is the ONLY place this gets saved
      };

      // create new block exercise
      const savedPlk = (await blockExerciseRepo.save(plk)) as BlockExercise;

      // update orignal be's swappedFor column with new be's id
      await this.dataSource
        .createQueryBuilder('block_exercise', 'be')
        .update()
        .set({ swappedForBlockExerciseId: savedPlk.id })
        .where('block_exercise.id = :blockExerciseId', { blockExerciseId })
        .execute();

      // create new workout_block_exercise
      await this.dataSource
        .createQueryBuilder('workout_block_exercise', 'wbe')
        .update()
        .set({ block_exercise: savedPlk.id })
        .where('block_exercise = :blockExerciseId', { blockExerciseId })
        .andWhere('workout = :workoutId', { workoutId })
        .execute();
    }

    return await this.find(workoutId);
  }
}
