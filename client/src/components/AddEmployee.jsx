import React from "react";
import "./AddEMployee.css";
import { createEmployee } from "../services/employeeService";
import { useState } from "react";
import { useEffect } from "react";
import { getDepartments } from "../services/depService";
function addEmployee() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    department: "",
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchDepartments() {
      const departmentsNew = await getDepartments();
      setDepartments(departmentsNew);
    }
    fetchDepartments();
  }, []);

  async function handleData(e) {
    e.preventDefault();
    const res = await createEmployee(form);
    alert("Employee added!", res);
    setForm({ name: "", surname: "", dateOfBirth: "", department: "" });
  }

  return (
    <>
      <form onSubmit={handleData}>
        <h2>Add Employee</h2>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <label htmlFor="">Surname : </label>
        <input
          type="text"
          placeholder="surname"
          value={form.surname}
          onChange={(e) => {
            setForm({ ...form, surname: e.target.value });
          }}
        />

        <label htmlFor="">Date Of Birth : </label>
        <input
          type="text"
          placeholder="Date Of Birth"
          value={form.dateOfBirth}
          onChange={(e) => {
            setForm({ ...form, dateOfBirth: e.target.value });
          }}
        />
        <label htmlFor="">Choose Department : </label>
        <select
          value={form.department || ""}
          onChange={(e) => {
            setForm({ ...form, department: e.target.value });
          }}
        >
          {/* <option value="">-- Select Department --</option> */}
          {departments.map((dep) => (
            <option key={dep._id} value={dep._id}>
              {dep.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Employee</button>
      </form>
    </>
  );
}

export default addEmployee;
