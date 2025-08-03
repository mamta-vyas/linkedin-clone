# 🔗 LinkedIn Clone - Full Stack Web Application

A full-stack LinkedIn clone built with **MERN stack** (MongoDB, Express.js, React.js, Node.js). This clone supports user authentication, post creation, profile editing, and real-time job feeds — mimicking the core functionality of LinkedIn.

## 🌐 Live Demo

- 🚀 Frontend (Netlify): [https://linkediclone-webapp.netlify.app](https://linkediclone-webapp.netlify.app)
- 🌐 Backend API (Render): [https://linkedin-clone-owvf.onrender.com](https://linkedin-clone-owvf.onrender.com)
- 📦 GitHub Repo: [https://github.com/mamta-vyas/linkedin-clone](https://github.com/mamta-vyas/linkedin-clone)

---

## 🛠️ Tech Stack Used

### 🧠 Frontend:
- React.js
- Axios
- Tailwind CSS
- React Router DOM
- React Icons

### 🖥 Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs (Password hashing)
- jsonwebtoken (JWT Auth)
- CORS & Cookie-Parser
- dotenv

---

## 🔐 Demo User Login

To test the app without registration:

```bash
Email: demo@gmail.com
Password: demo123
🧰 Features
🔐 Authentication (JWT with HttpOnly cookie)

📬 Create & view posts (like LinkedIn feeds)

📱 Fully responsive for all devices

⚙️ Protected routes

🔄 Real-time post updates

☁️ Persistent login using cookies

📥 Setup Instructions
1. Clone the repo

git clone https://github.com/mamta-vyas/linkedin-clone
cd linkedin-clone
2. Install dependencies for both frontend & backend

# Frontend setup
cd frontend
npm install

# Backend setup
cd ../backend
npm install
3. Create .env in backend folder

PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
4. Run locally


# Start backend
cd backend
npm run dev

# In a separate terminal, start frontend
cd frontend
npm run dev
📎 Folder Structure

linkedin-clone/
│
├── backend/           # Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/          # React App
│   ├── components/
│   ├── pages/
│   └── App.jsx
🚀 Extra Features (Optional)
Fully responsive across mobile, tablet, and desktop

Protected routes with cookie-based login

CORS and credentials handled for cross-origin requests

👩‍💻 Developed By
Mamta Vyas
GitHub Profile- https://github.com/mamta-vyas

📧 Submission Info
📂 GitHub Repo: https://github.com/mamta-vyas/linkedin-clone

🌐 Live Demo: https://linkediclone-webapp.netlify.app

🛠 Backend API: https://linkedin-clone-owvf.onrender.com
