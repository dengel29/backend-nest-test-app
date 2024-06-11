import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from './block.entity';
import { BlocksResolver } from './blocks.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Block])],
  exports: [BlocksService],
  providers: [BlocksService, BlocksResolver],
  controllers: [],
})
export class BlocksModule {}
