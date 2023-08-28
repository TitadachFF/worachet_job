# CRUD Restaurant App

Welcome to the CRUD Restaurant application! This project allows you to perform CRUD (Create, Read, Update, Delete) operations on restaurant data. The application consists of a backend built using Node.js, Express.js, MySQL database with Sequelize ORM, and follows RESTful API principles. The frontend is a simple HTML page with JavaScript for sending requests to the backend API endpoints.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setting Up](#setting-up)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Introduction

The CRUD Restaurant application is a simple web-based application that allows users to perform CRUD (Create, Read, Update, Delete) operations on restaurant data. The application consists of a backend built using Node.js, Express.js, MySQL database with Sequelize ORM, and follows RESTful API principles. The frontend consists of a single `index.html` file and JavaScript code for sending requests to the backend API endpoints.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MySQL database
  - Sequelize ORM
  - CORS middleware

- **Frontend:**
  - HTML
  - JavaScript (AJAX for API requests)

## Project Structure

The project follows the Model-View-Controller (MVC) architectural pattern:

- `backend/`: Contains the backend server code.
  - `controllers/`: Contains the route handling logic.
  - `models/`: Defines Sequelize models for the database.
  - `routes/`: Defines API routes using Express.js.
  - `config.js`: Configuration file for the database and server settings.
  - `server.js`: Entry point for the backend server.

- `frontend/`: Contains the frontend code.
  - `index.html`: HTML file for the user interface.
  - `script.js`: JavaScript code for handling API requests and updating the UI.

## Setting Up

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/TitadachFF/worachet_job.git
```
2. Navigate to the `backend/` directory:
```bash
cd backend
```
3. Install backend dependencies:
```bash
npm install
```
4. Configure the database connection by editing `config.js`.
5. Run the backend server:
```bash
npm run dev
```

The backend server will be running at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend/` directory:
```bash
cd frontend
```

2. Open `index.html` in a web browser to interact with the CRUD Restaurant application.

## Usage

- The frontend provides a user interface with forms for creating, updating, and deleting restaurants.
- The JavaScript code in `script.js` handles API requests and updates the UI accordingly.

## API Endpoints

- `GET /api/restaurants`: Get a list of all restaurants.
- `GET /api/restaurants/:id`: Get details of a specific restaurant by ID.
- `POST /api/restaurants`: Create a new restaurant.
- `PUT /api/restaurants/:id`: Update restaurant details by ID.
- `DELETE /api/restaurants/:id`: Delete a restaurant by ID.


