import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import AddDepartment from "./components/AddDepartment";
import AddEmployee from "./components/AddEmployee";
import DepartmentList from "./components/DepartmentList";
import EmployeeList from "./components/EmplyeeList";
// import { updateDepartment } from "./src/services/depService";
// import { updateEmployee } from "./src/services/employeeService";
import React from "react";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/show-allemployees" element={<EmployeeList />} />
          <Route path="/show-alldepartments" element={<DepartmentList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
