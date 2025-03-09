import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import connectDB from "./config/db";

dotenv.config();

const app: Application = express();  // Ensure the app is typed correctly

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

export default app;
