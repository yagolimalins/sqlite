import UserModel from "../models/UserModel.js";

class AuthService {

    static login(username, password) {
        const user = UserModel.getUserByUsername(username)

        if (user.username === username && user.password === password) {
            return true
        } else {
            return false
        }
    }

}

export default AuthService