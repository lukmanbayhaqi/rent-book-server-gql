const { Rent, User, Book } = require("../models");
const errorHandler = require("../middlewares/errorHandler");
const { isLogin } = require("../middlewares/authentication");

module.exports = {
  async rentBook(_, input, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);

    if (dataLogin.error) {
      return {
        status: dataLogin.status,
        message: dataLogin.message,
      };
    }

    const BookId = input.bookId;
    const UserId = dataLogin.decoded.id;

    try {
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
      return errorHandler(err);
    }
  },
  async returnBook(_, input, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);

    if (dataLogin.error) {
      return {
        status: dataLogin.status,
        message: dataLogin.message,
      };
    }

    const { returnDate, id } = input;

    try {
      const _ = await Rent.update(
        {
          returnDate,
        },
        {
          where: { id },
        }
      );

      return {
        id,
        UserId: dataLogin.decoded.id,
        returnDate,
        status: 200,
        message: "Success return book",
      };
    } catch (err) {
      return errorHandler(err);
    }
  },
  async findAllRent(_, __, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);

    if (dataLogin.error) {
      return [
        {
          status: dataLogin.status,
          message: dataLogin.message,
        },
      ];
    }

    try {
      const data = Rent.findAll({
        where: { UserId: dataLogin.decoded.id },
        include: [User, Book],
        order: [["id", "ASC"]],
      });

      return data;
    } catch (err) {
      return [errorHandler(err)];
    }
  },
};
