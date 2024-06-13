const express = require('express');
const router = express.Router();

// Include the Swagger documentation route
router.use('/', require('./swagger'));

// Include the e_card routes
router.use('/', require('./e_cardRoutes'));

module.exports = router;
