const mongoose = require('mongoose')

const cafeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name']
    },
    price: {
        type: Number,
        required: [true,'Please add a price']
    },
    address: {
        type: String,
        required: [true,'Please add an address']
    }
},
{
    timestamps: true,
    collection: 'cafes' // Specify the collection name explicitly
})


module.exports = mongoose.model('Cafe', cafeSchema)