import User from "../models/user.model.js";
import { hashPassword, verifyPassword } from "../utils/hashPassword.util.js";
import { successResponse, errorResponse } from "../utils/ApiResponse.util.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/token.util.js";

export const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return errorResponse(
      res,
      new Error("Missing required fields"),
      "Please provide all required fields",
      400
    );
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(
        res,
        new Error("User already exists"),
        "Email is already registered",
        409
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({ name, username, email, password: hashedPassword });
    await user.save();

    return successResponse(
      res,
      { id: user._id, username, email },
      "User registered successfully",
      201
    );
  } catch (err) {
    return errorResponse(res, err, "Registration failed");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(
        res,
        new Error("User not found"),
        "Invalid credentials",
        401
      );
    }

    const isMatch = await verifyPassword(user.password, password);
    if (!isMatch) {
      return errorResponse(
        res,
        new Error("Password incorrect"),
        "Invalid credentials",
        401
      );
    }

    const payload = { id: user._id, email: user.email };
    const accessToken = generateAccessToken(payload, { expiresIn: "15m" });
    const refreshToken = generateRefreshToken(payload, { expiresIn: "7d" });

    // Optional: Save refresh token in DB or Redis for invalidation

    // Set refresh token as http-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return successResponse(res, { accessToken ,refreshToken }, "Login successful");
  } catch (err) {
    return errorResponse(res, err, "Login failed");
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return errorResponse(
        res,
        new Error("Refresh token not found"),
        "Unauthorized",
        401
      );
    }

    const decoded = verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const newAccessToken = generateAccessToken(decoded.id, {
      expiresIn: "15m",
    });

    return successResponse(
      res,
      { accessToken: newAccessToken },
      "Access token refreshed"
    );
  } catch (err) {
    return errorResponse(res, err, "Failed to refresh access token", 500);
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 0,
  });

  return successResponse(res, null, "Successfully logged out");
};
