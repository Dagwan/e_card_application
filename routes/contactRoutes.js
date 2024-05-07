const express = require('express');
const router = express.Router();

// Import the contactsController to handle requests
const contactsController = require('../controllers/contactController');

// Define the API routes and their corresponding controller methods

// Create a new contact
router.post('/', contactsController.createContact);

// Get all contacts
router.get('/', contactsController.getAll);

// Get a single contact by ID
router.get('/:id', contactsController.getSingle);

// Update a contact by ID
router.put('/:id', contactsController.updateContact);

// Delete a contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
