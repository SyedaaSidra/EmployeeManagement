const API = import.meta.env.VITE_API_EMP;

export const createEmployee = async (employee) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

export const getEmplyees = async () => {
  const res = await fetch(API + "s");
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
export const updateEmployee = async (id, data) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
