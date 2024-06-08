import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Exercise } from './exercise.entity';
@Injectable()
export class ExercisesService {
  constructor(private dataSource: DataSource) {}

  async find(id: number) {
    const exerciseRepo = this.dataSource.getRepository(Exercise);
    return await exerciseRepo.findOne({ where: { id } });
  }
}
