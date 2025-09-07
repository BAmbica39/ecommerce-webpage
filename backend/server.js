// backend/server.js
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/items", require("./routes/items"));
app.use("/api/cart", require("./routes/cart"));

const PORT = 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
});
