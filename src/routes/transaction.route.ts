import { Router } from 'express'
import { createTransaction, getTransaction } from 'src/controllers/transaction.controller'

const transactionRouters: Router = Router()

transactionRouters.post('/createTransactions', createTransaction)
transactionRouters.get('/getTransactions', getTransaction)

export { transactionRouters }