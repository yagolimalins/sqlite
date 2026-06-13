import express from "express";

import TaskService from "../services/TaskService.js";

class TaskController {

    static getTasks(req, res) {
        const tasks = TaskService.getAllTasks(req.user.id)
        res.status(200)
        res.send(tasks)
    }

    static getTaskById(req, res) {
        const id = req.params.id
        const task = TaskService.getTaskById(id, req.user.id)
        res.status(200)
        res.send(task)
    }

    static createTask(req, res) {
        const title = req.body.title
        const id = TaskService.createTask(title, req.user.id)
        res.status(201)
        res.send(id)
    }

    static updateTask(req, res) {
        const id = req.params.id
        const title = req.body.title
        TaskService.updateTask(id, title, req.user.id)
        res.status(200)
        res.send({ message: "Task updated" })
    }

    static deleteTask(req, res) {
        const id = req.params.id
        const changes = TaskService.deleteTask(id, req.user.id)
        res.status(200)
        res.send({ message: "Task deleted" })
    }

}

export default TaskController