import { BlockExercise } from '../blocks/block.entity';
import { Equipment } from '../equipment/equipment.entity';
import { Muscles } from '../types';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column('varchar', { array: true })
  muscleGroups: Muscles[];

  @ManyToMany(() => Equipment, (e) => e.exercises)
  equipment: Equipment[];

  @OneToMany(() => BlockExercise, (be) => be.exercise, { nullable: true })
  blockExercises?: BlockExercise[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  info?: string;
}
