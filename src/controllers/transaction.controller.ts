import { Request, Response } from 'express'
import { getUser } from "./../models/getUser";
import { updateBalance } from 'src/models/updateBalance';
import { insertTransaction } from 'src/models/insertTransactions';
import { getTransactions } from 'src/models/getTransactions';

const createTransaction = async (request: Request, response: Response) => {
    const debitedUsername = request.body.debitedUsername
    const creditedUsername = request.body.creditedUsername
    const value = parseFloat(request.body.value)
    
    const getUserDebited = await getUser(debitedUsername)
    const balanceClientDebited = getUserDebited[0].accountId.balance

    if (getUserDebited.length > 0) {
        if (value <= balanceClientDebited) {

            const getUserCredited = await getUser(creditedUsername)
            const balanceClientCredited = parseFloat(String(getUserCredited[0].accountId.balance))

            updateBalance((balanceClientCredited + value), getUserCredited[0].accountId.id)
            updateBalance((balanceClientDebited - value), getUserDebited[0].accountId.id)
            const result = await insertTransaction(getUserDebited[0].accountId.id, getUserCredited[0].accountId.id, value)
            return response.json(result)
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

const getTransaction = async (request: Request, response: Response) => {
    const { username } = request.body
    const user = await getUser(username)
    const result = getTransactions(user[0].accountId.id)

    response.json(result)
}

export { createTransaction, getTransaction }