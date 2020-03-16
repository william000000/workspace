import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;

  @Column()
  price: number;
  @Column()
  description: string;
}
