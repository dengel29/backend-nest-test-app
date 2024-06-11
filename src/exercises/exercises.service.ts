import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Exercise } from './exercise.entity';
@Injectable()
export class ExercisesService {
  constructor(private dataSource: DataSource) {}

  async find(id: number) {
    const exerciseRepo = this.dataSource.getRepository(Exercise);
    const exercise = await exerciseRepo
      .createQueryBuilder('exercise')
      .leftJoinAndSelect('exercise.blockExercises', 'blockExercises')
      .leftJoinAndSelect('blockExercises.block', 'block')
      .where('exercise.id = :exerciseId', { exerciseId: id })
      .getOne();

    return exercise;
  }
}
