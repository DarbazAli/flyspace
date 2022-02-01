import express from "express"

import {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
} from "../controllers/taskControllers.js"

const router = express.Router()

router.route("/").get(getAllTasks).post(createNewTask)

router.route("/:id").delete(deleteTask).put(updateTask)

export default router
