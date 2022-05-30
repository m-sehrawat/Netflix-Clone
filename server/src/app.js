const express = require('express');

const app = express();

app.use(express.json());

const { login, signup } = require("./controllers/auth.controller");


app.post("/signup", signup);

app.post("/login", login);


module.exports = app;