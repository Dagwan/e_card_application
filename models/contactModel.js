// Import Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the 'contacts' collection
const contactSchema = new mongoose.Schema({
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

// Create and export a Mongoose model for the 'contacts' collection
module.exports = mongoose.model('contacts', contactSchema);
