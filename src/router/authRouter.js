import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const authRouter = new Router()

authRouter.post('/login', AuthController.login) // Sem parenteses

export default authRouter