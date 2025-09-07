// backend/routes/cart.js
const express = require("express");
const { Cart, Item } = require("../models");
const auth = require("../middleware/auth");

const router = express.Router();

// GET my cart
router.get("/me", auth, async (req, res) => {
  try {
    const cart = await Cart.findAll({
      where: { userId: req.user.id },
      include: [{ model: Item }],
      order: [["id", "ASC"]],
    });
    res.json(cart);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

// ADD item to cart (increments quantity)
router.post("/add", auth, async (req, res) => {
  try {
    const { itemId, quantity = 1 } = req.body;
    if (!itemId) return res.status(400).json({ message: "itemId is required" });

    const [row, created] = await Cart.findOrCreate({
      where: { userId: req.user.id, itemId },
      defaults: { quantity },
    });

    if (!created) {
      row.quantity += quantity;
      await row.save();
    }

    // return updated cart
    const cart = await Cart.findAll({
      where: { userId: req.user.id },
      include: [{ model: Item }],
    });

    res.json(cart);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to add to cart" });
  }
});

// REMOVE a cart line by cart id
router.delete("/:cartId", auth, async (req, res) => {
  try {
    const { cartId } = req.params;
    const row = await Cart.findOne({ where: { id: cartId, userId: req.user.id } });
    if (!row) return res.status(404).json({ message: "Cart item not found" });
    await row.destroy();
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to remove item" });
  }
});

module.exports = router;
