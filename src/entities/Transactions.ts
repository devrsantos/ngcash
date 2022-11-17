import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'money' })
      value: number
    
    @Column({ type: 'text' })
      createdAt: string

    // debitedAccountId —> FK Accounts[id]

    // creditedAccountId —> FK Accounts[id]
}