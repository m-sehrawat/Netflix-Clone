const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const { login, signup } = require("./controllers/auth.controller");
const {
  prices,
  createSubscription,
} = require("./controllers/stripe.controller");
const { requireSignin } = require("./middlewares");

app.post("/signup", signup);
app.post("/login", login);

//Stripe
app.get("/prices", prices);
app.post("/create-subscription", requireSignin, createSubscription);

module.exports = app;
