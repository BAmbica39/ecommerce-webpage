// backend/models/index.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db"); // ← use your db.js singleton

const User = require("./User")(sequelize, DataTypes);
const Item = require("./Item")(sequelize, DataTypes);
const Cart = require("./Cart")(sequelize, DataTypes);

// Associations
User.hasMany(Cart, { foreignKey: "userId", onDelete: "CASCADE" });
Cart.belongsTo(User, { foreignKey: "userId" });

Item.hasMany(Cart, { foreignKey: "itemId", onDelete: "CASCADE" });
Cart.belongsTo(Item, { foreignKey: "itemId" });

module.exports = { sequelize, User, Item, Cart };
