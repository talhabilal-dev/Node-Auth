import argon2 from "argon2";

async function hashPassword(password) {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (err) {
    throw new Error("Error hashing password");
  }
}

async function verifyPassword(hashedPassword, plainPassword) {
  try {
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    return isMatch;
  } catch (err) {
    throw new Error("Error verifying password");
  }
}

export { hashPassword, verifyPassword };
