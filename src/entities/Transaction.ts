import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'number' })
    debitedAccountld: number

    @Column({ type: 'number' })
    creditedAccountld: number

    @Column({ type: 'number' })
    value: number

    @Column({ type: 'text' })
    createdAt: string
}