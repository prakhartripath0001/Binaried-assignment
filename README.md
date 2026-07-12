# Task Manager

Welcome to my Task Manager project! I built this full-stack web application to get some hands-on experience with Angular on the frontend and Node.js on the backend. It's a clean, responsive app that lets users register, log in, and manage their personal tasks.

## Tech Stack

Here is the tech stack I decided to use for this project:

**Frontend:**
- Angular
- Angular Material (for styling and UI components)
- Reactive Forms
- HttpClient
- Angular Router & Guards (for protecting the dashboard)

**Backend:**
- Node.js & Express
- JSON Web Tokens (JWT) & bcrypt (for secure authentication)
- MongoDB Atlas & Mongoose

## Project Structure

I tried to keep the architecture as standard and clean as possible:

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
*(Database design documentation is located in `backend/db/mongodb-schema.md`)*

## Running the App Locally

To spin this up on your own machine, you'll need Node.js installed.

**1. Setup the Backend**
```bash
cd backend
npm install
cp .env.example .env
```
Make sure to open `backend/.env` and paste in your own MongoDB Atlas connection string and a secret string for JWT.

Then, start the backend server:
```bash
npm run dev
```
*(Runs on `http://localhost:5000`)*

**2. Setup the Frontend**
In a separate terminal window:
```bash
cd frontend
npm install
npm start
```
*(Runs on `http://localhost:4200`)*

## API Endpoints

- `POST /api/register`
- `POST /api/login`
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Development Experience & AI Usage

Building this was a great learning experience. I wrote the core application logic, API architecture, database schemas, and authentication flow myself to ensure I thoroughly understood how all the pieces fit together.

I did use AI tools (like ChatGPT) occasionally to speed up my workflow, but I limited its use strictly to debugging weird errors, generating basic boilerplate code, and helping with minor, simple tasks (like suggesting CSS for responsive layouts). The actual heavy lifting—deciding how the pages flow, integrating the UI with the APIs, and securing the routes—was all my own work.

## Challenges I Ran Into

- **JWT Auth with Angular:** Aligning Angular route guards with the protected backend APIs took some trial and error.
- **Data Security:** Making sure users could only ever access and modify their *own* tasks required careful backend checks.
- **Responsive UI:** Getting the dashboard layout and cards to look clean on both desktop and mobile screens.

## What's Next?

A few things I plan to add when I have some free time:
- Better form validation and user-friendly API error messages.
- Task filtering (by priority and status) and due dates.
- Loading states and spinners.
- Unit and integration tests.
- Deploying the frontend and backend to production.
