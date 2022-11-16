import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    username: string

    @Column({ type: 'text' })
    password: string

    @Column({ type: 'number' })
    accountld: number
}