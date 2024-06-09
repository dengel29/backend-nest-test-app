import { Block } from './block.entity';
import { BlocksService } from './blocks.service';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Block)
export class BlocksResolver {
  constructor(private blocksService: BlocksService) {}

  @Query(() => [Block], { name: 'block' })
  async getBlocks(@Args('workoutId', { type: () => Int }) id: number) {
    return await this.blocksService.findAllInWorkout({ workoutId: id });
  }
}
