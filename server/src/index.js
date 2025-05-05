const express = require("express");
require("dotenv").config();
const app = express();
const employees = require("./routes/employees");
const departments = require("./routes/departments");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use("/api", employees);
app.use("/api", departments);
const PORT = process.env.PORT || 5000;
const db_URL = process.env.DATABASE_URL;

const mongooseConnect = async () => {
  try {
    await mongoose.connect(db_URL);
    console.log("db connected");
  } catch (error) {
    console.log("mongoose connection error");
  }
};

mongooseConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
