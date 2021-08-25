const mongoose = require("mongoose");
const logHistorySchema = mongoose.Schema({
	datelastchecked: Date,
	brand: String,
});

module.exports = mongoose.model("loghistory", logHistorySchema);
