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

    static login(req, res) {
        const username = req.body.username
        const password = req.body.password

        const authenticated = AuthService.login(username, password)

        if (authenticated === false) {
            throw new AuthenticationError("Usuário ou senha inválidos")
        }

        if (authenticated === true) {

            const payload = {
                username: username
            }

            const SECRET = "MEUSEGREDOSUPERSECRETO"

            const options = {
                expiresIn: "5m"
            }

            const token = jwt.sign(payload, SECRET, options)

            res.status(200)
            res.json({
                token: token
            })
        }
    }

}

export default AuthController