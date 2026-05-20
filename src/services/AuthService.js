import UserModel from "../models/UserModel.js";
import UserService from "./UserService.js";

class AuthService {

    static login(username, password) {
        const user = UserModel.getUserByUsername(username)

        if (user.username === username && user.password === password) {
            return true
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