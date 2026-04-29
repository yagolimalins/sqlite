import TaskModel from "../models/TaskModel.js";

class TaskService {

    static getAllTasks() {
        const tasks = TaskModel.getAllTasks()
        return tasks
    }

    static createTask(title) {
        const id = TaskModel.createTask(title)
        return id
    }

    static updateTask(id, title) {
        const changes = TaskModel.updateTask(id, title)
        return changes
    }

    static deleteTask(id) {
        const changes = TaskModel.deleteTask(id)
        return changes
    }

}

export default TaskService