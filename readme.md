# 🛡️ NodeAuth

A plug-and-play authentication system built with Node.js, Express, and MongoDB. Designed for developers who want secure, scalable, and minimal-boilerplate user authentication—without the headache.

"**Pre-built auth for Node.js apps** so you can **skip the login boilerplate** and **focus on building**."

## ✨ Features

- ✅ **User Registration & Login** – Secure, session-based auth with hashed passwords.

- 🔁 **Refresh Token Flow** – Keeps users logged in without compromising security.

- 🔒 **Protected Routes Middleware** – Easily secure your API endpoints.

- 🛠️ **Environment Config Support** – Clean .env-driven configuration.

- 🧱 **Modular Codebase** – Easy to extend or integrate with existing apps.

- 🧪 **Built-in Error Handling & Validation** – Robust and production-ready.

## 🧰 Tech Stack

- **Node.js** – Runtime environment

- **Express.js** – Backend framework

- **MongoDB** – Database (with Mongoose ODM)

- **JWT** – Access & Refresh token handling

- **Argon2** – Password hashing (🔐 Using argon2 for password hashing instead of bcrypt for stronger security and future readiness.)

- **Dotenv** – Environment variable management

- **Cookie-parser** – For reading/storing cookies

- **Nodemon** – Dev server auto-reload

- **ESLint / Prettier** – Code linting & formatting
- **Vitest** – Unit and integration testing
- **Supertest** – API testing

## 🚀 Getting Started

Follow these steps to get Node-Auth up and running on your local machine.

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or above)

- **MongoDB** (local or cloud via MongoDB Atlas)

- **npm or yarn** (your preference)

## 📦 Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/talhabilal-dev/Node-Auth.git
cd Node-Auth

# Install dependencies with npm
npm install

# Or with Yarn
yarn install
```

## ⚙️ Environment Variables

### Environment Variables

Create a `.env` file in the root directory and add the following:

| Variable               | Description               | Default                                                                                                                       |
| ---------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `PORT`                 | Server port               | `3000`                                                                                                                        |
| `MONGO_URI`            | MongoDB connection string | `mongodb+srv://<db_username>:<db_password>@cluster0.m8oca.mongodb.net/<db_name>?retryWrites=true&w=majority&appName=Cluster0` |
| `ACCESS_TOKEN_SECRET`  | Secret for access tokens  | `your_access_token_secret`                                                                                                    |
| `REFRESH_TOKEN_SECRET` | Secret for refresh tokens | `your_refresh_token_secret`                                                                                                   |
| `JWT_SECRET`           | Name of the cookie        | `your_jwt_secret`                                                                                                             |

✅ **Tip:** Keep your secrets safe. Don’t commit `.env` to version control.

---

### 🏃 Running the Project

Start the development server:

```bash
# With npm
npm run dev

# Or with Yarn
yarn dev
```

The server should now be running at: [http://localhost:3000]

```markdown
## 📂 Project Structure

Here's an overview of the project's structure: 


├── src/                     # Source code
│   ├── config/              # Database and app configuration
│   ├── controllers/         # Request handlers (auth logic, etc.)
│   ├── middlewares/         # Custom Express middlewares
│   ├── models/              # Mongoose models and schemas
│   ├── routes/              # Express route definitions
│   ├── tests/               # Vitest + Supertest test cases
│   └── utils/               # Helper functions (e.g., token utils, password hashing)
│   ├── app.js               # Express app setup
│   └── index.js             # Entry point
├── .env                     # Environment variables
├── .env.example             # Example env config
├── vitest.config.js         # Vitest testing config
├── nodemon.json             # Nodemon dev config
├── package.json             # Project metadata and scripts
├── LICENSE                  # MIT License
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier config
├── eslint.config.js         # ESLint config
└── README.md                # Project documentation

```

This structure ensures a clean and modular codebase, making it easy to navigate and extend.

> 🔍 **Modular**, **scalable** **architecture** built for real-world Node.js applications.
```

This structure ensures a clean and modular codebase, making it easy to navigate and extend.

> 🔍 **Modular**, **scalable** **architecture** built for real-world Node.js applications.

## 📡 API Endpoints

Here are the available API endpoints for NodeAuth:

| **Method** | **Endpoint**                   | **Description**                       |
| ---------- | ------------------------------ | ------------------------------------- |
| `POST`     | `/api/auth/register`           | Register a new user                   |
| `POST`     | `/api/auth/login`              | User login                            |
| `GET`      | `/api/auth/protected-resource` | Access a protected route (example)    |
| `POST`     | `/api/auth/refresh-token`      | Generate a new access token on expiry |
| `POST`     | `/api/auth/logout`             | User logout                           |

> 🛡️ **Note:** All protected routes require a valid access token stored in cookies.

## 🤝 Contributing

We welcome contributions, issues, and feature requests! Follow these steps to get started:

1. **Fork the Repository**  
   Create your own copy of the repository by forking it.

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit Your Changes**  
   Write a meaningful commit message:

   ```bash
   git commit -m "feat: add your feature"
   ```

4. **Push to Your Branch**

   ```bash
   git push origin feature/your-feature
   ```

5. **Open a Pull Request**  
   Submit your changes for review by opening a pull request.

---

👊 Let’s collaborate and build something awesome together!

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
For more details, refer to the LICENSE file included in the repository.

## 👤 Author

![Talha Bilal](https://avatars.githubusercontent.com/u/190106230?s=100&u=915edb100eb360280d668a95469516e173225d6d&v=4)

**Talha Bilal** – Full Stack Developer  
🔗 [talhabilal.dev](https://talhabilal.dev)

Special thanks to all contributors and open-source libraries that power this project.

## 💬 Feedback & Support

Found a bug? Got a feature request? Just want to say hi? We'd love to hear from you!

- 🐛 **[Open an Issue](https://github.com/talhabilal-dev/Node-Auth/issues)** – Report bugs or suggest new features.
- 💼 **[Connect on LinkedIn](www.linkedin.com/in/muhammad-talha-bilal-965992322)** – Let's network and collaborate.

Or, if all else fails, screaming into the void works too! 😅
