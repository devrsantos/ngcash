import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './Users';
import { Transaction } from './Transactions';

@Entity('Accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'money' })
    balance: number
}