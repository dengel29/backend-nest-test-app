import { Muscles } from '../../types';
import { DataSource } from 'typeorm';
import { Exercise } from '../../exercises/exercise.entity';
import { Seeder } from 'typeorm-extension';

export default class ExerciseSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const exerciseRepository = dataSource.getRepository(Exercise);
    const muscles: { id: number; name: Muscles }[] = [
      { id: 0, name: 'Full Body' },
      { id: 1, name: 'Chest' },
      { id: 2, name: 'Back' },
      { id: 3, name: 'Shoulders' },
      { id: 4, name: 'Biceps' },
      { id: 5, name: 'Triceps' },
      { id: 6, name: 'Forearms' },
      { id: 7, name: 'Abs' },
      { id: 8, name: 'Obliques' },
      { id: 9, name: 'Quads' },
      { id: 10, name: 'Hamstrings' },
      { id: 11, name: 'Glutes' },
      { id: 12, name: 'Calves' },
      { id: 13, name: 'Neck' },
      { id: 14, name: 'Upper Back' },
      { id: 15, name: 'Lower Back' },
      { id: 16, name: 'Traps' },
      { id: 17, name: 'Adductors' },
      { id: 18, name: 'Abductors' },
      { id: 19, name: 'Serratus' },
      { id: 20, name: 'Hip Flexors' },
    ];

    const findMuscle = (
      muscles: { id: number; name: Muscles }[],
      ids: number[],
    ) => {
      return muscles.flatMap((m) => {
        if (ids.some((id) => m.id === id)) {
          return m.name;
        } else {
          return [];
        }
      });
    };

    const exercises = [
      {
        id: 0,
        name: 'Barbell Lunge (L)',
        side: 'L',
        muscleGroups: findMuscle(muscles, [11]),
      },
      {
        id: 1,
        name: 'Barbell Lunge (R)',
        side: 'R',
        muscleGroups: findMuscle(muscles, [11]),
      },
      {
        id: 2,
        name: 'Sumo Deadlift',
        side: null,
        muscleGroups: findMuscle(muscles, [9]),
      },
      {
        id: 3,
        name: 'Cable Kickback (L)',
        side: null,
        muscleGroups: findMuscle(muscles, [11, 10]),
      },
      {
        id: 33,
        name: 'Cable Kickback (R)',
        side: null,
        muscleGroups: findMuscle(muscles, [11, 10]),
      },
      {
        id: 4,
        name: 'Dumbbell Shoulder Press',
        side: null,
        muscleGroups: findMuscle(muscles, [3, 14]),
      },
      {
        id: 5,
        name: 'Single Arm Cable Row (L)',
        side: 'L',
        muscleGroups: findMuscle(muscles, [5, 14]),
      },
      {
        id: 6,
        name: 'Single Arm Cable Row (R)',
        side: 'R',
        muscleGroups: findMuscle(muscles, [5, 14]),
      },
      {
        id: 7,
        name: 'Single Arm Barbell Row (L)',
        side: 'L',
        muscleGroups: findMuscle(muscles, [5, 14]),
      },
      {
        id: 8,
        name: 'Single Arm Barbell Row (R)',
        side: 'R',
        muscleGroups: findMuscle(muscles, [5, 14]),
      },
      {
        id: 9,
        name: 'Cable Seated Row',
        side: null,
        muscleGroups: findMuscle(muscles, [3, 5, 14]),
      },
      {
        id: 10,
        name: 'Dumbbell Jump Squat',
        side: null,
        muscleGroups: findMuscle(muscles, [9, 11]),
      },
      {
        id: 10,
        name: 'Plank With Stability Ball',
        side: null,
        muscleGroups: findMuscle(muscles, [8, 20, 7]),
      },
      {
        id: 11,
        name: 'Glute Bridge Hold',
        side: null,
        muscleGroups: findMuscle(muscles, [11]),
      },
    ];

    await exerciseRepository.save(exercises);
  }
}
