import jwt from "jsonwebtoken";
import AuthenticationError from "../errors/AuthenticationError.js";

function AuthMiddleware(req, res, next) {
    const SECRET = "MEUSEGREDOSUPERSECRETO";

    const authHeader = req.header("Authorization");

    if (!authHeader) {
        throw new AuthenticationError("Token não fornecido.");
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

    try {
        req.user = jwt.verify(token, SECRET);
        next();
    } catch {
        throw new AuthenticationError("Token inválido ou expirado.");
    }
}

export default AuthMiddleware;