
import { useState } from "react";
import { createStudent } from "../../services/studentService";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
    setApiError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(false);
    setApiError("");

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      await createStudent(formData);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        studentId: "",
        course: "",
      });
    } catch (error) {
      setApiError(
        error.response?.data?.message ||
        "Unable to register student. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      studentId: "",
      course: "",
    });

    setErrors({});
    setSubmitted(false);
    setApiError("");
  };

  return (
    <section className="registration-page">
      <div className="registration-card">

        <div className="registration-header">
          <h1>Student Registration</h1>
          <p>Fill in your details to create your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">

          <div className="form-group">
            <label htmlFor="name">
              Full Name <span>*</span>
            </label>

            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span>*</span>
            </label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span>*</span>
            </label>

            <div className="input-wrapper">
              <span className="input-icon">☎</span>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
              />
            </div>

            {errors.phone && <p className="form-error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="studentId">
              Student ID <span>*</span>
            </label>

            <div className="input-wrapper">
              <span className="input-icon">▣</span>
              <input
                id="studentId"
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter your student ID"
              />
            </div>

            {errors.studentId && (
              <p className="form-error">{errors.studentId}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="course">
              Course <span>*</span>
            </label>

            <div className="input-wrapper">
              <span className="input-icon">🎓</span>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select your course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MCA">MCA</option>
              </select>
            </div>

            {errors.course && <p className="form-error">{errors.course}</p>}
          </div>

          <div className="form-buttons">
            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? "Registering..." : "👤+ Register Student"}
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
              disabled={loading}
            >
              ↻ Reset
            </button>
          </div>

          {apiError && (
            <div className="form-error">{apiError}</div>
          )}

          {submitted && (
            <div className="success-message">
              <span>✓</span>
              Student registered successfully!
            </div>
          )}

        </form>
      </div>
    </section>
  );
}

export default StudentRegistration;
