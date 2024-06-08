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

@Entity()
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column({ type: 'int' })
  setCount: number;

  @OneToMany(() => BlockExercise, (be) => be.block)
  @Column({ type: 'int' })
  order: number;
}

@Entity()
export class BlockExercise {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exercise, (e) => e.blockExercises)
  exercise: Exercise;

  @ManyToOne(() => Block, (b) => b.blockExercises)
  block: number;

  @Column({ type: 'int' })
  repMin: number;

  @Column({ type: 'int', nullable: true })
  repMax?: number;

  @Column({ type: 'int', nullable: true })
  weight?: number;

  @ManyToMany(() => Workout, (w) => w.blockExercises)
  workouts?: Workout[];

  @Column({ type: 'int' })
  order: number;
}
