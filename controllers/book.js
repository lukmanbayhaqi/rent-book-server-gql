const { Book } = require("../models");
const errorHandler = require("../middlewares/errorHandler");
const shuffle = require("../helpers/shuffle");

module.exports = {
  async findAllBook(_, __, headers) {
    try {
      const data = await Book.findAll();
      const dataShuffle = shuffle(data);

      return dataShuffle;
    } catch (err) {
      errorHandler(err);
    }
  },
};
