import { Muscles } from 'src/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
