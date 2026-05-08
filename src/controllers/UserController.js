import UserService from "../services/UserService.js";

class UserController {

    static getUsers(req, res) {
        const users = UserService.getAllUsers()
        res.status(200)
        res.send(users)
    }

    static createUser(req, res) {
        const { username, password } = req.body
        const id = UserService.createUser(username, password)
        res.status(201)
        res.send(id)
    }

    static updateUser(req, res) {
        const id = req.params.id
        const { username, password } = req.body
        UserService.updateUser(id, username, password)
        res.status(200)
        res.send({ message: "Usuário atualizado" })
    }

    static deleteUser(req, res) {
        const id = req.params.id
        UserService.deleteUser(id)
        res.status(200)
        res.send({ message: "Usuário deletado" })
    }

}

export default UserController
