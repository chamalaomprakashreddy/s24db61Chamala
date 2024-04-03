const mongoose = require("mongoose")
const watercraftSchema = mongoose.Schema({
watercraft_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("watercraft",
watercraftSchema)