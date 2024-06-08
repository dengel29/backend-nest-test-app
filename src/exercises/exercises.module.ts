import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { ExercisesResolver } from './exercise.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise])],
  providers: [ExercisesService, ExercisesResolver],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
