import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const taskRouter = new Router()

taskRouter.post('/', TaskController.createTask) // Sem parenteses
taskRouter.get('/', TaskController.getTasks) // Sem parenteses
taskRouter.get('/:id', TaskController.getTaskById) // Sem parenteses
taskRouter.patch('/:id', TaskController.updateTask) // Sem parenteses
taskRouter.delete('/:id', TaskController.deleteTask) // Sem parenteses

export default taskRouter