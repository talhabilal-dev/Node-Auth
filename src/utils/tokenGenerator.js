import jwt from "jsonwebtoken";

const generateAccessToken = (userId, expiresIn = "15m") => {
  const payload = { id: userId };
  const secret = process.env.ACCESS_TOKEN_SECRET;
  const options = { expiresIn };
  return jwt.sign(payload, secret, options);
};

const generateRefreshToken = (userId, expiresIn = "7d") => {
  const payload = { id: userId };
  const secret = process.env.REFRESH_TOKEN_SECRET;
  const options = { expiresIn };
  return jwt.sign(payload, secret, options);
};

export { generateAccessToken, generateRefreshToken };
