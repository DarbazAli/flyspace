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
        res.status(200).send("Task created successfully!")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

/*======================================================================
    DELETE TASK
    ====================================================================
    @Description:
    Takes a task id from user, and deletes the corresponding task

    Routing:
    @METHOD: DELETE
    @ROUTE: /api/tasks/id
    @ACCESS: Public

    @URL Parameters
    id: int -> requried
======================================================================= */
const deleteTask = async (req, res) => {
    const { id } = req.params

    // check for ID
    if (!id) {
        res.send("ID is required!")
    }

    try {
        // delete task
        const deletedTask = await flyspaceDB("tasks").where("id", id).del()
        if (deletedTask) {
            res.status(200).send("Task deleted successfully!")
        } else {
            res.status(404).send(`Task with ID ${id} not found!`)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

/*======================================================================
    UPDATE TASK
    ====================================================================
    @Description:
    Takes a task id, title, description, completed from user, and updates the corresponding task

    Routing:
    @METHOD: PUT
    @ROUTE: /api/tasks/id
    @ACCESS: Public

    @URL Parameters
    id: int -> requried

    @BODY Parameters
    title: string -> optional
    description: string -> optional
    completed: boolean -> optional
======================================================================= */
const updateTask = async (req, res) => {
    const { id } = req.params
    const { title, description, completed } = req.body

    // check for ID
    if (!id) {
        res.send("ID is required!")
    }

    if (!title && !description && !completed) {
        res.send("Nothing to update!")
    }

    try {
        //update task
        const updatedTaskQuery = flyspaceDB("tasks").where("id", id)
        if (title) {
            updatedTaskQuery.update({ title: title })
        }

        if (description) {
            updatedTaskQuery.update({ description: description })
        }

        if (completed) {
            updatedTaskQuery.update({ completed: completed })
        }

        const task = await updatedTaskQuery
        if (task) {
            res.send("Task updated")
        } else {
            res.send("Error: Task not found")
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export { getAllTasks, createNewTask, deleteTask, updateTask }
