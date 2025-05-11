const express = require("express");
const router = express.Router();
const {
  createemployee,
  getAllemployees,
  getemployeeById,
  deleteemployee,
  updateEmployee,
} = require("../controller/employee.controller");

router.get("/employees", getAllemployees);
router.get("/employee/:id", getemployeeById);
router.delete("/employee/:id", deleteemployee);
router.post("/employee", createemployee);
router.put("/employee/:id", updateEmployee);

module.exports = router;
