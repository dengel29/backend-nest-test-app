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

type UnsavedBlockExercise = Omit<BlockExercise, 'id' | 'block'>;

@Entity()
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column({ type: 'int' })
  setCount: number;

  @OneToMany(() => BlockExercise, (be) => be.block)
  blockExercises: BlockExercise[] | UnsavedBlockExercise[];

  @Column({ type: 'varchar', nullable: true })
  section?: 'warmup' | 'cooldown';

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

  @Column({ type: 'int', nullable: true })
  repBase?: number;

  @Column({ type: 'int', nullable: true })
  repMax?: number;

  @Column({ type: 'int', nullable: true })
  durationBase?: number;

  @Column({ type: 'int', nullable: true })
  durationMax?: number;

  @Column({ type: 'int', nullable: true })
  weight?: number;

  @ManyToMany(() => Workout, (w) => w.blockExercises)
  workouts?: Workout[];

  @Column({ type: 'int' })
  order: number;
}
