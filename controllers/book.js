const { Book } = require("../models");
const errorHandler = require("../middlewares/errorHandler");
const shuffle = require("../helpers/shuffle");
const { isLogin } = require("../middlewares/authentication");

module.exports = {
  async findAllBook(_, __, headers) {
    const token = Object.values(headers).slice(7).join("");
    const dataLogin = await isLogin(token);
    console.log("sokin");
    if (dataLogin.error) {
      return [
        {
          status: dataLogin.status,
          message: dataLogin.message,
        },
      ];
    }

    try {
      const data = await Book.findAll();
      const dataShuffle = shuffle(data);

      return dataShuffle;
    } catch (err) {
      return [errorHandler(err)];
    }
  },
};
