import { BlockExercise } from '../blocks/block.entity';
import { Muscles } from '../types';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  trainerName?: string;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'varchar', length: 1024 })
  instructions: string;

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
}
