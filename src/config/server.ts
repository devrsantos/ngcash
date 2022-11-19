import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import { userRouters } from '@routes/user.route'
import { transactionRouters } from '@routes/transaction.route'

const aplicationServer = express()



aplicationServer.use(bodyParser.urlencoded({ extended: true }))
aplicationServer.use(bodyParser.json())
aplicationServer.use((request: Request, response: Response, next) => {
  response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  response.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

aplicationServer.use(userRouters)
aplicationServer.use(transactionRouters)

export { aplicationServer }