const mongoose = require("mongoose");
const watercraftSchema = mongoose.Schema({
watercraft_type: String,
length: Number,
maximum_capacity: Number
});
module.exports = mongoose.model("watercraft",
watercraftSchema);