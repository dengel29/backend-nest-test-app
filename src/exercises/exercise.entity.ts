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

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

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

  @OneToMany(() => BlockExercise, (be) => be.exercise, { nullable: true })
  blockExercises?: BlockExercise[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  info?: string;
}
