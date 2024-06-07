import { Exercise } from '../exercises/exercise.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  icon?: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @ManyToMany(() => Exercise, (e) => e.equipment, { nullable: true })
  exercises?: Exercise[];
}
