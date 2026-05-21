import jwt from "jsonwebtoken";
import AuthenticationError from "../errors/AuthenticationError.js";

function AuthMiddleware(req, res, next) {
    const SECRET = "MEUSEGREDOSUPERSECRETO";
    
    const token = req.header("Authorization");

    if (!token) {
        throw new AuthenticationError("Token não fornecido.");
    }

    try {
        jwt.verify(token, SECRET);
        next();
    } catch {
        throw new AuthenticationError("Token inválido ou expirado.");
    }
}

export default AuthMiddleware;