const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(+process.env.SALT ?? 9);

module.exports = {
  hashPassword(password) {
    return bcrypt.hashSync(password, salt);
  },
  checkPassword(password, dbPassword) {
    return bcrypt.compareSync(password, dbPassword);
  },
};
