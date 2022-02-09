const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");
const errorHandler = require("../middlewares/errorHandler");
const { AuthenticationError } = require("apollo-server");

module.exports = {
  async isLogin(token) {
    try {
      const { id, email } = verifyToken(token);

      const data = await User.findOne({
        where: { id, email },
      });

      if (data) {
        return {
          decoded: data,
        };
      } else {
        throw new AuthenticationError("User not found, please login again");
      }
    } catch (err) {
      errorHandler(err);
    }
  },
};
