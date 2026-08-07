# 🚀 Team Task Manager

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing team projects and tasks with JWT authentication, role-based access, dashboard analytics, and project/task management.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout

### 📁 Project Management
- Create Projects
- View Projects
- Edit Projects
- Delete Projects

### ✅ Task Management
- Create Tasks
- Assign Tasks to Projects
- Set Task Priority (High, Medium, Low)
- Update Tasks
- Delete Tasks
- Track Task Status

### 📊 Dashboard
- Total Projects
- Total Tasks
- Pending Tasks
- Recent Projects
- Recent Tasks
- Task Status Pie Chart

### 👥 Role-Based Access
- Admin
- Member

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Recharts
- React Hot Toast
- Tailwind CSS

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

## Database
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```
TeamTaskManager
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/prathamesh9112004/TeamTaskManager.git
```

```
cd TeamTaskManager
```

---

## Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start backend:

```bash
npm start
```

or

```bash
node server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

## Projects

| Method | Endpoint |
|---------|----------|
| GET | /api/projects |
| POST | /api/projects |
| PUT | /api/projects/:id |
| DELETE | /api/projects/:id |

## Tasks

| Method | Endpoint |
|---------|----------|
| GET | /api/tasks |
| POST | /api/tasks |
| PUT | /api/tasks/:id |
| DELETE | /api/tasks/:id |

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard |

---

# 📸 Screenshots

## Login Page

(Add Screenshot)

## Dashboard

(Add Screenshot)

## Projects

(Add Screenshot)

## Tasks

(Add Screenshot)

---

# 🔒 Authentication

- JWT Token Authentication
- Protected API Routes
- Protected React Routes
- Secure Password Hashing using bcrypt

---

# 🚀 Future Enhancements

- Email Notifications
- File Attachments
- Team Chat
- Calendar Integration
- Due Date Reminders
- Search & Filters
- Drag & Drop Kanban Board

---

# 👨‍💻 Author

**Prathamesh**

GitHub:
https://github.com/prathamesh9112004

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.
