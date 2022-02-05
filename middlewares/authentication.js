const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");
const errorHandler = require("../middlewares/errorHandler");

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
        return {
          error: true,
          status: 404,
          message: "user not found",
        };
      }
    } catch (err) {
      return errorHandler(err);
    }
  },
};
