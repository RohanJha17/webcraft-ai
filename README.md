# webCraft-AI

An AI-powered SaaS application that enables users to generate fully functional, responsive, and production-ready single-page websites (SPAs) using natural language prompts. Built on a modern full-stack JavaScript architecture.

---

## 🚀 Key Features

* **AI-Powered Generation**: Instantly compiles complex layout instructions into unified, responsive HTML/CSS/JS templates using LLMs (via OpenRouter API).
* **Live Sandbox Previews**: Converts the code strings dynamically into Blob URLs and loads them into a sandboxed `<iframe>` to avoid page reloads or local filesystem operations.
* **Iterative Chat Updates**: An interactive chatbot panel lets users request revisions contextually (e.g. *"add a pricing calculator"* or *"make the banner background purple"*).
* **Monaco Code Editor**: Advanced developers can toggle the code editor to modify the generated codebase directly, triggering instant HMR (Hot Module Replacement) in the preview.
* **One-Click Deployment**: Publishes generated pages to unique SEO-friendly public URL slugs.
* **Firebase & JWT Security**: Leverages Google OAuth via Firebase client-side SDK combined with secure `HttpOnly` JWT cookie-based session management on the backend.
* **Razorpay Monetization**: A token credit system (10 credits for generation, 5 credits for updates) supported by cryptographically verified payment signatures.

---

## 🛠️ Technology Stack

### Frontend Tier
* **React 19 & Redux Toolkit**: Reactive state-driven client application.
* **Vite**: High-speed build tooling and modular HMR dev server.
* **Tailwind CSS v4 & Motion**: Next-generation utility-first styling and micro-interactions.
* **Monaco Editor (@monaco-editor/react)**: Fully integrated in-browser IDE experience.

### Backend Tier
* **Node.js & Express.js**: Modular REST API endpoint routing.
* **MongoDB & Mongoose**: Structured document persistence for users, website assets, and credit transactions.
* **Cookie-Parser & JWT**: Cryptographically secured user sessions.

### Third-Party APIs
* **OpenRouter**: Unified access to advanced LLMs.
* **Firebase Auth**: User OAuth authentication gateway.
* **Razorpay SDK**: Secure transaction checkouts and webhooks.

---

## 📂 Project Structure

```text
webCraft-AI/
├── backend/
│   ├── config/          # Database, Razorpay, OpenRouter initializers
│   ├── controllers/     # Authentication, payment, and website generators
│   ├── database/        # Mongoose db connection setup
│   ├── middlewares/     # JWT authentication cookies check
│   ├── models/          # User and Website mongoose schemas
│   ├── routes/          # Express route definitions
│   ├── utils/           # JSON parsing and string utilities
│   ├── index.js         # Backend server gateway
│   └── .env             # Backend secrets
└── frontend/
    ├── public/          # Public media assets
    ├── src/
    │   ├── components/  # Navbars, modal dialogues, layouts
    │   ├── pages/       # Dashboards, Editors, Pricing, Landing Home
    │   ├── redux/       # Redux slice stores and setup
    │   ├── firebase.js  # Safe authentication configuration wrapper
    │   ├── main.jsx     # App entry point
    │   └── App.jsx      # Routes setup
    ├── index.html       # Single page wrapper
    ├── vite.config.js   # Vite configuration
    └── .env             # Frontend environment variables
```

---

## ⚙️ Quick Start & Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+) and [MongoDB](https://www.mongodb.com/) running locally.

### 2. Configure Environment Files

#### Backend Environment Setup
Create a `.env` file inside the `backend` directory and add the following keys:
```env
PORT = 8000
MONGO_URI = "mongodb://127.0.0.1:27017/webcraft-ai"
SECRET_KEY = "your_jwt_secret_key"
OPENROUTER_API_KEY = "your_openrouter_api_token"
FRONTEND_URL = http://localhost:5173
RAZORPAY_KEY_ID = "your_razorpay_key_id"
RAZORPAY_SECRET = "your_razorpay_secret"
```

#### Frontend Environment Setup
Create a `.env` file inside the `frontend` directory and add the following keys:
```env
VITE_SERVER_URL = http://localhost:8000
VITE_FIREBASE_API_KEY = "your_firebase_api_key"
VITE_RAZORPAY_KEY_ID = "your_razorpay_key_id"
```

### 3. Install Dependencies & Start Dev Servers

Open two terminal sessions:

#### Session A (Backend)
```bash
cd backend
npm install
npm run dev
```

#### Session B (Frontend)
```bash
cd frontend
npm install
npm run dev
```

The React dashboard is now accessible at **[http://localhost:5173](http://localhost:5173)**, interacting with the backend API listening on **[http://localhost:8000](http://localhost:8000)**.
