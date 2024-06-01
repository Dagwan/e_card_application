// Import Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the 'E_cards' collection
const E_cardsSchema = new mongoose.Schema({
  // Define the schema fields and their types
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  favoriteColor: String,
  birthday: Date
});

// Create and export a Mongoose model for the 'E_cards' collection
module.exports = mongoose.model('E_cards', E_cardsSchema);
