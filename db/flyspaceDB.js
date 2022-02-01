import dotenv from "dotenv"
import knex from "knex"

dotenv.config()

// grab env variables
// const { DB_HOST, DB_USER, DB_PASSWORD, NODE_ENV } = process.env

const database = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "flyspace",
    },
})

export default database
