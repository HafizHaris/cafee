const asyncHandler = require('express-async-handler')
const Activity = require('../models/activityModel')
const Constants = require('../utils/constants');
const ApiResponse = require('../utils/apiResponse');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const createActivity = asyncHandler(async (req, res) => {

    let response;
    let activity = req.body;
    console.log(activity.activityType);
    await Activity.create(activity)

    response = new ApiResponse(true, Constants.MESSAGE_CAFE_CREATED, null, activity);
    res.json(response);
})


module.exports = {
    createActivity
}