/* 
    Task Controllers

    These controllers are handilng all the functionalities related to tasks, including
    - Reading Tasks
    - Creating Task
    - Getging Single Task
    - Updating Task

    @author: Darbaz Ali
    @date: Feb 1st, 2022
*/

import flyspaceDB from "../db/flyspaceDB.js"

/*======================================================================
    GET ALL TASKS
    ====================================================================
    @Description:
    Retrives all the availabel tasks from the database.

    Routing:
    @METHOD: GET
    @ROUTE: /api/tasks
    @ACCESS: Public

    @Query Parameters
    None
======================================================================= */
const getAllTasks = async (req, res) => {
    try {
        const tasks = await flyspaceDB("tasks")
        if (tasks.length > 0) {
            res.json(tasks)
        } else {
            res.send("Not tasks were found!")
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

/*======================================================================
    CREATE NEW TASK
    ====================================================================
    @Description:
    Takes uer input and as a taks, and puts into DB

    Routing:
    @METHOD: POST
    @ROUTE: /api/tasks
    @ACCESS: Public

    @Body Parameters
    title: String -> requried
    description: String -> optional
======================================================================= */
const createNewTask = async (req, res) => {
    const { title, description } = req.body

    // check for title
    if (!title) {
        res.send("Title is required!")
    }

    try {
        await flyspaceDB("tasks").insert({ title, description })
        res.status(200).send("Taks created successfully!")
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export { getAllTasks, createNewTask }
