import db from "../database/db.js";

class TaskModel {

    static getAllTasks() {
        const stmt = db.prepare('SELECT * FROM tasks')
        const tasks = stmt.all()
        return tasks
    }

    static createTask(title) {
        const stmt = db.prepare('INSERT INTO tasks (title) VALUES (?)')
        const info = stmt.run(title)
        return info.lastInsertRowid
    }

    static updateTask(id, title) {
        const stmt = db.prepare('UPDATE tasks SET title = ? WHERE id = ?')
        const info = stmt.run(title, id)
        return info.changes
    }

    static deleteTask(id) {
        const stmt = db.prepare('DELETE FROM tasks WHERE id = ?')
        const info = stmt.run(id)
        return info.changes
    }

}

export default TaskModel