import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import app from "../app.js"; // Assuming you export your app from server.js
import connectDB from "../config/db.config.js"; // Import your database connection function

let server;
let accessToken;
let refreshToken;

beforeAll(() => {
  connectDB()
    .then(() => {
      server = app.listen(5000, () => {
        console.log("Test server running on port 5000");
      });

      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
});

afterAll(() => {
  server.close(); // Close the server after all tests
});

describe("Auth Routes", () => {
  //   Test user registration
  //   it("should register a new user", async () => {
  //     const response = await request(app).post("/api/auth/register").send({
  //       name: "Test User",
  //       username: "testuser",
  //       email: "testuser@example.com",
  //       password: "password123",
  //     });

  //     expect(response.status).toBe(200);
  //     expect(response.body.message).toBe("User registered successfully");
  //   });

  // Test user login
  it("should login and return access and refresh tokens", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "testuser@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("accessToken");
    accessToken = response.body.data.accessToken;
  });

  // Test protected route with valid access token
  it("should access protected route with valid access token", async () => {
    const response = await request(app)
      .get("/api/auth/protected-resource")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("API response successful");
  });

  // Test protected route with invalid access token
  //   it("should return 401 when accessing protected route with invalid token", async () => {
  //     const response = await request(app)
  //       .get("/api/protected-resource")
  //       .set("Authorization", "Bearer invalid_token");

  //     expect(response.status).toBe(401);
  //     expect(response.body.message).toBe("Unauthorized");
  //   });

  // Test refresh token route
  //   it("should refresh the access token using the refresh token", async () => {
  //     const response = await request(app)
  //       .post("/api/auth/refresh-token")
  //       .set("Cookie", `refreshToken=${refreshToken}`);

  //     expect(response.status).toBe(200);
  //     expect(response.body).toHaveProperty("accessToken");
  //     accessToken = response.body.accessToken;
  //   });

  // Test logout
  //   it("should logout and invalidate refresh token", async () => {
  //     const response = await request(app)
  //       .post("/api/auth/logout")
  //       .set("Cookie", `refreshToken=${refreshToken}`);

  //     expect(response.status).toBe(200);
  //     expect(response.body.message).toBe("Logged out successfully");
  //   });
});
