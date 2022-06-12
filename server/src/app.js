const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const { login, signup } = require("./controllers/auth.controller");


app.post("/signup", signup);

app.post("/login", login);


module.exports = app;