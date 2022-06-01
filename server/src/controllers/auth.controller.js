const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const createToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};


const signup = async (req, res) => {
    try {
        const email = await User.findOne({ email: req.body.email }).lean().exec();

        const mobile = await User.findOne({ mobile: req.body.mobile }).lean().exec();

        if (email) {
            return res.status(500).json({ message: "Please provide a different email address", status: "Failed" });
        }

        if (mobile) {
            return res.status(500).json({ message: "Please provide a different mobile number", status: "Failed" });
        }

        const user = await User.create(req.body);

        const token = createToken(user);

        return res.status(201).json({ user, token });

    } catch (e) {

        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};


const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(500).json({ message: "Please check your email and password", status: "Failed" });
        }

        const match = await user.checkPassword(req.body.password);
        
        if(!match){
            return res.status(500).json({ message: "Please check your email and password", status: "Failed" });
        }

        const token = createToken(user);

        return res.status(201).json({user, token});

    } catch (e) {
        
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};


module.exports = { signup, login };