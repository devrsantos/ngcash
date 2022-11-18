import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Accounts";

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'money' })
      value: number
    
    @Column({ type: 'text' })
      createdAt: string

    @ManyToOne(() => Account, account => account.id)
    @JoinColumn({ name: 'debitedAccountId' })
    account: Account

    @ManyToOne(() => Account, accounts => accounts.id)
    @JoinColumn({ name: 'creditedAccountId' })
    accounts: Account[]
}