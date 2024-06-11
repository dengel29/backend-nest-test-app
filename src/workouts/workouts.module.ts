import { Module } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { Workout } from './workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutsResolver } from './workout.resolver';
import { BlocksModule } from 'src/blocks/blocks.module';

@Module({
  imports: [TypeOrmModule.forFeature([Workout]), BlocksModule],
  providers: [WorkoutsService, WorkoutsResolver],
  controllers: [],
})
export class WorkoutsModule {}
