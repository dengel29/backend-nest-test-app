import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BlockExercise } from '../blocks/block.entity';
import { Equipment } from '../equipment/equipment.entity';
import { Muscles } from '../types';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Exercise {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'varchar' })
  name: string;

  @Field(() => [String])
  @Column('varchar', { array: true })
  muscleGroups: Muscles[];

  @ManyToMany(() => Equipment, (e) => e.exercises)
  @JoinTable({
    name: 'exercise_equipment',
    joinColumn: {
      name: 'exercise',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'equipment',
      referencedColumnName: 'id',
    },
  })
  equipment: Equipment[];

  @Field(() => [BlockExercise])
  @OneToMany(() => BlockExercise, (be) => be.exercise, { nullable: true })
  blockExercises?: BlockExercise[];

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 512, nullable: true })
  info?: string;
}
