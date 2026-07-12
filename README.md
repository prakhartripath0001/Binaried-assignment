# Task Manager

Task manager application scaffolded with Angular, Angular Material, Reactive Forms, HttpClient, Node.js, Express, JWT, bcrypt, Mongoose, and MongoDB Atlas.

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

Database design documentation is in `backend/db/schema.md`.

## Setup

Install Node.js first. Then install dependencies separately for each app:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Update `backend/.env` with your MongoDB Atlas connection string and JWT secret.

In another terminal:

```bash
cd frontend
npm install
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
