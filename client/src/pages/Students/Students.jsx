
import { useEffect, useState } from "react";
import {
  getStudents,
  updateStudent,
  deleteStudent,
} from "../../services/studentService";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
    course: "",
  });

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getStudents();
      setStudents(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load students.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleEdit = (student) => {
    console.log("Edit clicked:", student);

    setEditingId(student._id);
    setFormData({
      name: student.name || "",
      email: student.email || "",
      phone: student.phone || "",
      studentId: student.studentId || "",
      course: student.course || "",
    });
    setMessage("");
    setError("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      setError("");
      setMessage("");

      const response = await updateStudent(editingId, formData);

      setStudents((previousStudents) =>
        previousStudents.map((student) =>
          student._id === editingId ? response.data : student
        )
      );

      setEditingId(null);
      setMessage("Student updated successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to update student.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      await deleteStudent(id);

      setStudents((previousStudents) =>
        previousStudents.filter((student) => student._id !== id)
      );

      setMessage("Student deleted successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to delete student.");
    }
  };

  if (loading) return <p>Loading students...</p>;

  return (
    <section className="students-page">
      <h1>Student List</h1>
      <p>Students registered in Campus Connect.</p>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="form-error">{error}</p>}

      {editingId && (
        <div className="card">
          <h2>Edit Student</h2>

          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Student ID</label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MCA">MCA</option>
              </select>
            </div>

            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditingId(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="students-list">
          {students.map((student) => (
            <div className="card" key={student._id}>
              <h3>{student.name}</h3>
              <p>Email: {student.email}</p>
              <p>Phone: {student.phone}</p>
              <p>Student ID: {student.studentId}</p>
              <p>Course: {student.course}</p>

              <button type="button" onClick={() => handleEdit(student)}>
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(student._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Students;
