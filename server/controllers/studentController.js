
const getStudents = (req, res) => {
  res.json({
    success: true,
    message: "Student list fetched successfully"
  });
};

const getStudentById = (req, res) => {
  res.json({
    success: true,
    message: "Student fetched successfully",
    studentId: req.params.id
  });
};

const createStudent = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: req.body
  });
};

const updateStudent = (req, res) => {
  res.json({
    success: true,
    message: "Student updated successfully",
    studentId: req.params.id,
    data: req.body
  });
};

const deleteStudent = (req, res) => {
  res.json({
    success: true,
    message: "Student deleted successfully",
    studentId: req.params.id
  });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
