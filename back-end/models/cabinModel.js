const mongoose = require('mongoose')

const cabinSchema = mongoose.Schema({
    cabinNumber: {
        type: Number,
        required: [true]
    },
    status: {
        type: Boolean,
        require: [true]
    },
    cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
        required: false
    }
},
{
    timestamps: true,
})


module.exports = mongoose.model('Cabin', cabinSchema)