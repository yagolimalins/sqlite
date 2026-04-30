import express from "express";

import TaskService from "../services/TaskService.js";

class TaskController {

    static getTasks(req, res) {
        const tasks = TaskService.getAllTasks()
        res.status(200)
        res.send(tasks)
    }

    static createTask(req, res) {
        const title = req.body.title
        const id = TaskService.createTask(title)
        res.status(201)
        res.send(id)
    }

    static updateTask(req, res) {
        const id = req.params.id
        const title = req.body.title
        TaskService.updateTask(id, title)
        res.status(200)
        res.send({ message: "Task updated" })
    }

    static deleteTask(req, res) {
        const id = req.params.id
        const changes = TaskService.deleteTask(id)
        res.status(200)
        res.send({ message: "Task deleted" })
    }

}

export default TaskController