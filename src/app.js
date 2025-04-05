import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Node-Auth");
});

export default app;
