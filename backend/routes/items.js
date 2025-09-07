// backend/routes/items.js
const express = require("express");
const { Item } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json({ items });
  } catch (err) {
    console.error("Fetch items error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
