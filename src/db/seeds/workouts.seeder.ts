import { DataSource } from 'typeorm';
import { Workout } from '../../workouts/workout.entity';
import { Seeder } from 'typeorm-extension';
import { BlockExercise } from '../../blocks/block.entity';

export default class WorkoutsSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const workoutRepository = dataSource.getRepository(Workout);
    const blockExerciseRepository = dataSource.getRepository(BlockExercise);
    const blockExercises = await blockExerciseRepository.find();
    const workout: Omit<Workout, 'id' | 'blocks'> = {
      trainerName: 'Candice',
      bodyFocus: ['Full Body'],
      duration: 65,
      instructions: `This training program will begin from a full body circuit training on the first day:
      You will be able to learn how to use different muscle groups from today's training.
      You will be able to learn how to use different muscle groups.
      This training program will begin from a full body circuit training on the first day:
      You will be able to learn how to use different muscle groups.
      You will be able to learn how to use different muscle groups from today's training.
      You will be able to learn how to use different muscle groups from today's training.`,
      blockExercises,
    };

    await workoutRepository.save(workout);
  }
}
