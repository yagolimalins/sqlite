import express from "express"
import taskRouter from "./src/router/taskRouter.js";
import GlobalErrorHandler from "./src/errors/GlobalErrorHandler.js";

const app = express()
const port = 4000

app.use(express.json());

app.use("/tasks", taskRouter)

app.use(GlobalErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})