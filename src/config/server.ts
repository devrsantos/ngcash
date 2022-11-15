import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { routers } from '@routes/routes'

const app = express()

app.use(routers)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((request: Request, response: Response, next) => {
  response.append('Access-Control-Allow-Origin', ['*'])
  response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  response.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

export { app }