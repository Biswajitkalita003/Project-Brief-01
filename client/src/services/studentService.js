
import api from "./api";

// Get all students
export const getStudents = async () => {
  const response = await api.get("/students");
  return response.data;
};

// Create a student
export const createStudent = async (studentData) => {
  const response = await api.post("/students", studentData);
  return response.data;
};

// Update a student
export const updateStudent = async (id, studentData) => {
  const response = await api.put(`/students/${id}`, studentData);
  return response.data;
};

// Delete a student
export const deleteStudent = async (id) => {
  const response = await api.delete(`/students/${id}`);
  return response.data;
};
