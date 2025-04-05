import { errorResponse } from "../utils/ApiResponse.util.js";
import { verifyToken } from "../utils/token.util.js";
import ENV from "../config/env.config.js";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return errorResponse(
      res,
      new Error("No token provided"),
      "Unauthorized",
      401
    );
  }

  try {
    const decoded = verifyToken(token, ENV.ACCESS_TOKEN_SECRET);
    if (!decoded) {
      return errorResponse(
        res,
        new Error("Invalid token"),
        "Unauthorized",
        401
      );
    }

    req.user = decoded;

    next();
  } catch (err) {
    return errorResponse(res, err, "Unauthorized", 401);
  }
};

export default authMiddleware;
