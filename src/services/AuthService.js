import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";
import UserService from "./UserService.js";

class AuthService {

    static async login(username, password) {
        const user = UserModel.getUserByUsername(username)

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (user.username === username && isPasswordCorrect) {
            return user
        } else {
            return false
        }
    }

    static register(username, password) {
        const id = UserService.createUser(username, password)
        return id
    }

}

export default AuthService