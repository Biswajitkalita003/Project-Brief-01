# Campus Connect – University Management System

## Template Information

| Field | Details |
|--------|---------|
| **Template ID** | T1 |
| **Domain** | Education |
| **Difficulty Level** | Medium |
| **Recommended Team Size** | 3–5 Students |
| **Technology Stack** | MERN Stack (MongoDB, Express.js, React.js, Node.js) |

---

# 1. Project Overview

Campus Connect is a web-based **University Management System** designed to simplify academic and administrative activities within an educational institution.

The platform provides a centralized system where **administrators**, **faculty members**, and **students** can securely access and manage:

- Courses
- Assignments
- Announcements
- Student Records
- Faculty Information
- Academic Records

Instead of relying on manual paperwork or disconnected systems, Campus Connect offers a modern digital solution that improves communication, increases efficiency, and makes academic information easily accessible.

Students will build this project using the **MERN Stack** while following modern software engineering practices including:

- Version Control (Git & GitHub)
- REST API Development
- Authentication & Authorization
- Database Management
- Cloud Deployment

---

# 2. Project Objective

The primary objective of Campus Connect is to design and develop a **secure**, **scalable**, and **user-friendly** web application that efficiently manages academic information.

By completing this project, students will gain practical experience in:

- Building a Full Stack MERN application
- Designing REST APIs
- Working with MongoDB databases
- Implementing Authentication & Authorization
- Developing reusable React components
- Deploying real-world applications

---

# 3. Problem Statement

Many educational institutions still manage academic activities using disconnected software systems or manual processes.

Common issues include:

- Student records stored across multiple systems
- Difficult management of assignments
- Poor communication between faculty and students
- Lack of centralized academic information
- Time-consuming administrative work

Campus Connect solves these problems by providing a centralized web application that enables authorized users to efficiently manage academic information while improving communication between administrators, faculty members, and students.

---

# 4. Project Goals

The system should allow users to:

- Manage student records
- Manage faculty information
- Create and manage courses
- Publish announcements
- Upload and manage assignments
- Allow students to view course information
- Implement role-based access control
- Maintain academic records
- Improve communication between faculty and students

---

# 5. Target Users

The application supports three primary user roles.

| User Role | Responsibilities |
|-----------|------------------|
| **Administrator** | Manage users, departments, courses, announcements, and system settings |
| **Faculty** | Manage assigned courses, assignments, announcements, and student information |
| **Student** | View enrolled courses, assignments, announcements, and personal profile |

---

# 6. Core Modules

## Module 1 – User Management

Responsible for:

- User Registration
- User Login
- Role Management
- Password Management
- Profile Management

---

## Module 2 – Student Management

Responsible for:

- Add Student
- Update Student
- Delete Student
- Search Student
- View Student Details

---

## Module 3 – Faculty Management

Responsible for:

- Add Faculty
- Assign Faculty
- Faculty Profile
- Faculty Information

---

## Module 4 – Course Management

Responsible for:

- Create Course
- Update Course
- Delete Course
- Assign Faculty to Course
- Student Enrollment *(Optional Enhancement)*

---

## Module 5 – Assignment Management

Responsible for:

- Create Assignment
- Assignment Deadline
- View Assignment
- Assignment Submission *(Optional Enhancement)*

---

## Module 6 – Announcement Management

Responsible for:

- Publish Announcement
- Edit Announcement
- Delete Announcement
- View Announcements

---

# 7. Functional Requirements

## Authentication

- User Registration
- User Login
- Password Encryption
- JWT Authentication
- Role-Based Authorization

---

## Student Management

- Add Student
- Edit Student
- Delete Student
- View Student List
- Search Students

---

## Faculty Management

- Add Faculty
- Update Faculty
- Delete Faculty
- Search Faculty

---

## Course Management

- Add Course
- Edit Course
- Delete Course
- View Course List

---

## Assignment Management

- Create Assignment
- View Assignment
- Update Assignment
- Delete Assignment

---

## Announcement Management

- Create Announcement
- Edit Announcement
- Delete Announcement

---

# 8. Non-Functional Requirements

## Performance

- Fast page loading
- Efficient database queries
- Responsive API responses

---

## Security

- Password Hashing
- JWT Authentication
- Protected Routes
- Input Validation

---

## Usability

- Simple User Interface
- Responsive Design
- Easy Navigation

---

## Maintainability

- Modular Code
- Reusable React Components
- Organized Folder Structure

---

## Scalability

The application should allow future expansion by adding additional modules without requiring major redesign.

---

# 9. Suggested Database Collections

| Collection | Description |
|------------|-------------|
| Users | Stores login credentials and user roles |
| Students | Stores student information |
| Faculty | Stores faculty details |
| Courses | Stores course information |
| Assignments | Stores assignment records |
| Announcements | Stores university announcements |

---

# 10. Suggested Application Pages

## Public Pages

- Login
- Register
- Forgot Password *(Optional)*

---

## Administrator Pages

- Dashboard
- Students
- Faculty
- Courses
- Assignments
- Announcements
- Profile
- Settings

---

## Faculty Pages

- Dashboard
- My Courses
- Assignments
- Announcements
- Profile

---

## Student Pages

- Dashboard
- My Courses
- Assignments
- Announcements
- Profile

---

# 11. Suggested REST API Endpoints

## Authentication

```http
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile