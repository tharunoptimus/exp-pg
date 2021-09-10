// Format from https://www.elephantsql.com/docs/nodejs.html

const pg = require("pg")
const conString = "ELEPHANTSQL_CONNECTION_URL_STRING"
const client = new pg.Client(conString)
client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err)
	} else {
		console.log("Database connection successful!")
	}
})

module.exports = client
