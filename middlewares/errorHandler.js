module.exports = (err) => {
  let status = 500;
  let message = "Internal Server Error";

  console.log(err.message, "<<<<<===!!!ERROR!!!===>>>>>");

  if (err.status) {
    status = err.status;
    message = err.message;
  } else if (err.name == "SequelizeValidationError") {
    let error = [];
    err.errors.forEach((el) => error.push(el.message));
    status = 400;
    message = error[0];
  } else if (err.name === "SequelizeUniqueConstraintError") {
    status = 400;
    message = "email already in use";
  } else if (err.name === "JsonWebTokenError" || err.name === "SyntaxError") {
    status = 401;
    message = "please login first!";
  } else if (err.message) {
    message = err.message;
  }

  throw new Error(message);
};
