import { Request, Response } from 'express'
import { User } from '@entities/Users'
import { Account } from '@entities/Accounts'
import { Transaction } from '@entities/Transactions';
import { getUser } from "./../models/getUser";
import { AppDataSource } from './../data-source';
import { formatNumber } from 'src/utils/utils';
import { updateBalance } from 'src/models/updateBalance';

const createTransaction = async (request: Request, response: Response) => {
    const debitedUsername = request.body.debitedUsername
    const creditedUsername = request.body.creditedUsername
    const value = formatNumber(request.body.value) 
    
    const getUserDebited = await getUser(debitedUsername)
    const balanceClientDebited = formatNumber(getUserDebited[0].accountId.balance)

    if (getUserDebited.length > 0) {        
        if (value <= balanceClientDebited) {

            const getUserCredited = await getUser(creditedUsername)
            const balanceClientCredited = formatNumber(getUserCredited[0].accountId.balance)

            updateBalance((balanceClientCredited + value), getUserCredited[0].accountId.id)
            updateBalance((balanceClientDebited - value), getUserDebited[0].accountId.id)
            return response.json()
        } else {
            return response.status(400).json({
                message: 'Valor acima do saldo atual' 
            })
        }
    } else {
        return response.status(400).json({
            message: '@username inexistente ou não encontrado' 
        })
    }
}

export { createTransaction }