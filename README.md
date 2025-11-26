# 💕TaskFlow — MERN Role-Based Task Management System

A full-stack task management application built using **Node.js, Express, MongoDB, and React** with **JWT-based authentication**, **role-based access control**, and **separate dashboards for users and admins**.

This project is submitted as part of the **Frontend Developer Intern Assignment (Primetrade.ai)**.
---
## 🚀 Features
### 🔐 Authentication
- Register & Login using JWT
- Secure cookie-based token storage
- Password hashing (bcrypt)
- User and Admin roles

### 👤 User Features
- Add tasks
- Edit tasks
- Delete tasks
- View all personal tasks
- Status control: pending / ongoing / completed
- Priority control: high / moderate / low

### 🛠 Admin Features
- View all users
- Delete any user
- Admin dashboard separate from user dashboard
---


### 💻 Frontend
- Built using React + TailwindCSS
- Fully responsive & minimal UI
- Purple–Slate theme
- Modal-based CRUD for both users & admins

## 🗂 Folder Structure (Backend)
```bash
/backend
|-- controllers
|-- models
|-- middleware
|-- routes
|-- config
|-- server.js
|-- README.md
```

## ⚙️ Setup Instructions

### 🔧 Backend
```bash
cd backend
npm install
```
Create a .env file:
```bash
PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_jwt_secret
```
Start server:
```bash
npm run dev
```
### 🎨 Frontend
```bash
cd frontend
npm install
```
Create a .env file:
```bash
VITE_BASE_URL=backend_api_url
```
Start Server:
```bash
npm run dev
```

## 🔥 API Endpoints

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/register` | Register user/admin |
| POST   | `/login`    | Login, returns JWT  |
|  GET   | `/validate-token`    |  returns user  |

## User Task Routes


| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| GET   | `/get-tasks` | Get all tasks|
| POST   | `/add-task` | Create task|
| POST   | `/update-task/:id` | Edit task |
| GET   | `/delete-task/:id` | Delete task |

## Admin Routes

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| GET   | `/users` | Get all users|
| DELETE   | `/deleteAnyUser/:id` | Delete user |


# 📚 POSTMAN API Documentation

##  AUTH ROUTES
### **1. Register**
```
POST /register
```
Body:
```json
{
  "username": "User",
  "email": "user@gmail.com",
  "password": "123456",
  "role": "user" || "admin"
}
```

---

### **2. Login**
```
POST /login
```
Body:
```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

### **3. Validate Token**
```
GET /validate-token
```
Headers:
```
Authorization: Bearer <token>
```

---

## ADMIN ROUTES
(Only Admin Allowed)

### Get All Users
```
GET /users
```

### Delete Any User
```
GET /deleteAnyUser/:id
```

---

## 👤 USER ROUTES
(Only Logged-in User Allowed)

### Get Own Tasks
```
GET /get-tasks
```

### Add Task
```
POST /add-task
```
Body:
```json
{
   title: "task_title",
   description: "task_description",
   priority: "moderate", //default
   status: "pending",  //default
   dueDate: "date",    //type-date
}
```

### Delete Task
```
GET /delete-task/:id
```

### Update Task
```
POST /update-task/:id
```

---

## 🗂 Postman Collection Structure

```
Task Manager API
 ├── Auth Routes
 │    ├── Register
 │    ├── Login
 │    └── Validate Token
 ├── Admin Routes
 │    ├── Get Users
 │    ├── Get All Tasks
 │    └── Delete Any User
 └── User Routes
      ├── Get Tasks
      ├── Add Task
      ├── Delete Task
      └── Update Task
```

---

## ❤️ Author
Pragya Rajput  

