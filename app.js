import express from "express"
import dotenv from "dotenv"
import flyspaceDB from "./db/flyspaceDB.js"
dotenv.config()

const { log, clear } = console
clear()

const app = express()

const { PORT } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api/tasks", async (req, res) => {
    const tasks = await flyspaceDB("tasks")
    if (tasks.length > 0) {
        res.json(tasks)
    } else {
        res.send("tasks not fouund")
    }
})

app.get("/", (req, res) => {
    res.send("API is live!")
})

app.listen(PORT, () => {
    log(`Server is running on port ${PORT}`)
})
