# 🧠 Focus Timer App with Analytics

A productivity-focused web application designed to help users manage focused work sessions using a Pomodoro-style timer and track their progress with insightful analytics.

---

## 📌 Overview

The Focus Timer App enables users to:
- Start, pause, and reset Pomodoro-style timers
- Log completed focus sessions
- Visualize productivity over time through charts and summaries
- Stay motivated with daily streaks and reports

This project is currently in its **initial setup phase**, with folder structure, backend schema, and frontend planning in progress.

---

## 🛠️ Stack & Architecture

The app follows a modern full-stack architecture, with separate folders for frontend and backend:

focus-timer-app/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── types/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   └── routes/
│   │       └── session_routes.py
│   ├── .env
│   ├── requirements.txt
│   └── alembic/              # optional: migrations folder
│
├── docker-compose.yml        # optional: for local dev
├── README.md
└── .gitignore


### Frontend
- **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Axios** for API requests
- **Chart.js** or **Recharts** for visualizations

### Backend
- **FastAPI** (Python) for REST API
- **PostgreSQL** hosted via AWS RDS or Azure SQL
- **SQLAlchemy** for ORM
- **Pydantic** for schema validation

### Deployment Targets (Planned)
- Frontend → **Vercel**
- Backend → **AWS Lambda** (via [Mangum](https://github.com/jordaneremieff/mangum)) or **Azure App Service**
- Database → **AWS RDS** or **Azure SQL**

---

## 🔧 Planned Features

- ⏱️ Customizable Pomodoro Timer (focus, break, long break)
- ✅ Session logging with start/end timestamps
- 📊 Analytics dashboard (total time, session history, daily/weekly view)
- 📅 Daily streak tracking
- 🔔 Sound alerts and optional settings customization
- 📤 Export session data (CSV)
- 🔐 (Optional) User accounts and authentication

---

## 🚧 Project Status

- [x] Project planning and folder structure defined
- [ ] Backend setup with FastAPI and database schema
- [ ] React frontend bootstrapping with timer UI
- [ ] REST API integration between frontend and backend
- [ ] Analytics page with visual insights

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✨ Author

Created by [Your Name Here] – built with a focus on productivity, performance, and clean design.
