import 'reflect-metadata';
import { config } from 'dotenv';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import ExerciseSeed from './exercises.seeder';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Exercise } from '../../exercises/exercise.entity';
import { Equipment } from '../../equipment/equipment.entity';
import { Block, BlockExercise } from '../../blocks/block.entity';
import { Workout } from '../../workouts/workout.entity';

config({ path: '.env' });

async function seed() {
  const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: `${process.env.DB_HOST}`,
    port: +`${process.env.DB_PORT}`,
    database: `${process.env.DB_DATABASE}`,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    entities: [Exercise, Equipment, BlockExercise, Block, Workout],
    seeds: [ExerciseSeed],
  };

  const dataSource = new DataSource(options);
  await dataSource.initialize();
  await runSeeders(dataSource);
}

seed()
  .then(() => {
    console.log('Seeding completed!');
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
  });
