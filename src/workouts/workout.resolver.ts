import { BlocksService } from '../blocks/blocks.service';
import { Block } from '../blocks/block.entity';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => Workout)
export class WorkoutsResolver {
  constructor(
    private workoutsService: WorkoutsService,
    private blockService: BlocksService,
  ) {}

  @Query(() => Workout, { name: 'workout' })
  async getWorkout(@Args('id', { type: () => Int }) id: number) {
    return this.workoutsService.find(id);
  }

  @ResolveField('blocks', () => [Block])
  async posts(@Parent() workout: Workout) {
    const { id } = workout;
    return this.blockService.findAllInWorkout({ workoutId: id });
  }
}
