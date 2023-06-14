const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId
const createToken = require("../utils/tokenGeneration");
const helper = require("../utils/helper");
const Constants = require('../utils/constants');
const ApiResponse = require('../utils/apiResponse');


const getUser = asyncHandler(async (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        res.status(404)
        throw new Error("Invalid User Id")
    }
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error("User not found")
    }
    res.status(200).json(user)
})


const createUser = asyncHandler(async (req, res) => {
    let response;
    let user = await User.findOne({ email: req.body.email })

    if(user){
        response = new ApiResponse(false, Constants.MESSAGE_EMAIL_ALREADY_EXISTS, null, {});
    }else{
        user = req.body;
        await User.create(user)
        response = new ApiResponse(true, Constants.MESSAGE_ACCOUNT_CREATED, null, 
            {
                _id: user._id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                authToken: createToken(user._id),
          });
    }
    res.json(response);
})


const loginUser = asyncHandler(async (req, res) => {
    let response;
    const { email, password } = req.body;

    if (helper.isValid(email)) {

      const user = await User.findOne({ email });
      if (user && await user.matchPassword(password)) {
            response = new ApiResponse(true, Constants.MESSAGE_LOGIN_SUCCESS, null, {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                autToken: createToken(user._id),
                cafe: user.cafe 
              });
        } else {
            response = new ApiResponse(false, Constants.MESSAGE_INVALID_LOGIN, null, {});
        }
    } else {
        response = new ApiResponse(false, Constants.MESSAGE_EMAIL_ALREADY_EXISTS, null, {});
    }

    res.json(response)
  })

module.exports = {
    getUser, createUser, loginUser
}