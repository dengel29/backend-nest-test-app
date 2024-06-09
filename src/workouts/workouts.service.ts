import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutsService {
  constructor(private dataSource: DataSource) {}

  async find(id: number) {
    const workoutRepo = this.dataSource.getRepository(Workout);
    const workout = await workoutRepo.findOneBy({ id });
    return workout; // Return the first and only result
  }
}
