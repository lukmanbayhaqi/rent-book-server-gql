"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rent.belongsTo(models.User);
      Rent.belongsTo(models.Book);
    }
  }
  Rent.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "Book cannot be empty",
          },
        },
      },
      returnDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Rent",
    }
  );
  return Rent;
};
