const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    require: [true, "task is Required"],
    trim: true,
    maxlength: [25, "task must be 25 Ch Long"],
  },
  description: {
    type: String,
    require: [true, "description is Required"],
  },
});
const model = mongoose.model("todo", todoSchema);
module.exports = model;
