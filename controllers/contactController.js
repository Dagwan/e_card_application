const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

// Create a new contact
const createContact = async (req, res) => {
  try {
    // Extract contact data from the request body
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    // Insert the contact into the MongoDB collection
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);

    if (response.acknowledged) {
      // Successfully created the contact
      res.status(201).json({ success: 'Contact created successfully', contactId: response.insertedId });
    } else {
      // Error occurred while inserting the contact
      res.status(500).json({ error: response.error || 'Error occurred while creating the contact.' });
    }
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email === 1) {
      // Handle duplicate email error
      res.status(400).json({ error: 'Email address is already in use.' });
    } else {
      console.error('Error creating a contact:', error);
      res.status(500).json({ error: 'An error occurred while creating the contact.' });
    }
  }
};


// Get all contacts
const getAll = async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const result = await mongodb.getDb().db().collection('contacts').find();
    const contacts = await result.toArray();
    
    // Set the response content type and send the contacts as JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching all contacts:', error);
    res.status(500).json({ error: 'An error occurred while fetching all contacts.' });
  }
};

// Get a single contact by ID
const getSingle = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid contact ID format.' });
    }

    // Retrieve a single contact by its ID from the database
    const contact = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .findOne({ _id: new ObjectId(userId) });

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found.' });
    }

    // Successfully fetched the contact
    res.status(200).json(contact);
  } catch (error) {
    console.error('Error fetching a single contact by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the contact.' });
  }
};


// Update an existing contact by ID
const updateContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    
    // Extract updated contact data from the request body
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    
    // Replace the existing contact with the updated data
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    
    if (response.modifiedCount > 0) {
      // Successfully updated the contact
      res.status(204).send();
    } else {
      // Contact not found
      res.status(404).json({ error: 'Contact not found.' });
    }
  } catch (error) {
    console.error('Error updating a contact by ID:', error);
    res.status(500).json({ error: 'An error occurred while updating the contact.' });
  }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);

    // Check if the contact exists before attempting to delete
    const contactExists = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .findOne({ _id: userId });

    if (!contactExists) {
      res.status(404).json({ error: 'Contact not found.' });
      return;
    }

    // Delete the contact by ID
    const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId });

    if (response.deletedCount > 0) {
      // Successfully deleted the contact
      console.log('Contact deleted successfully'); 
      res.status(204).send();
    } else {
      // Error occurred while deleting the contact
      res.status(500).json({ error: 'Error occurred while deleting the contact.' });
    }
  } catch (error) {
    // Handle invalid ObjectId format and other errors
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      res.status(400).json({ error: 'Invalid contact ID format.' });
    } else {
      console.error('Error deleting a contact by ID:', error);
      res.status(500).json({ error: 'An error occurred while deleting the contact.' });
    }
  }
};

module.exports = {
  createContact,
  getAll,
  getSingle,
  updateContact,
  deleteContact
};
