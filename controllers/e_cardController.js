const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;
const { validationResult } = require('express-validator');

// Create a new e_card
const createEcard = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      middleName,
      lastName,
      gender,
      specifiedGender,
      occupation,
      position,
      officeAddress,
      headquartersLocation,
      subBusinessBranches,
      contactNumber,
      email,
      socialMediaHandles,
      passportPhotograph
    } = req.body;

    // Check if email already exists
    const existingEcard = await mongodb.getDb().db().collection('E_cards').findOne({ email });
    if (existingEcard) {
      return res.status(400).json({ error: 'Email address is already in use.' });
    }

    // Create the new e_card
    const e_card = {
      firstName,
      middleName,
      lastName,
      gender,
      specifiedGender: gender === 'other' ? specifiedGender : undefined,
      occupation,
      position,
      officeAddress,
      headquartersLocation,
      subBusinessBranches,
      contactNumber,
      email,
      socialMediaHandles,
      passportPhotograph
    };

    const response = await mongodb.getDb().db().collection('E_cards').insertOne(e_card);

    if (response.acknowledged) {
      res.status(201).json({ success: 'Ecard created successfully', ecardId: response.insertedId });
    } else {
      res.status(500).json({ error: 'Error occurred while creating the e_card.' });
    }
  } catch (error) {
    console.error('Error creating a e_card:', error);
    res.status(500).json({ error: 'An error occurred while creating the e_card.' });
  }
};

// Get all E_cards
const getAllEcards = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('E_cards').find();
    const e_cards = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(e_cards);
  } catch (error) {
    console.error('Error fetching all E_cards:', error);
    res.status(500).json({ error: 'An error occurred while fetching all E_cards.' });
  }
};

// Get a single e_card by ID
const getSingleEcard = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid e_card ID format.' });
    }

    const e_card = await mongodb
      .getDb()
      .db()
      .collection('E_cards')
      .findOne({ _id: new ObjectId(userId) });

    if (!e_card) {
      return res.status(404).json({ error: 'Ecard not found.' });
    }

    res.status(200).json(e_card);
  } catch (error) {
    console.error('Error fetching a single e_card by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the e_card.' });
  }
};

// Update an existing e_card by ID
const updateEcard = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = new ObjectId(req.params.id);
    const {
      firstName,
      middleName,
      lastName,
      gender,
      specifiedGender,
      occupation,
      position,
      officeAddress,
      headquartersLocation,
      subBusinessBranches,
      contactNumber,
      email,
      socialMediaHandles,
      passportPhotograph
    } = req.body;

    // Update the e_card
    const e_card = {
      _id: userId, // Ensure the _id field is preserved
      firstName,
      middleName,
      lastName,
      gender,
      specifiedGender: gender === 'other' ? specifiedGender : undefined,
      occupation,
      position,
      officeAddress,
      headquartersLocation,
      subBusinessBranches,
      contactNumber,
      email,
      socialMediaHandles,
      passportPhotograph
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('E_cards')
      .replaceOne({ _id: userId }, e_card);

    if (response.modifiedCount > 0) {
      res.status(201).json({ success: 'Ecard successfully updated', ecardId: response.insertedId });
    } else {
      res.status(404).json({ error: 'Ecard not found.' }); // Document not found
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

    const ecardExists = await mongodb.getDb().db().collection('E_cards').findOne({ _id: userId });

    if (!ecardExists) {
      return res.status(404).json({ error: 'Ecard not found.' });
    }

    const response = await mongodb.getDb().db().collection('E_cards').deleteOne({ _id: userId });

    if (response.deletedCount > 0) {
      res.status(201).json({ success: 'Ecard successfully deleted', ecardId: response.insertedId });
    } else {
      res.status(500).json({ error: 'Error occurred while deleting the e_card.' });
    }
  } catch (error) {
    console.error('Error deleting a e_card by ID:', error);
    res.status(500).json({ error: 'An error occurred while deleting the e_card.' });
  }
};

module.exports = {
  createEcard,
  getAllEcards,
  getSingleEcard,
  updateEcard,
  deleteEcard
};