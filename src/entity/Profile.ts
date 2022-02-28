import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
  
import {User} from "./User";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany(() => User)
    user_id!: number;

    @Column()
    Patient!: Boolean;

    @Column()
    Provider!: Boolean;

    @Column()
    Agency!: Boolean;

}