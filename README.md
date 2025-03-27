

<div align="center">
  
![favicon](https://github.com/user-attachments/assets/ba86af86-a98e-4842-9cc4-5871c5ef234b)

</div>

# Edemy LMS 🎓 - A Modern Learning Management System


Edemy LMS is a full-stack learning management system (LMS) that provides educators and students with a seamless e-learning experience. Built using modern web technologies, it includes user authentication, course management, video streaming, and progress tracking.

## 🚀 Tech Stack

### Frontend:
- *React* (via Vite) ⚡
- *React Router DOM* for navigation
- *React Toastify* for notifications
- *Framer Motion* for animations
- *Quill* for rich text editing
- *Axios* for API requests
- *RC Progress* for progress tracking
- *React YouTube* for video embedding
- *Clerk Authentication* for user management

### Backend:
- *Node.js* & *Express.js* 🚀
- *MongoDB* & *Mongoose* for database
- *Cloudinary* for media storage
- *Multer* for file uploads
- *Stripe* for payment processing
- *Cors* for cross-origin requests
- *Dotenv* for environment variables
- *Nodemon* for development

---

## 📂 Project Structure

### **Frontend (client/)**

📦 client
 ├── 📂 src
 │   ├── 📂 assets
 │   ├── 📂 components
 │   │   ├── 📂 educator
 │   │   │   ├── Footer.jsx
 │   │   │   ├── Navbar.jsx
 │   │   │   ├── Sidebar.jsx
 │   │   ├── 📂 student
 │   │   │   ├── Logger.jsx
 │   ├── 📂 context
 │   │   ├── AppContext.jsx
 │   ├── 📂 pages
 │   │   ├── 📂 educator
 │   │   │   ├── AddCourse.jsx
 │   │   │   ├── Dashboard.jsx
 │   │   │   ├── Educator.jsx
 │   │   │   ├── MyCourses.jsx
 │   │   │   ├── StudentsEnrolled.jsx
 │   │   ├── 📂 student
 │   │   │   ├── CourseDetails.jsx
 │   │   │   ├── CoursesList.jsx
 │   │   │   ├── Home.jsx
 │   │   │   ├── MyEnrollments.jsx
 │   │   │   ├── Player.jsx
 │   │   ├── App.jsx
 │   │   ├── index.css
 │   │   ├── main.jsx
 ├── 📜 .env
 ├── 📜 .gitignore
 ├── 📜 package.json
 ├── 📜 tailwind.config.js
 ├── 📜 vite.config.js



### **Backend (server/)**

📦 server
 ├── 📂 configs |
     ├── cloudinary.js |
     ├── mongodb.js |
     ├── multer.js |
 ├── 📂 controllers |
     ├── courseController.js |
     ├── educatorController.js |
     ├── userController.js |
     ├── webhooks.js |
 ├── 📂 middlewares |
     ├── authMiddleware.js
 ├── 📂 models |
     ├── Course.js |
     ├── CourseProgress.js |
     ├── Purchase.js |
     ├── User.js |
 ├── 📂 routes
     ├── courseRoute.js |
     ├── educatorRoutes.js |
     ├── userRoutes.js |
 ├── 📜 .env
 ├── 📜 .gitignore
 ├── 📜 package.json
 ├── 📜 server.js
 ├── 📜 vercel.json


---

## 🌟 Features

✅ *User Authentication* (Signup, Login, Clerk Integration)  
✅ *Course Management* (Add, Edit, Delete, Enroll)  
✅ *Video Streaming* (Embedded YouTube player)  
✅ *Progress Tracking* (Course Completion)  
✅ *Educator Dashboard* (Monitor students)  
✅ *Secure Payments* (Stripe integration)  
✅ *Responsive Design* (Mobile-friendly UI)  

---

## 📸 Screenshots

| Page | Screenshot |
|------|-----------|
| *Home Page* | ![Home](https://github.com/user-attachments/assets/f676cf2a-a75c-43dc-8e8e-cf710afa4f5f) |
| *Course Page* | ![Course](https://github.com/user-attachments/assets/c771c4f0-2614-4be8-8106-14f3cfc32856) |
| *My Enrollments* | ![Enrollments](https://github.com/user-attachments/assets/cf884299-ed49-4453-bf46-b443ecc6f913) |
| *Player Page* | ![player](https://github.com/user-attachments/assets/06574610-7459-43fc-8fa3-193b0ce5f1d4)|
| *Educator Dashboard* | ![dashboaard](https://github.com/user-attachments/assets/da37d9c1-8f14-4a54-aa9d-1c4bb0ee4b95)|
| *Add Course* | ![addCourses](https://github.com/user-attachments/assets/7659cae9-c55b-4449-a18a-f4801a36f9f0)|
| *My Courses* | ![myCourses](https://github.com/user-attachments/assets/46ebabcc-0344-46d9-81c3-ba3a87a22a70)
 |

![image](https://github.com/user-attachments/assets/9fb30367-1fe1-48e4-b128-2b2c104fb8d9)








## ⚡ Installation & Setup

### ⿡ Clone the Repository
bash
git clone https://github.com/DhruvaPratapSingh/LMS-system.git
cd LMS-system
### ⿢ Install Dependencies

#### Frontend:
bash
cd client
npm install
npm run dev


#### Backend:
bash
cd server
npm install
npm start


### ⿣ Setup Environment Variables
Create a .env file in both client/ and server/ directories and add required credentials (MongoDB, Cloudinary, Clerk, Stripe, etc.).

---

## 🔥 Deployment

This project is set up for deployment on *Vercel*.

### Deploy Backend
bash
cd server
vercel --prod


### Deploy Frontend
bash
cd client
vercel --prod


---

## 🔐 License
This project is licensed under the [MIT License](LICENSE).

---
