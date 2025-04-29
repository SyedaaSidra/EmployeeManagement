const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
exports.module = mongoose.model("Department", departmentSchema);
