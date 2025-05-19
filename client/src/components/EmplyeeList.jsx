import React from "react";
import "./DepartmentList.css";
import { useState, useEffect } from "react";
import {
  getEmplyees,
  deleteEmployee,
  updateEmployee,
} from "../services/employeeService";
import { getDepartments } from "../services/depService";
function EmployeeList() {
  const [Employees, setEmloyees] = useState([]);
  const [Departments, setDepartments] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    department: "",
  });
  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
  }, []);

  async function fetchDepartments() {
    const departments = await getDepartments();
    console.log(departments);
    setDepartments(departments);
  }

  async function fetchEmployees() {
    const employees = await getEmplyees();
    console.log(employees);
    setEmloyees(employees);
  }
  function handleEdit(emp) {
    console.log("#########");
    setEditId(emp._id);
    setEditForm({
      name: emp.name,
      surname: emp.surname,
      dateOfBirth: emp.dateOfBirth,
      department: emp.department,
    });
  }

  const handleUpdate = async (id) => {
    await updateEmployee(id, editForm);
    fetchEmployees();
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditForm({ name: "", surname: "", dateOfBirth: "", department: "" });
  };

  async function handleDelete(id) {
    await deleteEmployee(id);
    alert("deleted employess with id :" + id);
    fetchEmployees();
  }
  return (
    <>
      <h2>All Employees</h2>
      <ul>
        {Employees.map((emp) => (
          <li key={emp._id}>
            {editId === emp._id ? (
              <>
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  value={editForm.surname}
                  onChange={(e) =>
                    setEditForm({ ...editForm, surname: e.target.value })
                  }
                  placeholder="Surname"
                />
                <input
                  value={editForm.dateOfBirth}
                  onChange={(e) =>
                    setEditForm({ ...editForm, dateOfBirth: e.target.value })
                  }
                  placeholder="Date of Birth"
                />
                <select
                  value={editForm.department}
                  onChange={(e) =>
                    setEditForm({ ...editForm, department: e.target.value })
                  }
                >
                  {Departments.map((dep) => (
                    <option key={dep._id} value={dep._id}>
                      {dep.name}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleUpdate(emp._id)}>Save</button>
                <button onClick={handleCancel} className="cancel">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>
                  {emp.name} {emp.surname}
                </h3>
                <p>{emp.dateOfBirth}</p>

                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button
                  onClick={() => handleDelete(emp._id)}
                  className="delete"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default EmployeeList;
