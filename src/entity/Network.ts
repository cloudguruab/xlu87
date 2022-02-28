import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {User} from "./User";

@Entity() 
export class Network {
    
    @PrimaryGeneratedColumn()
    id!: number; 

    @ManyToMany(() => User)
    user_id!: number;

    @Column() 
    inNetwork!: Boolean; 
}