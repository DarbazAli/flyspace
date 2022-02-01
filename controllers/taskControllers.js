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

/*= ======================================================================
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

export { getAllTasks }
