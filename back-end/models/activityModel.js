const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    activityType: {
        type: String,
        enum: ['start', 'pause', 'resume', 'end'],
        required: true
    },
    cabin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
        required: false
    }
},
{
    timestamps: true,
})


module.exports = mongoose.model('Activity', activitySchema)