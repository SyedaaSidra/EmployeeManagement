import React from "react";
import "./DepartmentList.css";
import { useState, useEffect } from "react";
import {
  getDepartments,
  updateDepartment,
  deleteDepartment,
} from "../services/depService";
function DepartmentList() {
  const [Departments, setDepartments] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", description: "" });
  useEffect(() => {
    fetchDepartments();
  }, []);

  async function fetchDepartments() {
    const departments = await getDepartments();
    console.log(departments);
    setDepartments(departments);
  }
  function handleEdit(dep) {
    setEditId(dep._id);
    setEditForm({
      name: dep.name,
      description: dep.description,
    });
  }

  const handleUpdate = async (id) => {
    await updateDepartment(id, editForm);
    fetchDepartments();
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditForm({ name: "", description: "" });
  };

  async function handleDelete(id) {
    await deleteDepartment(id);
    alert("deleted department with id :" + id);
    fetchDepartments();
  }
  return (
    <>
      <h2>All Departments</h2>
      <ul>
        {Departments.map((dep) => (
          <li key={dep._id}>
            {editId === dep._id ? (
              <>
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  placeholder="Description"
                />
                <button onClick={() => handleUpdate(dep._id)}>Save</button>
                <button onClick={handleCancel} className="cancel">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>{dep.name}</h3>
                <p>{dep.description}</p>
                <button onClick={() => handleEdit(dep)}>Edit</button>
                <button
                  onClick={() => handleDelete(dep._id)}
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

export default DepartmentList;
