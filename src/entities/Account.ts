import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'number' })
    balance: number
}