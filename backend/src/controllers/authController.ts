import { Request, Response } from "express";

// Register User function
export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    // Logic for registering the user (e.g., saving to the database)
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error registering user", error });
  }
};

// Login User function
export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    // Logic for user authentication (e.g., comparing with stored data)
    if (username === "user@gmail.com" && password === "password") {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error });
  }
};