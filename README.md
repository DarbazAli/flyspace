# flyspace

A REST API with Node and MYSQL

## How to use

### 1) Clone this repo

`git clone https://github.com/DarbazAli/flyspace.git`

### 2) Go into the project folder

`cd flyspace`

### 3) Intall the packages

`npm i` in the root directory

### 4) Run the application

`npm run dev` in the root driectory

### 5) Hit the API endpoint with Postman or any other tool that you would prefer

API Endpoint/ BASE URL: `http://localhost:4000/`
If everything works, you should get a message like "API is live!"

## Methods

### GET

get all tasks
`GET ~BASE_URL/api/tasks`

### CREATE

craete new task
`POST ~BASE_URL/api/tasks`

**Body Params**

```JSON
{
    "title": "My awesome task",
    "description": "A simple task"
}
```

### UPDATE

Update a single task
`PUT ~BASE_URL/api/tasks/:id`

### DELETE

Delete a single task
`DELETE ~BASE_URL/api/tasks/:id`

<hr/>

## DB Modeling

First, you need a running instance of mysql on your machine on port 3306.
Then, you need to create a new database with name `flyspace`

**DB Name**: `flyspace`

After you have created the db, run the following query in your myslq shell or any orther envrionment
that you prefer

```
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(500),
    completed TINYINT DEFAULT(0)
);

```

#### Note:

If you have any problem running the app, shoot me an email at `darbaz.me@gmail.com`
