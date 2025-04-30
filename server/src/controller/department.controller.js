const departmentModel = requir("../models/department.js");

//create new Department:

exports.createDepartment = async (req, res) => {
  const { id, name, description } = req.body;
  try {
    const alreadyExist = await departmentModel.findById(id);
    if (alreadyExist) {
      res.status(409).json({ message: "this department already Exist" });
    }
    const newDepartment = new departmentModel({ name, description });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const AllDepartments = await departmentModel.find({});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//department by Id

exports.getDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const department = departmentModel.findById(id);
    if (!department) {
      res.status(404).json({ error: "depaterment does not exist" });
    }
    res.status(200).json({ message: department });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete a department
exports.deleteDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDepartment = await departmentModel.findByIdAndDelete(id);

    if (!deletedDepartment) {
      return res.status(404).json({ error: "Department not found" });
    }

    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
