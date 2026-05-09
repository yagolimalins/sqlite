import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRouter = new Router()

userRouter.get('/', UserController.getUsers) // Sem parenteses
userRouter.get('/username/:username', UserController.getUserByUsername) // Sem parenteses
userRouter.get('/:id', UserController.getUserById) // Sem parenteses
userRouter.post('/', UserController.createUser) // Sem parenteses
userRouter.patch('/:id', UserController.updateUser) // Sem parenteses
userRouter.delete('/:id', UserController.deleteUser) // Sem parenteses

export default userRouter
