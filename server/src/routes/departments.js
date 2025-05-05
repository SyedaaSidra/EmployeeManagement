const express = require("express");
const router = express.Router();
const {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  deleteDepartment,
} = require("../controller/department.controller");

router.get("/departments", getAllDepartments);
router.get("/department/:id", getDepartmentById);
router.delete("/department/:id", deleteDepartment);
router.post("/department", createDepartment);

module.exports = router;
