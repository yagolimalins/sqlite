import bcrypt from "bcrypt";
import UserNotFoundError from "../errors/UserNotFoundError.js";
import ValidationError from "../errors/ValidationError.js";
import UserModel from "../models/UserModel.js";

class UserService {

    static getAllUsers() {
        const users = UserModel.getAllUsers()
        return users
    }

    static getUserById(id) {
        const user = UserModel.getUserById(id)
        if (!user) {
            throw new UserNotFoundError("O usuário não foi encontrado")
        }
        return user
    }

    static getUserByUsername(username) {
        const user = UserModel.getUserByUsername(username)
        if (!user) {
            throw new UserNotFoundError("O usuário não foi encontrado")
        }
        return user
    }

    static async createUser(username, password) {
        if (!username || username === "") {
            throw new ValidationError("O campo username é obrigatório")
        }
        if (!password || password === "") {
            throw new ValidationError("O campo password é obrigatório")
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const id = UserModel.createUser(username, passwordHash)
        return id
    }

    static updateUser(id, username, password) {
        if (!username || username === "") {
            throw new ValidationError("O campo username é obrigatório")
        }
        if (!password || password === "") {
            throw new ValidationError("O campo password é obrigatório")
        }
        const changes = UserModel.updateUser(id, username, password)
        if (changes === 0) {
            throw new UserNotFoundError("O usuário não foi encontrado")
        }
        return changes
    }

    static deleteUser(id) {
        const changes = UserModel.deleteUser(id)
        if (changes === 0) {
            throw new UserNotFoundError("O usuário não foi encontrado")
        }
        return changes
    }

}

export default UserService
