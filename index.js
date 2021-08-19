const express = require("express"); // lines 1-8 are REQUIRED, to run an Express App
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors());

mongoose // lines 10-21 makes a connection to the database using mongoose
	.connect(process.env.DB_CONNECTION, {
		// dynamically inserting the data instead of the actual string
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() =>
		app.listen(5000, (req, res) => {
			console.log("Houston, connection was made.");
		})
	)
	.catch((err) => console.log(err));

// lines 25-29 creates the schema in mongoose
const logHistorySchema = mongoose.Schema({
	date: Date,
	brand: String,
});

const logHistory = mongoose.model("Event", logHistorySchema);

function getAllLogEntries() {
	logHistory
		.find()
		.then((allLogs) =>
			console.log("here is the log History as requested", allLogs)
		)
		.catch((err) => console.log("something broke, assemble the monkeys", err));
}

getAllLogEntries();

function createLogEntry() {
	const newLog = new logHistory({
		date: "2021-08-02",
		brand: "HKS",
	});
	newLog
		.save()
		.then(() => console.log("logEntry was saved"))
		.catch((err) => console.log("logEntry was not saved, err"));
}

createLogEntry();

//routes go here
app.get("/", (req, res) => {
	createLogEntry();
	res.send("Log added successfully.");
});
