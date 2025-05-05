const express = require("express");
const router = express.Router();
const {
  createemployee,
  getAllemployees,
  getemployeeById,
  deleteemployee,
} = require("../controller/employee.controller");

router.get("/employees", getAllemployees);
router.get("/employees/:id", getemployeeById);
router.delete("/employees/:id", deleteemployee);
router.post("/employees", createemployee);

module.exports = router;
