import express from "express"
import dotenv from "dotenv"
dotenv.config()

const { log, clear } = console
clear()

const app = express()

const { PORT } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("API is live!")
})

app.listen(PORT, () => {
    log(`Server is running on port ${PORT}`)
})
