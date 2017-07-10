const mongoose = require('mongoose')

const medSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
    // no need to have required: false
  rxcui: {
    type: Number
  },
  contraAll: {
    type: String
  }
})

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  memberId: {
    type: Number,
    required: true
  },
  cardholder: {
    type: Boolean,
    default: true
  }
})

module.exports = {
  User: mongoose.model('User', userSchema),
  Medication: mongoose.model('Medication', medSchema)
}
