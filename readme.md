# 🍽️ Mess Management System

<div align="center">

![GitHub Repository](https://img.shields.io/badge/Repository-GitHub-181717?style=flat-square&logo=github)
![Status](https://img.shields.io/badge/Status-Live-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![MERN](https://img.shields.io/badge/Stack-MERN-61DAFB?style=flat-square)

**A comprehensive hostel mess management platform built with modern web technologies**

[🌐 Live Demo](mess-management-system-bice.vercel.app) • [📖 Documentation](#-documentation) • [🛠️ Setup Guide](#-installation--setup)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Quick Links](#-quick-links)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Usage Guide](#-usage-guide)


---

## 🎯 Overview

The **Mess Management System** is a full-stack web application designed to streamline hostel mess operations. It enables students to manage meal registrations, provide feedback, and submit complaints, while administrators can efficiently manage menus, process complaints, and oversee mess operations.

Built with the MERN stack (MongoDB, Express, React, Node.js) and deployed on Vercel with Supabase authentication and PostgreSQL database, this system provides a robust, scalable solution for modern hostel management.

---

## ✨ Key Features

### 👤 Student Features
- **User Registration & Authentication** - Secure signup with email verification via Supabase Auth
- **Meal Management** - View upcoming menus, register/deregister for meals
- **Feedback Submission** - Provide constructive feedback on meals and mess services
- **Complaint Resolution** - Submit detailed complaints with real-time status tracking
- **Profile Management** - Update personal information and preferences
- **Payment Tracking** - View mess bills and payment history

### 👨‍💼 Admin Features
- **Menu Management** - Create, update, and publish weekly meal plans
- **Complaint Management** - View, prioritize, and resolve student complaints
- **Feedback Analytics** - Analyze student feedback to improve services
- **User Management** - Monitor student registrations and mess participation
- **Dashboard Analytics** - Real-time insights on mess operations and metrics
- **Billing & Payments** - Track student dues and payment status

### 🔐 Security & Authentication
- **Supabase Auth Integration** - Enterprise-grade authentication
- **Role-Based Access Control** - Separate admin and student interfaces
- **Secure API Endpoints** - JWT token-based authorization
- **Input Validation** - Server-side and client-side data validation

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive interfaces
- **React Router** - Client-side routing and navigation
- **Axios** - HTTP client for API requests
- **Tailwind CSS** / **CSS Modules** - Styling and responsive design
- **React Context / Redux** - State management (if applicable)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for API development
- **PostgreSQL** - Relational database (via Supabase)
- **Supabase** - Authentication and database services

### Deployment & DevOps
- **Vercel** - Frontend hosting and deployment
- **Supabase Cloud** - Backend database and authentication
- **Git** - Version control

### Tools & Libraries
- **npm/yarn** - Package management
- **dotenv** - Environment variable management
- **Postman** - API testing

---

## 🌐 Quick Links

### Live Application
| Component | URL |
|-----------|-----|
| 🌍 Main App | https://mess-management-system-bice.vercel.app/ |
| 👨‍💼 Admin Login | https://mess-management-system-bice.vercel.app/admin/login |
| 👤 Student Register | https://mess-management-system-bice.vercel.app/register |

### Demo Credentials
For testing purposes (if applicable):
- **Admin Email**: admin@mess.local
- **Admin Password**: *[Contact for demo credentials]*
- **Student Account**: Create via registration page

### Repository
- **GitHub**: https://github.com/monikaasidhu/MessManagementSystem

---

## 🚀 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**
- A **Supabase account** (free tier available)
- A **Vercel account** (for deployment)

### Clone the Repository

```bash
git clone https://github.com/monikaasidhu/MessManagementSystem.git
cd MessManagementSystem
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Configure environment variables
# Edit .env and add:
# - SUPABASE_URL
# - SUPABASE_KEY
# - JWT_SECRET
# - DATABASE_URL
# - NODE_ENV=development

# Run the backend server
npm start
# Server runs on http://localhost:5000
```

### Frontend Setup

```bash
# Navigate to frontend directory (in root or separate folder)
cd frontend
# or
cd ../frontend

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Configure environment variables
# Edit .env and add:
# - REACT_APP_API_URL=http://localhost:5000
# - REACT_APP_SUPABASE_URL
# - REACT_APP_SUPABASE_KEY

# Start the development server
npm start
# App runs on http://localhost:3000
```

### Database Setup (Supabase)

1. Create a Supabase project at [supabase.io](https://supabase.io)
2. Create the required tables:
   - `users` - Student and admin profiles
   - `menus` - Weekly meal plans
   - `complaints` - Student complaints
   - `feedback` - Meal feedback submissions
   - `transactions` - Payment tracking

3. Run migrations or execute SQL scripts from `backend/migrations/`

---

## 📁 Project Structure

```
MessManagementSystem/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Student/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── MenuView.jsx
│   │   │   │   ├── Complaints.jsx
│   │   │   │   └── Feedback.jsx
│   │   │   ├── Admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── MenuManagement.jsx
│   │   │   │   ├── ComplaintHandler.jsx
│   │   │   │   └── FeedbackAnalytics.jsx
│   │   │   ├── Common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   ├── context/ or redux/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/
│   └── package.json
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── menuController.js
│   │   ├── complaintController.js
│   │   └── feedbackController.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── menu.js
│   │   ├── complaint.js
│   │   └── feedback.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Menu.js
│   │   ├── Complaint.js
│   │   └── Feedback.js
│   ├── config/
│   │   └── database.js
│   ├── migrations/
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── ARCHITECTURE.md
├── .gitignore
├── README.md
└── LICENSE
```

---

## 📡 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://[backend-url]/api
```

### Authentication Endpoints

**POST** `/auth/register`
- Register a new student account
- Body: `{ email, password, name, rollNo }`

**POST** `/auth/login`
- Student/Admin login
- Body: `{ email, password }`
- Returns: JWT token

**POST** `/auth/logout`
- Logout user and invalidate session

### Menu Endpoints

**GET** `/menu`
- Fetch current week's menu

**GET** `/menu/:id`
- Fetch menu details by ID

**POST** `/menu` *(Admin only)*
- Create new menu
- Body: `{ weekStart, weekEnd, items: [...] }`

**PUT** `/menu/:id` *(Admin only)*
- Update menu

**DELETE** `/menu/:id` *(Admin only)*
- Delete menu

### Complaint Endpoints

**POST** `/complaints`
- Submit new complaint
- Body: `{ title, description, category }`

**GET** `/complaints`
- Fetch user's complaints

**GET** `/complaints/:id`
- Get complaint details

**PUT** `/complaints/:id` *(Admin only)*
- Update complaint status
- Body: `{ status, resolution }`

### Feedback Endpoints

**POST** `/feedback`
- Submit meal feedback
- Body: `{ menuId, rating, comment }`

**GET** `/feedback`
- Fetch feedback (admin view)

For detailed API documentation, see [API.md](./docs/API.md)

---

## 💻 Usage Guide

### For Students

1. **Register** - Navigate to [/register](https://mess-management-system-bice.vercel.app/register) and create an account
2. **Login** - Use your credentials to log in
3. **View Menu** - Check the weekly meal plan on the dashboard
4. **Register for Meals** - Select meals you want to opt for
5. **Submit Feedback** - Rate meals and provide suggestions
6. **Report Issues** - File complaints and track their resolution

### For Administrators

1. **Login** - Go to [/admin/login](https://mess-management-system-bice.vercel.app/admin/login)
2. **Manage Menu** - Create and update weekly meal plans
3. **Handle Complaints** - Review and resolve student complaints
4. **View Analytics** - Monitor feedback and operational metrics
5. **Manage Users** - Oversee student registrations and access


---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---



---



<div align="center">

**[⬆ Back to Top](#-mess-management-system)**


</div>
