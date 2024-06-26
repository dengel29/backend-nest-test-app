import { BlocksService } from '../blocks/blocks.service';
import { Block } from '../blocks/block.entity';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';
import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@InputType()
export class ReplaceExerciseInput {
  @Field(() => Int!)
  workoutId: number;

  @Field(() => Int!)
  blockExerciseId: number;

  @Field(() => Int!)
  fromBlockId: number;

  @Field(() => Int!)
  fromOrder: number;

  @Field(() => Int, { nullable: true })
  swappedForBlockExerciseId?: number;
}

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
  async blocks(@Parent() workout: Workout) {
    const { id } = workout;
    return this.blockService.findAllInWorkout({ workoutId: id });
  }

  @Mutation(() => Workout)
  async replaceExercise(
    @Args('input') replaceExerciseData: ReplaceExerciseInput,
  ) {
    let swapId;

    const { workoutId, blockExerciseId, fromBlockId, fromOrder } =
      replaceExerciseData;
    if (replaceExerciseData.swappedForBlockExerciseId) {
      swapId = replaceExerciseData.swappedForBlockExerciseId;
    }
    return this.workoutsService.replaceExercise({
      workoutId,
      blockExerciseId,
      fromBlockId,
      fromOrder,
      swappedForBlockExerciseId: swapId,
    });
  }
}
