import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/ApiResponse.util.js";

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
    
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return errorResponse(res, err, "Unauthorized", 401);
  }
};

export default authMiddleware;
