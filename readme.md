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
PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://localhost:27017/authDB
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

| Method | Endpoint           | Description                  |
| ------ | ------------------ | ---------------------------- |
| POST   | /api/auth/register | Register a new user          |
| POST   | /api/auth/login    | User login                   |
| GET    | /api/user/profile  | Get user profile (protected) |

## Contributing

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
