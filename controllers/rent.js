const { Rent, User, Book } = require("../models");
const errorHandler = require("../middlewares/errorHandler");
const { isLogin } = require("../middlewares/authentication");

module.exports = {
  async rentBook(_, input, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);

    const BookId = input.bookId;
    const UserId = dataLogin.decoded.id;

    try {
      const dataRent = await Rent.findOne({
        where: {
          UserId,
          BookId,
        },
      });

      if (dataRent) {
        throw new Error("You've already rent this book!");
      }

      const data = await Rent.create({
        BookId,
        UserId,
      });

      return {
        id: data.id,
        UserId,
        BookId,
        status: 201,
        message: "Success rent book",
      };
    } catch (err) {
      errorHandler(err);
    }
  },
  async returnBook(_, input, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);

    const { returnDate, id } = input;

    try {
      const _ = await Rent.destroy({
        where: { id },
      });

      return {
        id,
        UserId: dataLogin.decoded.id,
        returnDate,
        status: 200,
        message: "Success return book",
      };
    } catch (err) {
      errorHandler(err);
    }
  },
  async findAllRent(_, __, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);

    try {
      const data = await Rent.findAll({
        where: { UserId: dataLogin.decoded.id, returnDate: null },
        include: [User, Book],
        order: [["id", "ASC"]],
      });

      return data;
    } catch (err) {
      errorHandler(err);
    }
  },
};
