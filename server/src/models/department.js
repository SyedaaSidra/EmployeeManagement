const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Department", departmentSchema);
