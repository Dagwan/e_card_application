
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

// Import the e_cardController to handle requests
const e_cardController = require('../controllers/e_cardController');

// Validation and sanitization middleware for create and update operations
const validateAndSanitizeECard = [
  body('firstName').isString().trim().notEmpty(),
  body('middleName').optional().isString().trim(),
  body('lastName').isString().trim().notEmpty(),
  body('gender').isIn(['Male', 'Female', 'Other']).notEmpty(),
  body('specifiedGender').if(body('gender').equals('Other')).isString().trim().notEmpty(),
  body('occupation').isString().trim().notEmpty(),
  body('position').isString().trim().notEmpty(),
  body('officeAddress').isString().trim().notEmpty(),
  body('headquartersLocation').isString().trim().notEmpty(),
  body('subBusinessBranches').isArray().notEmpty(),
  body('contactNumber').isString().trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('socialMediaHandles').isObject().notEmpty(),
  body('passportPhotograph').isString().notEmpty(),
];

// Define the API routes and their corresponding controller methods

// Create a new e_card
router.post('/', validateAndSanitizeECard, e_cardController.createEcard);

// Get all e_cards
router.get('/', e_cardController.getAllEcards);

// Get a single e_card by ID
router.get('/:id', e_cardController.getSingleEcard);

// Update an e_card by ID
router.put('/:id', validateAndSanitizeECard, e_cardController.updateEcard);

// Delete an e_card by ID
router.delete('/:id', e_cardController.deleteEcard);

// Export the Router
module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { body } = require('express-validator');

// // Import the e_cardController to handle requests
// const e_cardController = require('../controllers/e_cardController');

// // Validation and sanitization middleware for create and update operations
// const validateAndSanitizeECard = [
//   body('firstName').isString().trim().notEmpty(),
//   body('middleName').optional().isString().trim(),
//   body('lastName').isString().trim().notEmpty(),
//   body('gender').isIn(['Male', 'Female', 'Other']).notEmpty(),
//   body('specifiedGender').if(body('gender').equals('other')).isString().trim().notEmpty(),
//   body('occupation').isString().trim().notEmpty(),
//   body('position').isString().trim().notEmpty(),
//   body('officeAddress').isString().trim().notEmpty(),
//   body('headquartersLocation').isString().trim().notEmpty(),
//   body('subBusinessBranches').isArray().notEmpty(),
//   body('contactNumber').isString().trim().notEmpty(),
//   body('email').isEmail().normalizeEmail(),
//   body('socialMediaHandles').isObject().notEmpty(),
//   body('passportPhotograph').isString().notEmpty(),
// ];

// // Define the API routes and their corresponding controller methods

// // Create a new e_card
// router.post('/', validateAndSanitizeECard, e_cardController.createEcard);

// // Get all e_cards
// router.get('/', e_cardController.getAllEcards);

// // Get a single e_card by ID
// router.get('/:id', e_cardController.getSingleEcard);

// // Update an e_card by ID
// router.put('/:id', validateAndSanitizeECard, e_cardController.updateEcard);

// // Delete an e_card by ID
// router.delete('/:id', e_cardController.deleteEcard);

// // Export the Router
// module.exports = router;