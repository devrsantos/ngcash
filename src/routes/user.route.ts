import { Router } from 'express'
import { createUser, loginUser } from 'src/controllers/user.controller'

const userRouters: Router = Router()

userRouters.post('/createUser', createUser)
userRouters.post('/login', loginUser)

export { userRouters }