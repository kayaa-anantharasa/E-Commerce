require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, "abcd@1234", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};