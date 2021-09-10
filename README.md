# Simple Todo RESTful API with Express and PostgreSQL

## Config
- Log on the Elephant SQL and create an instance of PostgreSQL
- Get the connection URL and replace the string in the db.js

## Install
`npm install` to install the dependencies

### Dependencies used
- [express](https://expressjs.com/)
- [postgresql](https://node-postgres.com/)


## Run
`npm start` to start the server

## API Endpoints
- <button style="
    color: white; 
    background-color: #61affe;
    border-radius: 3px;
    outline: none;
    border: 0;
    padding: 6px;
    margin: 2px 5px;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 1px 0 rgb(0 0 0 / 10%); 
  ">
    GET
  </button>`/todos`: returns all todos
- <button style="
    color: white; 
    background-color: #61affe;
    border-radius: 3px;
    outline: none;
    border: 0;
    padding: 6px;
    margin: 2px 5px;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 1px 0 rgb(0 0 0 / 10%); 
  ">
    GET
  </button>`/todos/:id`: returns a todo by id
- <button style="
    color: white; 
    background-color: #49cc90;
    border-radius: 3px;
    outline: none;
    border: 0;
    padding: 6px;
    margin: 2px 5px;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 1px 0 rgb(0 0 0 / 10%); 
  ">
    POST
  </button>`/todos`: creates a new todo
    - body { description: string }
- <button style="
    color: white; 
    background-color: #fca130;
    border-radius: 3px;
    outline: none;
    border: 0;
    padding: 6px;
    margin: 2px 5px;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 1px 0 rgb(0 0 0 / 10%); 
  ">
    PUT
  </button>`/todos`: updates a todo by id
    - `body`: { description: string }
- <button style="
    color: white; 
    background-color: #f93e3e;
    border-radius: 3px;
    outline: none;
    border: 0;
    padding: 6px;
    margin: 2px 5px;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 1px 0 rgb(0 0 0 / 10%); 
  ">
    DELETE
  </button>`/todos/:id`: deletes a todo by id

## Info
- This is a simple RESTful API with Express and PostgreSQL
- The Postgres Instance is hosted on Elephant SQL
- Can be used as a boilerplate for a RESTful API with Express and PostgreSQL

Enjoy! 🎉