import TaskNotFoundError from "../errors/TaskNotFoundError.js";
import ValidationError from "../errors/ValidationError.js";
import TaskModel from "../models/TaskModel.js";

class TaskService {

    static getAllTasks(userId) {
        const tasks = TaskModel.getAllTasks(userId)
        return tasks
    }

    static getTaskById(id, userId) {
        const task = TaskModel.getTaskById(id, userId)
        if (!task) {
            throw new TaskNotFoundError("A task não foi encontrada")
        }
        return task
    }

    static createTask(title, userId) {
        if (title.length < 10) {
            throw new ValidationError("O campo título deve ter ao menos 10 caracteres")
        }
        const id = TaskModel.createTask(title, userId)
        return id
    }

    static updateTask(id, title, userId) {
        if (title === undefined || title === null || title === "") {
            throw new ValidationError("O campo titulo é obrigatorio")
        }
        if (title.length < 10) {
            throw new ValidationError("O campo título deve ter ao menos 10 caracteres")
        }

        const changes = TaskModel.updateTask(id, title, userId)

        if (changes === 0) {
            throw new TaskNotFoundError("A task não foi encontrada")
        }
        return changes
    }

    static deleteTask(id, userId) {
        const changes = TaskModel.deleteTask(id, userId)
        if (changes === 0) {
            throw new TaskNotFoundError("A task não foi encontrada")
        }
        return changes
    }

}

export default TaskService