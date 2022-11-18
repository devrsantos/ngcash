import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './Users';
import { Transaction } from './Transactions';

@Entity('accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number // PK

    @Column({ type: 'money' })
    balance: number

    @OneToMany(() => Transaction, transaction => transaction.account)
    transaction: Transaction[]
    @OneToMany(() => Transaction, transaction => transaction.accounts)
    transactions: Transaction[]
}