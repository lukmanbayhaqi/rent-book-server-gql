const { User } = require("../models");
const errorHandler = require("../middlewares/errorHandler");
const { checkPassword } = require("../helpers/bcryptjs");
const { createToken } = require("../helpers/jwt");
const { AuthenticationError } = require("apollo-server");

module.exports = {
  async register(_, input) {
    const { name, email, password } = input;

    try {
      const data = await User.create({
        name,
        email,
        password,
      });

      return {
        id: data.id,
        email: data.email,
        status: 201,
        message: `Success register ${email}`,
      };
    } catch (err) {
      errorHandler(err);
    }
  },
  async login(_, input, c) {
    const { email, password } = input;

    try {
      const data = await User.findOne({
        where: { email },
      });

      if (data) {
        const check = checkPassword(password, data.password);
        if (check) {
          const token = createToken({
            id: data.id,
            email: data.email,
          });

          return {
            id: data.id,
            email: data.email,
            token,
            message: `success login as ${data.name}`,
            status: 200,
          };
        } else {
          throw new AuthenticationError("Invalid email / password");
        }
      } else {
        throw new AuthenticationError("Invalid email / password");
      }
    } catch (err) {
      errorHandler(err);
    }
  },
};
