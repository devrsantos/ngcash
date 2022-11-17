import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './Users';

@Entity('accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number // PK

    @Column({ type: 'money' })
    balance: number
}