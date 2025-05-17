const API = import.meta.env.VITE_API_DEP;

export const createDepartment = async (dep) => {
  console.log(dep);
  console.log(API);
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dep),
  });
  console.log(res);
  return res.json();
};

export const getDepartments = async () => {
  console.log(API);
  const res = await fetch(
    "https://employeemanagement-production-522e.up.railway.app/api/departments"
  );
  return res.json();
};

export const deleteDepartment = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
export const updateDepartment = async (id, data) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
