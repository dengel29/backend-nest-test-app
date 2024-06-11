import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { ExercisesResolver } from './exercise.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise])],
  providers: [ExercisesService, ExercisesResolver],
  controllers: [],
})
export class ExercisesModule {}
