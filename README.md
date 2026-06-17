# Total Health Website

A modern React + Vite frontend with a Node.js Express backend for contact forms, newsletter subscriptions, and user authentication.

## Project Overview

- Frontend: `src/` using React 19, React Router DOM v7, Framer Motion, GSAP, and Three.js/React Three Fiber.
- Backend: `server/` with Express, MongoDB via Mongoose, authentication, contact form storage, and newsletter subscription API endpoints.
- CSS: component and page styles live under `src/styles/` and `src/pages/`.

## Features

- Multi-page marketing site with pages for Home, About, Services, Contact, Patients, Partners, Membership, Appointments, Podcasts, and more.
- Client-side routing with protected routes for `/dashboard` and guest-only routes for `/login` and `/register`.
- Contact form submission and newsletter signup APIs.
- User registration, login, and JWT token generation support in the backend.

## Repository Structure

- `src/`
  - `App.jsx` — main application routes and layout.
  - `main.jsx` — Vite entry point.
  - `components/` — reusable UI components.
  - `pages/` — page-level components for each route.
  - `styles/` — CSS modules for layout and section styling.
- `public/` — static assets and image files.
- `server/` — Express backend with API routes and database models.

## Getting Started

### 1. Install frontend dependencies

From the repository root:

```bash
npm install
```

### 2. Run the frontend

```bash
npm run dev
```

Open the local Vite URL shown in the terminal to view the frontend.

### 3. Run the backend

Change into the server folder and install backend dependencies:

```bash
cd server
npm install
npm run start
```

For automatic restarts during development:

```bash
npm run dev
```

The server listens on port `5000` by default.

## Backend API Endpoints

- `POST /api/contact` — save contact form submissions.
- `POST /api/newsletter` — save newsletter subscribers.
- `POST /api/register` — create a new user.
- `POST /api/login` — authenticate a user and return a JWT.

## Environment and Security Notes

- The current backend contains a MongoDB connection string in `server/server.js`.
- For production, move secrets and connection URIs into environment variables using a `.env` file.
- Replace `JWT_SECRET` in `server/server.js` with a secure value and avoid committing it to source control.

## Scripts

From repository root:

- `npm run dev` — start Vite frontend.
- `npm run build` — build production frontend.
- `npm run preview` — preview production build.
- `npm run lint` — run ESLint across the frontend.

From `server/`:

- `npm run start` — start Express server.
- `npm run dev` — start Express server with nodemon.

## Notes

- The frontend uses React Router to manage client navigation and conditional route access.
- The backend uses `express.json()` and CORS middleware to support JSON requests from the frontend.

## Contact

For questions or changes, update this README and the server configuration to match your deployment environment.
