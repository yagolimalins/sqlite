import AuthenticationError from "../errors/AuthenticationError.js"
import AuthService from "../services/AuthService.js"

class AuthController {

    static login(req, res) {
        const username = req.body.username
        const password = req.body.password

        const authenticated = AuthService.login(username, password)

        if (authenticated === false) {
            throw new AuthenticationError("Usuário ou senha inválidos")
        }

        if (authenticated === true) {
            res.status(200)
            res.json({
                token: "WhAYgPk8JaCOGudSpSqitPxCYis4U4VqF3rHA93cFz3My8MsEC1HlUQ6vZcqv43w"
            })
        }
    }

}

export default AuthController