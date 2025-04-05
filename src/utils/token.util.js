import jwt from "jsonwebtoken";

const generateAccessToken = (userId, options) => {
  const payload = { id: userId };
  const secret = process.env.ACCESS_TOKEN_SECRET;
  return jwt.sign(payload, secret, options);
};

const generateRefreshToken = (userId, options) => {
  const payload = { id: userId };
  const secret = process.env.REFRESH_TOKEN_SECRET;
  return jwt.sign(payload, secret, options);
};

const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error("Token verification failed");
  }
};

export { generateAccessToken, generateRefreshToken , verifyToken };
