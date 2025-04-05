# Node.js Authentication System

## Overview

An open-source authentication system for Node.js, designed for flexibility, security, and ease of use. Supports multiple databases and authentication methods.

## Features

- 🔐 Secure authentication using **Argon2** for password hashing
- 🔑 JWT-based authentication
- 🏗️ Modular architecture with Express/Fastify
- 🗄️ Support for MongoDB (Neon coming soon)
- 🛠️ Middleware for role-based access control
- ✅ Unit tests with Vitest

## Installation

### Clone the repository

```sh
git clone https://github.com/your-username/your-auth-project.git
cd your-auth-project
```

### Install dependencies

```sh
npm install
```

### Set up environment variables

Create a `.env` file in the root directory and configure:

```
PORT=3000
JWT_SECRET=your_jwt_secret
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@cluster0.m8oca.mongodb.net/<db_name>?retryWrites=true&w=majority&appName=Cluster0
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
```

## Running the Project

### Start the server

```sh
npm run dev
```

### Run tests

```sh
npm test
```

## API Endpoints

| Method | Endpoint                     | Description                           |
| ------ | ---------------------------- | ------------------------------------- |
| POST   | /api/auth/register           | Register a new user                   |
| POST   | /api/auth/login              | User login                            |
| GET    | /api/auth/protected-resource | Protected Route (example)             |
| POST   | /api/auth/refresh-token      | Generate a new access token on expiry |
| POST   | /api/auth/logout             | User Logout                           |

## Contributing

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
