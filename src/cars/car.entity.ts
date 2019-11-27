import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marca: string;

    @Column()
    color: string;
}
