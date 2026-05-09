import express from "express"
import taskRouter from "./src/router/taskRouter.js";
import userRouter from "./src/router/userRouter.js";
import authRouter from "./src/router/authRouter.js";
import GlobalErrorHandler from "./src/middlewares/ErrorHandlerMiddleware.js";
import AuthMiddleware from "./src/middlewares/AuthMiddleware.js";

const app = express()
const port = 4000

app.use(express.json());

app.use("/auth", authRouter)

app.use(AuthMiddleware)

app.use("/tasks", taskRouter)
app.use("/users", userRouter)

app.use(GlobalErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})