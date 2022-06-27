const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/user.model");

const prices = async (req, res) => {
  const prices = await stripe.prices.list();
  // console.log("prices", prices);
  res.json(prices.data.reverse());
};

const createSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user.user._id);
    // console.log(user);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { prices, createSubscription };
