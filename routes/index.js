const express = require('express');
const router = express.Router();

// Include the Swagger documentation route
router.use('/', require('./swagger'));

// Include the contact routes
router.use('/contacts', require('./contactRoutes'));

module.exports = router;
