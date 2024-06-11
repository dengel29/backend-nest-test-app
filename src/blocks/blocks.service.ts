import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Block } from './block.entity';

@Injectable()
export class BlocksService {
  constructor(private dataSource: DataSource) {}

  async findAllInWorkout({ workoutId }: { workoutId: number }) {
    const blockRepo = this.dataSource.getRepository(Block);

    const workout = await blockRepo
      .createQueryBuilder('block')
      .leftJoinAndSelect('block.blockExercises', 'be')
      .leftJoinAndSelect('be.exercise', 'exercise')
      .leftJoin('workout_block_exercise', 'wbe', 'be.id = wbe."block_exercise"')
      .where('wbe."workout" = :workoutId', { workoutId })
      .orderBy('block.order', 'ASC')
      .getMany();

    return workout;
  }
}
