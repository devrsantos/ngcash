import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'decimal' })
    balance: number
}