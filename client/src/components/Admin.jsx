import { useNavigate } from "react-router-dom";
import React from "react";
import "./Admin.css";
function Admin() {
  const navigate = useNavigate();

  return (
    <div className=" main">
      <h2>Admin Panel</h2>
      <button onClick={() => navigate("/add-department")}>
        Add Department
      </button>
      <button onClick={() => navigate("/add-employee")}>Add Employee</button>
      <button onClick={() => navigate("/show-alldepartments")}>
        Show Departments
      </button>
      <button onClick={() => navigate("/show-allemployees")}>
        Show Employees
      </button>
    </div>
  );
}
export default Admin;
