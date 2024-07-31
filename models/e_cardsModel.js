// Import Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the 'E_cards' collection
const E_cardsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: false 
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  specifiedGender: {
    type: String,
    required: false //Optional, only if the gender is 'other'.
  },
  occupation: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  officeAddress: {
    type: String,
    required: true
  },
  headquartersLocation: {
    type: String,
    required: true
  },
  subBusinessBranches: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  socialMediaHandles: {
    type: String,
    required: true
  },
  passportPhotograph: {
    type: String,
    required: true
  }
});

// Create and export a Mongoose model for the 'E_cards' collection
module.exports = mongoose.model('E_cards', E_cardsSchema);
