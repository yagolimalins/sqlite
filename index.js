import express from "express"
import taskRouter from "./src/router/taskRouter.js";
import userRouter from "./src/router/userRouter.js";
import GlobalErrorHandler from "./src/errors/GlobalErrorHandler.js";

const app = express()
const port = 4000

app.use(express.json());

app.use("/tasks", taskRouter)
app.use("/users", userRouter)

app.use(GlobalErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})