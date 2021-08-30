const mongoose = require("mongoose");
const logHistorySchema = mongoose.Schema({
	datelastchecked: String,
	brand: String,
});

module.exports = mongoose.model("loghistory", logHistorySchema);
