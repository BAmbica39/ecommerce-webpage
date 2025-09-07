// backend/models/Cart.js
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      itemId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, defaultValue: 1, allowNull: false },
    },
    {
      tableName: "carts",
      indexes: [
        {
          unique: true,
          fields: ["userId", "itemId"], // one row per user per item
        },
      ],
    }
  );
  return Cart;
};
