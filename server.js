const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/db');
const models = require('./models/contactModel')
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Middleware for setting CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Use routes defined in separate files
app.use('/', require('./routes'));

app.use(models)

// Initialize the database connection
mongodb.initDb((err) => {
  if (err) {
    console.error('Error initializing database:', err);
  } else {
    app.listen(port, () => {
      console.log(`Running and listening on Port ${port}`);
      console.log('Contacts successfully initialize');
    });
  }
});
