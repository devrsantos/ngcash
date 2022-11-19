import { Column, Entity, JoinColumn, CreateDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Accounts";

@Entity('Transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'money' })
      value: number
    
    @CreateDateColumn()
      createdAt: Date

    @ManyToOne(() => Account, account => account.id)
    @JoinColumn({ name: 'debitedAccountId' })
    debitedAccountId: Account[]

    @ManyToOne(() => Account, account => account.id)
    @JoinColumn({ name: 'creditedAccountId' })
    creditedAccountId: Account[]
}