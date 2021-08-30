const logHistorySchema = require("../models/carsModel");

exports.createLogHistory = (req, res) => {
	new logHistorySchema(req.body)
		.save()
		.then(() => res.status(200).send("created entry."))
		.catch((err) => console.error("could not create entry.", err));
};

exports.getLogHistory = (req, res) => {
	logHistorySchema.find({}).then((data) => {
		res.send({ data });
	});
};
