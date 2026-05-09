import TaskNotFoundError from "../errors/TaskNotFoundError.js";
import ValidationError from "../errors/ValidationError.js";
import TaskModel from "../models/TaskModel.js";

class TaskService {

    static getAllTasks() {
        const tasks = TaskModel.getAllTasks()
        return tasks
    }

    static getTaskById(id) {
        const task = TaskModel.getTaskById(id)
        if (!task) {
            throw new TaskNotFoundError("A task não foi encontrada")
        }
        return task
    }

    static createTask(title) {
        if (title.length < 10) {
            throw new ValidationError("O campo título deve ter ao menos 10 caracteres")
        }
        const id = TaskModel.createTask(title)
        return id
    }

    static updateTask(id, title) {
        if (title === undefined || title === null || title === "") {
            throw new ValidationError("O campo titulo é obrigatorio")
        }
        if (title.length < 10) {
            throw new ValidationError("O campo título deve ter ao menos 10 caracteres")
        }

        const changes = TaskModel.updateTask(id, title)
        
        if (changes === 0) {
            throw new TaskNotFoundError("A task não foi encontrada")
        }
        return changes
    }

    static deleteTask(id) {
        const changes = TaskModel.deleteTask(id)
        if (changes === 0) {
            throw new TaskNotFoundError("A task não foi encontrada")
        }
        return changes
    }

}

export default TaskService