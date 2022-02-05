const jwt = require("jsonwebtoken");
const secret = process.env.SECRET ?? "secret";

module.exports = {
  createToken(objData) {
    return jwt.sign(objData, secret); // { expiresIn: "5h" }
  },
  verifyToken(token) {
    return jwt.verify(token, secret);
  },
};
