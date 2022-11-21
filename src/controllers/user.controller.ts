import { Request, Response } from 'express'
import { User } from '@entities/Users'
import { Account } from '@entities/Accounts'
import { AppDataSource } from './../data-source';

import bcrypt from 'bcrypt';
const saltRounds = 10;

const createUser = async (request:Request, response: Response) => {
    const {username, password} = request.body

    const account = await AppDataSource.createQueryBuilder()
    .insert().into(Account).values(
        [{ balance: 100.00 }]
    ).execute()
    
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            const hashPassword = hash

            account.identifiers[0].id
            const user = AppDataSource.createQueryBuilder()
            .insert().into(User).values(
            [
                { username: username, password: hashPassword, accountId: account.identifiers[0].id }
            ]
            ).execute()

            return response.status(201).json(user)
        });
    });    
}

const loginUser = async (request:Request, response: Response) => {
    const {username, password} = request.body
    bcrypt.compare(password, hash, function(err, result) {
        // result == true
    });
}

export { createUser, loginUser }