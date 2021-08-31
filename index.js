const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const carsRoutes = require("./src/routes/carsRoutes");
require("dotenv/config");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cars", carsRoutes);

mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => app.listen(5000, (req, res) => {}))
	.catch((err) => console.log(err));
