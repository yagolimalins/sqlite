import jwt from "jsonwebtoken"

import AuthenticationError from "../errors/AuthenticationError.js"
import AuthService from "../services/AuthService.js"

class AuthController {

    static register(req, res) {
        const { username, password } = req.body
        const id = AuthService.register(username, password)
        res.status(201)
        res.json({ id })
    }

    static async login(req, res) {
        const username = req.body.username
        const password = req.body.password

        const user = await AuthService.login(username, password)

        if (user === false) {
            throw new AuthenticationError("Usuário ou senha inválidos")
        }

        const payload = {
            id: user.id,
            username: user.username
        }

        const SECRET = "MEUSEGREDOSUPERSECRETO"

        const options = {
            expiresIn: "30m"
        }

        const token = jwt.sign(payload, SECRET, options)

        res.status(200)
        res.json({
            token: token
        })
    }

}

export default AuthController