# Task Manager

## Project Overview

Task Manager is a full-stack web application for user authentication and personal task CRUD operations. Users can register, log in, create tasks, view tasks on a responsive dashboard, edit task details, and delete tasks.

## Tech Stack

Frontend:

- Angular
- Angular Material
- Reactive Forms
- HttpClient
- Angular Router guards

Backend:

- Node.js
- Express
- JWT
- bcrypt
- Mongoose

Database:

- MongoDB Atlas

## Structure

```text
frontend/
  src/
    components/
    pages/
    services/
    guards/

backend/
  routes/
  controllers/
  models/
  middleware/
  config/
  db/
```

Database design documentation is in `backend/db/mongodb-schema.md`.

## Installation

Install Node.js first. Then install dependencies separately for each app:

```bash
cd backend
npm install
cp .env.example .env
```

Update `backend/.env` with your MongoDB Atlas connection string and JWT secret.

```bash
cd frontend
npm install
```

## How to Run

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm start
```

Frontend: `http://localhost:4200`

Backend: `http://localhost:5000`

## API

- `POST /api/register`
- `POST /api/login`
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Angular Pages

- Login
- Register
- Dashboard
- Create Task
- Edit Task

## AI Tools Used

- ChatGPT: project structure, API design, JWT authentication guidance, Angular form/page scaffolding, responsive UI suggestions, and README drafting.

## Where AI Helped

- Boilerplate generation for Angular and Express.
- JWT authentication structure.
- Mongoose schema suggestions.
- CRUD API routing.
- Angular routing, guard, and service setup.
- Responsive dashboard card layout.

## What I Implemented Myself

- Authentication flow review and integration.
- CRUD API understanding and customization.
- Angular page flow decisions.
- UI integration requirements.
- Database schema decisions.

## Challenges

- Aligning Angular routes with protected JWT-based backend APIs.
- Keeping task ownership secure so users only access their own tasks.
- Designing the database schema for MongoDB instead of SQL.
- Making the dashboard layout work cleanly on desktop and mobile.

## Future Improvements

- Add form validation messages and API error display.
- Add task filters by priority and status.
- Add due dates.
- Add loading states.
- Add unit and integration tests.
- Deploy frontend and backend.
