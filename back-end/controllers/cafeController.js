const asyncHandler = require('express-async-handler')
const Cafe = require('../models/cafeModel')
const User = require('../models/userModel')
const Cabin = require('../models/cabinModel')
const Constants = require('../utils/constants');
const ApiResponse = require('../utils/apiResponse');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const createCafe = asyncHandler(async (req, res) => {

    const userId = new mongoose.Types.ObjectId("647ce84a26e3c8b529689ff6");

    let response;
    let cafe = req.body;
    let cabins = req.body.cabins;
    await Cafe.create(cafe)
    const updatedUser = await User.findByIdAndUpdate(userId,
        {
            cafe: cafe._id
        },
        {
            new: true
        }
      );

    //initial cabins
    console.log(cabins)
    for(i=1; i<=cabins; i++){
        await Cabin.create({
            cabinNumber: i,
            status: 1,
            cafe: cafe._id
        })
    }

    response = new ApiResponse(true, Constants.MESSAGE_CAFE_CREATED, null, 
        {
            _id: cafe._id,
            name: cafe.name,
            price: cafe.price,
            address: cafe.address
        });
    res.json(response);
})


module.exports = {
    createCafe
}