/* 
    Express app settings

    @author: Darbaz Ali
    @date: Feb 1st, 2022

    Description
    This file contains all the settings related to the express server,
    also all the middlewares and custom routes has been mounted here
*/
import express from "express"
import dotenv from "dotenv"
dotenv.config()

import taskRoutes from "./routes/taskRoutes.js"

const { log, clear } = console
clear()

const app = express()

const { PORT } = process.env || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*====================================
    MOUND ROUTES
====================================*/
app.get("/", (req, res) => {
    res.send("API is live!")
})

app.use("/api/tasks", taskRoutes)

/*====================================
    LISTEN FOR REQUESTS
====================================*/
app.listen(PORT, () => {
    log(`Server is running on port ${PORT}`)
})
