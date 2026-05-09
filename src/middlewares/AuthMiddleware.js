import AuthenticationError from "../errors/AuthenticationError.js";

function AuthMiddleware(req, res, next) {
    
    const token = "WhAYgPk8JaCOGudSpSqitPxCYis4U4VqF3rHA93cFz3My8MsEC1HlUQ6vZcqv43w"

    const requestToken = req.header("Authorization")

    if (requestToken !==  token) {
        throw new AuthenticationError("Token inválido")
    }

    next()
}

export default AuthMiddleware