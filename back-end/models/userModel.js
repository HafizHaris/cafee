const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name value']
    },
    email: {
        type: String,
        required: [true,'Please add an email']
    },
    phone: {
        type: String,
        required: [true,'Please add a phone']
    },
    password: {
        type: String,
        required: [true,'Please add a password']
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

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Fire a function before doc saved to db
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema)