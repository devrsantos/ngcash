import { Router } from 'express'
import { createUser } from 'src/controllers/user.controller'

const userRouters: Router = Router()

userRouters.post('/createUser', createUser)

export { userRouters }