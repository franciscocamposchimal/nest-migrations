import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "../photos/photo.entity";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ruta: string;

    @OneToMany(type => Photo, photo => photo.person)
    photos: Photo[];
}
