import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Block, BlockExercise } from '../blocks/block.entity';
import { Muscles } from '../types';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Workout {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  trainerName?: string;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int' })
  duration: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 1024 })
  instructions: string;

  @Field(() => [String])
  @Column('varchar', { array: true })
  bodyFocus: Muscles[];

  @ManyToMany(() => BlockExercise, (be) => be.workouts)
  @JoinTable({
    name: 'workout_block_exercise',
    joinColumn: {
      name: 'workout',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'block_exercise',
      referencedColumnName: 'id',
    },
  })
  blockExercises: BlockExercise[];

  @Field(() => [Block])
  blocks: Block[];
}
