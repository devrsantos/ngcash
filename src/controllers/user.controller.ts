import { Request, Response } from 'express'
import { User } from '@entities/Users'
import { Account } from '@entities/Accounts'
import { AppDataSource } from './../data-source';

interface UserBody {
    username: string;
    password: string;
}

const createUser = async (request:Request, response: Response) => {
    const {username, password} = request.body

    const account = await AppDataSource.createQueryBuilder()
    .insert().into(Account).values(
        [{ balance: 100.00 }]
    ).execute()

    account.identifiers[0].id
    const user = await AppDataSource.createQueryBuilder()
    .insert().into(User).values(
    [
        { username: username, password: password, accountId: account.identifiers[0].id }
    ]
    ).execute()

    return response.status(201).json(user)
}

export { createUser }