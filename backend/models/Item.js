// backend/models/Item.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Item",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "items",
      timestamps: true,
    }
  );
};
