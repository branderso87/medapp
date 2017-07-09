const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    memberId: { type: Number, required: true },
    cardholder: { type: Boolean, default: true }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
