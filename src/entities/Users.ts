import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Accounts";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    username: string

    @Column({ type: 'text' })
    password: string

    // accountId: FK Accounts[id]
    @OneToOne(() => Account, account => account.id)
    @JoinColumn({ name: 'accountId' })
    accountId: Account
}