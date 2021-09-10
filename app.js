const express = require("express")
const app = express()
const client = require("./db")
const port = process.env.PORT || 3003

app.listen(port, () => {
	console.log("Server Listening on port ", port)
})

app.use(express.json())

// get all todos
app.get("/todos", async (req, res, next) => {
	try {
		let allTodos = await client.query("SELECT * FROM todo")
		res.status(200).json(allTodos.rows)
	} catch (err) {
		console.log(err.message)
	}
})

// get a todo
app.get("/todos/:id", async (req, res, next) => {
	try {
		let { id } = req.params
		let todo = await client.query("SELECT * FROM todo WHERE todo_id = $1", [
			id,
		])
		res.status(200).json(todo.rows[0])
	} catch (err) {
		console.log(err.message)
	}
})

// create a todo
app.post("/todos", async (req, res, next) => {
	try {
		let { description } = req.body
		let newTodo = await client.query(
			"INSERT INTO todo (description) VALUES ($1) RETURNING *",
			[description]
		)
		res.status(201).json(newTodo.rows[0])
	} catch (err) {
		console.log(err.message)
	}
})

// update a todo
app.put("/todos/:id", async (req, res, next) => {
	try {
		let { id } = req.params // WHERE
		let { description } = req.body // SET
		let updateTodo = await client.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		)
		res.status(204).send("Todo was updated")
	} catch (err) {
		console.log(err.message)
	}
})

// delete a todo
app.delete("/todos/:id", async (req, res, next) => {
	try {
		let { id } = req.params
		let deleteTodo = await client.query(
			"DELETE FROM todo WHERE todo_id = $1",
			[id]
		)
		res.status(204).send("Todo was deleted")
	} catch (error) {
		console.error(error.message)
	}
})
