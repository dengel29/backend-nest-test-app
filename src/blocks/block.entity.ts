import { Workout } from '../workouts/workout.entity';
import { Exercise } from '../exercises/exercise.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

type UnsavedBlockExercise = Omit<BlockExercise, 'id' | 'block'>;

@ObjectType()
@Entity()
export class Block {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  setCount: number;

  @Field(() => [BlockExercise])
  @OneToMany(() => BlockExercise, (be) => be.block)
  blockExercises: BlockExercise[] | UnsavedBlockExercise[];

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  section?: 'warmup' | 'cooldown';

  @Field(() => Int)
  @Column({ type: 'int' })
  order: number;
}

@ObjectType()
@Entity()
export class BlockExercise {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Exercise)
  @ManyToOne(() => Exercise, (e) => e.blockExercises)
  exercise: Exercise;

  @Field(() => Int)
  @Column({ type: 'int', nullable: true })
  exerciseId?: number;

  @Field(() => Block)
  @ManyToOne(() => Block, (b) => b.blockExercises)
  block: Block;

  @Field(() => Int)
  @Column({ type: 'int', nullable: false })
  blockId?: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  repBase?: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  repMax?: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  durationBase?: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  durationMax?: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  weight?: number;

  @ManyToMany(() => Workout, (w) => w.blockExercises)
  workouts?: Workout[];

  @Field(() => Int)
  @Column({ type: 'int' })
  order: number;

  @Field(() => Int, {
    nullable: true,
    description: 'This is a blockExercise id',
  })
  @Column({ type: 'int', nullable: true })
  swappedForBlockExerciseId?: number;
}
