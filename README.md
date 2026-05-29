# Flask React Demo

This repository contains a small demo application with a Flask backend and a React frontend.

## Project structure

- `backend/` - Flask API server and backend business logic
  - `app.py` - main Flask application entry point
  - `config.py` - application configuration values
  - `models/` - data models and in-memory database helpers
  - `routes/` - API route blueprints for users and auth
  - `requirements.txt` - Python dependencies for the backend
- `frontend/` - React frontend built with Vite
  - `index.html` - Vite HTML entry point for the app
  - `package.json` - frontend dependencies and npm scripts
  - `vite.config.js` - Vite configuration for React
  - `src/` - React application source code
    - `main.jsx` - React app bootstrap and render target
    - `App.jsx` - top-level application layout
    - `components/` - reusable UI components
    - `pages/` - page-level components
    - `services/` - API client helpers

## Backend

### Install dependencies

```bash
cd backend
python -m pip install -r requirements.txt
```

### Run backend

```bash
cd backend
python app.py
```

The backend will run on `http://127.0.0.1:5000`.

### API endpoints

- `GET /api/message` - Backend status message
- `GET /api/users` - List of demo users
- `GET /api/users/<id>` - User detail
- `POST /api/login` - Demo auth login
- `GET /api/profile` - Demo user profile

## Frontend

### Install dependencies

```bash
cd frontend
npm install
```

### Run frontend

```bash
cd frontend
npm run dev
```

The frontend will run on a Vite dev server, usually at `http://127.0.0.1:5174/`.

## Notes

- The frontend fetches data from the backend at `http://localhost:5000`.
- CORS is enabled in the Flask app for local development.
- If you change backend or frontend ports, update the URL in `frontend/src/services/api.js`.

## Future improvements

- Add authentication and protected routes in both backend and frontend.
- Create a real database connection and replace the in-memory user list with persistent storage.
- Add form pages for creating, editing, and deleting users.
- Build a dedicated frontend user profile page and connect it to `GET /api/users/<id>`.
- Add pagination, search, and filtering for the user directory.
- Implement React Router so navigation uses real URLs instead of client state.
- Add reusable UI components and better styling using CSS modules, Tailwind, or Chakra UI.
- Add unit tests for backend routes and frontend components.
- Add a production build workflow and deploy the backend and frontend together.
