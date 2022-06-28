const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const { login, signup } = require("./controllers/auth.controller");
const {
  prices,
  createSubscription,
  subscriptionStatus,
  subscriptions,
} = require("./controllers/stripe.controller");
const { requireSignin } = require("./middlewares");

app.post("/signup", signup);
app.post("/login", login);

//Stripe
app.get("/prices", prices);
app.post("/create-subscription", requireSignin, createSubscription);
app.get("/subscription-status", requireSignin, subscriptionStatus);
app.get("/subscriptions", requireSignin, subscriptions);

module.exports = app;
