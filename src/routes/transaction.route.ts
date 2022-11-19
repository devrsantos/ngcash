import { Router } from 'express'
import { createTransaction } from 'src/controllers/transaction.controller'

const transactionRouters: Router = Router()

transactionRouters.post('/createTransactions', createTransaction)

export { transactionRouters }