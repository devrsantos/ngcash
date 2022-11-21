import { Column, Entity, JoinColumn, CreateDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Accounts";

@Entity('Transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'decimal' })
      value: number
    
    @CreateDateColumn()
      createdAt: Date

    @ManyToOne(() => Account, account => account.id)
    @JoinColumn({ name: 'debitedAccountId' })
    debitedAccountId: Transaction[]

    @ManyToOne(() => Account, account => account.id)
    @JoinColumn({ name: 'creditedAccountId' })
    creditedAccountId: Transaction[]
}