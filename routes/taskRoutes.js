import express from "express"

import { getAllTasks, createNewTask } from "../controllers/taskControllers.js"

const router = express.Router()

router.route("/").get(getAllTasks).post(createNewTask)

export default router
