const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

// Create a new e_card
const createEcard = async (req, res) => {
  try {
    // Extract e_card data from the request body
    const e_card = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    // Insert the e_card into the MongoDB collection
    const response = await mongodb.getDb().db().collection('E_cards').insertOne(e_card);

    if (response.acknowledged) {
      // Successfully created the e_card
      res.status(201).json({ success: 'Ecard created successfully', ecardId: response.insertedId });
    } else {
      // Error occurred while inserting the e_card
      res.status(500).json({ error: response.error || 'Error occurred while creating the e_card.' });
    }
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email === 1) {
      // Handle duplicate email error
      res.status(400).json({ error: 'Email address is already in use.' });
    } else {
      console.error('Error creating a e_card:', error);
      res.status(500).json({ error: 'An error occurred while creating the e_card.' });
    }
  }
};


// Get all E_cards
const getAll = async (req, res) => {
  try {
    // Retrieve all E_cards from the database
    const result = await mongodb.getDb().db().collection('E_cards').find();
    const E_cards = await result.toArray();
    
    // Set the response content type and send the E_cards as JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(E_cards);
  } catch (error) {
    console.error('Error fetching all E_cards:', error);
    res.status(500).json({ error: 'An error occurred while fetching all E_cards.' });
  }
};

// Get a single e_card by ID
const getSingle = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid e_card ID format.' });
    }

    // Retrieve a single e_card by its ID from the database
    const e_card = await mongodb
      .getDb()
      .db()
      .collection('E_cards')
      .findOne({ _id: new ObjectId(userId) });

    if (!e_card) {
      return res.status(404).json({ error: 'Ecard not found.' });
    }

    // Successfully fetched the e_card
    res.status(200).json(e_card);
  } catch (error) {
    console.error('Error fetching a single e_card by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the e_card.' });
  }
};


// Update an existing e_card by ID
const updateEcard = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    
    // Extract updated e_card data from the request body
    const e_card = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    
    // Replace the existing e_card with the updated data
    const response = await mongodb
      .getDb()
      .db()
      .collection('E_cards')
      .replaceOne({ _id: userId }, e_card);
    
    if (response.modifiedCount > 0) {
      // Successfully updated the e_card
      res.status(204).send();
    } else {
      // Ecard not found
      res.status(404).json({ error: 'Ecard not found.' });
    }
  } catch (error) {
    console.error('Error updating a e_card by ID:', error);
    res.status(500).json({ error: 'An error occurred while updating the e_card.' });
  }
};

// Delete a e_card by ID
const deleteEcard = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);

    // Check if the e_card exists before attempting to delete
    const ecardExists = await mongodb
      .getDb()
      .db()
      .collection('E_cards')
      .findOne({ _id: userId });

    if (!ecardExists) {
      res.status(404).json({ error: 'Ecard not found.' });
      return;
    }

    // Delete the e_card by ID
    const response = await mongodb.getDb().db().collection('E_cards').deleteOne({ _id: userId });

    if (response.deletedCount > 0) {
      // Successfully deleted the e_card
      console.log('Ecard deleted successfully'); 
      res.status(204).send();
    } else {
      // Error occurred while deleting the e_card
      res.status(500).json({ error: 'Error occurred while deleting the e_card.' });
    }
  } catch (error) {
    // Handle invalid ObjectId format and other errors
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      res.status(400).json({ error: 'Invalid e_card ID format.' });
    } else {
      console.error('Error deleting a e_card by ID:', error);
      res.status(500).json({ error: 'An error occurred while deleting the e_card.' });
    }
  }
};

module.exports = {
  createEcard,
  getAll,
  getSingle,
  updateEcard,
  deleteEcard
};
