const mongoose = require("mongoose");
const watercraftSchema = mongoose.Schema({
watercraft_type: {
    type:String,
    minlength:[1],
    maxlength:[30]
},
length:  {
    type: Number,
    required: true,
    max: [1000],
    min: [0]
  },
maximum_capacity: Number
});
module.exports = mongoose.model("watercraft",
watercraftSchema);