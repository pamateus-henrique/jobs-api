const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');
const bcrypt = require('bcryptjs');

const register = async (req,res) => {
    const {name, password, email} = req.body;

    if(!name || !email || !password){
        throw new BadRequestError('Please provide name, email and password');
    }
    
    const user = await User.create({name, email, password});

    res.status(StatusCodes.CREATED).json({user});
};

const login = async (req,res) => {
    
}

module.exports = {register,login};