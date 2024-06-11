import { Exercise } from './exercise.entity';
import { ExercisesService } from './exercises.service';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Exercise)
export class ExercisesResolver {
  constructor(private exercisesService: ExercisesService) {}

  @Query(() => Exercise, { name: 'exercise' })
  async getExercise(@Args('id', { type: () => Int }) id: number) {
    return this.exercisesService.find(id);
  }
}
