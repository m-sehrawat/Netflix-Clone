const expressJwt = require("express-jwt");

const requireSignin = expressJwt({
  secret: process.env.JWT_ACCESS_KEY,
  algorithms: ["HS256"],
});

module.exports = { requireSignin };
