"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.Rent);
    }
  }

  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Title cannot be empty",
        },
        validate: {
          len: {
            args: [1],
            msg: "Title cannot be empty",
          },
        },
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "ISBN cannot be empty",
        },
        validate: {
          len: {
            args: [1],
            msg: "ISBN cannot be empty",
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Author cannot be empty",
        },
        validate: {
          len: {
            args: [1],
            msg: "Author cannot be empty",
          },
        },
      },
      image_url: {
        type: DataTypes.TEXT,
        allowNull: {
          args: false,
          msg: "Image Url cannot be empty",
        },
        validate: {
          len: {
            args: [1],
            msg: "Image Url cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
