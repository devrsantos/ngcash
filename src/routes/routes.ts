import { Request, Router, Response } from 'express'

const routers: Router = Router()

routers.get('/', (request: Request, response: Response) => {
  response.json({ message: 'Hello World' }).sendStatus(200)
})

export { routers }