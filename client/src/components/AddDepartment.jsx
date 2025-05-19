import React from "react";
import "./AddDepatrment.css";
import { createDepartment } from "../services/depService";
import { useState } from "react";
function addDepartment() {
  const [form, setForm] = useState({ name: "", description: "" });

  async function handleData(e) {
    e.preventDefault();
    const res = await createDepartment(form);
    setForm({ name: "", description: "" });
    alert("Department added succesfully.");
  }

  return (
    <>
      <form onSubmit={handleData}>
        <h2>Add Department</h2>
        <label htmlFor="">Department Name: </label>
        <input
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <label htmlFor="">Department Description: </label>
        <input
          type="text"
          placeholder="Description"
          required
          value={form.description}
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default addDepartment;
