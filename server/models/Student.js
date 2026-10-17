
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\d{10}$/, "Phone number must contain 10 digits"]
  },

  studentId: {
    type: String,
    required: [true, "Student ID is required"],
    trim: true,
    unique: true
  },

  course: {
    type: String,
    required: [true, "Course is required"],
    trim: true
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
