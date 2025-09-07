// backend/routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const router = express.Router();

// Helper to sign a JWT consistently
function signToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
}

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed });

    // You may auto-login after signup (optional). Keeping it enabled is convenient.
    const token = signToken(user.id);
    return res.status(201).json({
      message: "User created successfully",
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Signup failed" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Normal bcrypt compare
    let ok = await bcrypt.compare(password, user.password);

    // OPTIONAL: If you had legacy plaintext passwords, auto-migrate them once
    if (!ok && user.password === password) {
      user.password = await bcrypt.hash(password, 10);
      await user.save();
      ok = true;
    }

    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = signToken(user.id);
    return res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
