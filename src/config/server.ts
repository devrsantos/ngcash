import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import { routers } from '@routes/routes'

const aplicationServer = express()

aplicationServer.use(routers)

aplicationServer.use(bodyParser.urlencoded({ extended: true }))
aplicationServer.use(bodyParser.json())
aplicationServer.use((request: Request, response: Response, next) => {
  response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  response.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

export { aplicationServer }