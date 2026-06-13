import db from "../database/db.js";

class TaskModel {

    static getAllTasks(userId) {
        const stmt = db.prepare('SELECT * FROM tasks WHERE user_id = ?')
        const tasks = stmt.all(userId)
        return tasks
    }

    static getTaskById(id, userId) {
        const stmt = db.prepare('SELECT * FROM tasks WHERE id = ? AND user_id = ?')
        const task = stmt.get(id, userId)
        return task
    }

    static createTask(title, userId) {
        const stmt = db.prepare('INSERT INTO tasks (title, user_id) VALUES (?, ?)')
        const info = stmt.run(title, userId)
        return info.lastInsertRowid
    }

    static updateTask(id, title, userId) {
        const stmt = db.prepare('UPDATE tasks SET title = ? WHERE id = ? AND user_id = ?')
        const info = stmt.run(title, id, userId)
        return info.changes
    }

    static deleteTask(id, userId) {
        const stmt = db.prepare('DELETE FROM tasks WHERE id = ? AND user_id = ?')
        const info = stmt.run(id, userId)
        return info.changes
    }

}

export default TaskModel