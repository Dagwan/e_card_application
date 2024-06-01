const express = require('express');
const router = express.Router();

// Import the e_cardController to handle requests
const e_cardController = require('../controllers/e_cardController');

// Define the API routes and their corresponding controller methods

// Create a new e_card
router.post('/', e_cardController.createEcard);

// Get all e_cards
router.get('/', e_cardController.getAll);

// Get a single e_card by ID
router.get('/:id', e_cardController.getSingle);

// Update a e_card by ID
router.put('/:id', e_cardController.updateEcard);

// Delete a e_card by ID
router.delete('/:id', e_cardController.deleteEcard);

module.exports = router;
