import db from "../database/db.js";

class UserModel {

    static getAllUsers() {
        const stmt = db.prepare('SELECT * FROM users')
        const users = stmt.all()
        return users
    }

    static getUserById(id) {
        const stmt = db.prepare('SELECT * FROM users WHERE id = ?')
        const user = stmt.get(id)
        return user
    }

    static getUserByUsername(username) {
        const stmt = db.prepare('SELECT * FROM users WHERE username = ?')
        const user = stmt.get(username)
        return user
    }

    static createUser(username, password) {
        const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)')
        const info = stmt.run(username, password)
        return info.lastInsertRowid
    }

    static updateUser(id, username, password) {
        const stmt = db.prepare('UPDATE users SET username = ?, password = ? WHERE id = ?')
        const info = stmt.run(username, password, id)
        return info.changes
    }

    static deleteUser(id) {
        const stmt = db.prepare('DELETE FROM users WHERE id = ?')
        const info = stmt.run(id)
        return info.changes
    }

}

export default UserModel
