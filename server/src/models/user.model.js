const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    stripe_customer_id: { type: String, required: false },
    subscriptions: [],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Hashing the password before storing it into the database using hook which will work like a middleware
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 8, (err, hash) => {
    this.password = hash;
    return next();
  });
});

// Created a method for Schema to check the hashed password
userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password).then((res) => res);
};

module.exports = model("user", userSchema);
