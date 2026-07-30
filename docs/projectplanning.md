Campus Connect – University Management System
Template ID: T1
Domain: Education
Difficulty Level: Medium
Recommended Team Size: 3–5 Students
Technology Stack: MERN Stack (MongoDB, Express.js, React.js, Node.js)

1. Project Overview
Campus Connect is a web-based University Management System designed to simplify the
management of academic and administrative activities within an educational institution. The
system provides a centralized platform where administrators, faculty members, and students can
securely access and manage information related to courses, assignments, announcements, and
academic records.
The project aims to replace manual or fragmented systems with an integrated digital solution that
improves communication, enhances efficiency, and provides easy access to academic information.
Students will develop this application using the MERN Stack while following modern software
development practices such as version control, RESTful API development, authentication,
database management, and cloud deployment.
2. Project Objective

The primary objective of Campus Connect is to design and develop a secure, scalable, and user-
friendly web application that manages academic information efficiently.

By completing this project, students will gain practical experience in building a full-stack web
application while applying concepts learned throughout the course.
3. Problem Statement
Many educational institutions continue to manage academic activities using disconnected systems
or manual processes. Student records, course information, assignment submissions, and
announcements are often stored across multiple platforms, making information difficult to access
and maintain.
Campus Connect addresses these challenges by providing a centralized web application that
enables authorized users to manage academic information efficiently while improving
communication among students, faculty members, and administrators.

4. Project Goals
The system should enable users to:
• Manage student records.
• Manage faculty information.
• Create and manage academic courses.
• Publish announcements.
• Upload and manage assignments.
• Allow students to view course information.
• Provide role-based access to different users.
• Maintain accurate academic records.
• Improve communication between faculty and students.
. Target Users
The application supports three primary user roles.
User Role Responsibilities
Administrator Manage users, departments, courses, announcements, and system settings.
Faculty Manage assigned courses, assignments, announcements, and student information.
Student View enrolled courses, assignments, announcements, and personal profile.
6. Core Modules
The following modules form the foundation of the project.
Module 1 – User Management
Responsible for:
• User Registration
• User Login
• Role Management
• Password Management
• Profile Management

Module 2 – Student Management
Responsible for:
• Add Student
• Update Student
• Delete Student
• Search Student
• View Student Details
Module 3 – Faculty Management
Responsible for:
• Add Faculty
• Assign Faculty
• Faculty Profile
• Faculty Information
Module 4 – Course Management
Responsible for:
• Create Course
• Update Course
• Delete Course
• Assign Faculty to Course
• Student Enrollment (optional enhancement)
Module 5 – Assignment Management
Responsible for:
• Create Assignment
• Assignment Deadline
• View Assignment
• Assignment Submission (optional enhancement)

Module 6 – Announcement Management
Responsible for:
• Publish Announcement
• Edit Announcement
• Delete Announcement
• View Announcements
7. Functional Requirements
The system should support the following functionalities.
Authentication
• User Registration
• User Login
• Password Encryption
• JWT Authentication
• Role-Based Authorization
Student Management
• Add Student
• Edit Student
• Delete Student
• View Student List
• Search Students
Faculty Management
• Add Faculty
• Update Faculty
• Delete Faculty
• Search Faculty
Course Management
• Add Course

• Edit Course
• Delete Course
• View Course List
Assignment Management
• Create Assignment
• View Assignment
• Update Assignment
• Delete Assignment
Announcement Management
• Create Announcement
• Edit Announcement
• Delete Announcement
8. Non-Functional Requirements
The system should satisfy the following quality requirements.
Performance
• Fast page loading
• Efficient database queries
• Responsive API responses
Security
• Password hashing
• JWT authentication
• Protected routes
• Input validation
Usability
• Simple user interface
• Responsive design
• Easy navigation

Maintainability
• Modular code
• Reusable React components
• Organized folder structure
Scalability
The application should allow future expansion by adding additional modules without major
redesign.
9. Suggested Database Collections
Collection Description
Users Stores login credentials and roles
Students Stores student information
Faculty Stores faculty details
Courses Stores course information
Assignments Stores assignment records
Announcements Stores university announcements
10. Suggested Application Pages
Public Pages
• Login
• Register
• Forgot Password (Optional)
Administrator Pages
• Dashboard
• Students
• Faculty
• Courses
• Assignments

• Announcements
• Profile
• Settings
Faculty Pages
• Dashboard
• My Courses
• Assignments
• Announcements
• Profile
Student Pages
• Dashboard
• My Courses
• Assignments
• Announcements
• Profile
11. Suggested REST API Endpoints
Authentication
• POST /api/auth/register
• POST /api/auth/login
• GET /api/auth/profile
Students
• GET /api/students
• GET /api/students/:id
• POST /api/students
• PUT /api/students/:id
• DELETE /api/students/:id
Faculty

• GET /api/faculty
• POST /api/faculty
• PUT /api/faculty/:id
• DELETE /api/faculty/:id
Courses
• GET /api/courses
• POST /api/courses
• PUT /api/courses/:id
• DELETE /api/courses/:id
Assignments
• GET /api/assignments
• POST /api/assignments
• PUT /api/assignments/:id
• DELETE /api/assignments/:id
Announcements
• GET /api/announcements
• POST /api/announcements
• PUT /api/announcements/:id
• DELETE /api/announcements/:id
12. Expected Learning Outcomes
After completing this project, students will be able to:
• Design a multi-user web application.
• Build reusable React components.
• Develop RESTful APIs using Express.js.
• Design MongoDB databases using Mongoose.
• Implement CRUD operations.
• Apply authentication and authorization.

• Connect frontend and backend applications.
• Manage application state effectively.
• Use Git and GitHub for version control.
• Deploy a full-stack MERN application.
13. Optional Enhancement Features
Groups that complete the required features early may implement one or more advanced
enhancements:
• Email notifications for announcements.
• Course enrollment requests.
• Assignment file upload and download.
• Student attendance tracking.
• Academic calendar integration.
• Dashboard charts and analytics.
• Export student records to PDF or Excel.
• Dark mode.
• Profile image upload.
• Activity logs.
14. Deliverables
Each group must submit:
• Complete source code (Frontend & Backend).
• GitHub repository with commit history.
• Live deployed application.
• Database schema/documentation.
• README file with setup instructions.
• API documentation.
• User manual.
• Final presentation.