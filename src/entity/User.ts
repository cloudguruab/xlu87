import {Entity, PrimaryGeneratedColumn, Column, 
JoinColumn, OneToOne} from "typeorm";

/**  
 * @Entity User
 * @ForeignKey :string: username 
 * @Column :string: firstName
 * @Column :string: lastName
 * @Column :string: agency 
 * 
 * User model responsible for direct relationships 
 * within app. ForeignKey row username is a result of 
 * Profile. 
 * 
*/
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => Profile) @JoinColumn()
    username!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    agency!: string;
    
}

/** FIXME:
 * @Entity Topics
 * @Column :string: details
 * @Column :string: dateCreated
 * @Column :bool: confirmed
 * 
 * Topics are submitted form groups of particular care 
 * from network patients. This will cover deatils, the date, and 
 * whether or not a service has been confirmed 
*/
@Entity()
export class Topics {

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => User) @JoinColumn()
    user_id!: number;

    @Column()
    details!: string; 

    @Column()
    dateCreated!: Date; 

    @Column()
    confirmed!: Boolean; 

}

/**
 * @Entity Profile FIXME:
 * @PrimaryGeneratedColumn :string: username
 * @Column :bool: Patient 
 * @Column :bool: Provider  
 * @Column :bool: Agency
 * 
 * Profiles are different platform statues for users. 
 */
@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    userName!: string;

    @Column()
    Patient!: Boolean;

    @Column()
    Provider!: Boolean;

    @Column()
    Agency!: Boolean;

}

@Entity() 
export class Network {
    
    @PrimaryGeneratedColumn()
    id!: number; 

    //user_id

    @Column() 
    inNetwork!: Boolean; 
}