const employeeModel = require("../models/Employee");

//create new employee:

exports.createemployee = async (req, res) => {
  const { id, name, surname, department } = req.body;
  try {
    const alreadyExist = await employeeModel.findById(id);
    if (alreadyExist) {
      res.status(409).json({ message: "this employee already Exist" });
    }
    const newemployee = new employeeModel({ id, name, surname, department });
    await newemployee.save();
    res.status(201).json(newemployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllemployees = async (req, res) => {
  try {
    const Allemployees = await employeeModel.find({});
    res.json(Allemployees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//employee by Id

exports.getemployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await employeeModel.findById(id);
    if (!employee) {
      res.status(404).json({ error: "employee does not exist" });
    }
    res.status(200).json({ message: employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete a employee
exports.deleteemployee = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedemployee = await employeeModel.findByIdAndDelete(id);

    if (!deletedemployee) {
      return res.status(404).json({ error: "employee not found" });
    }

    res.status(200).json({ message: "employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
