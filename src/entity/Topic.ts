import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";

import { User } from "./User";

@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany(() => User)
    user_id!: number;

    @Column()
    details!: string;

    @Column()
    dateCreated!: Date;

    @Column()
    confirmed!: Boolean;

}