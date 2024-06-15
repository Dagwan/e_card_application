const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'E-Card Management API',
    description: `API documentation for the E-Card Management API. This API is designed to help you manage electronic business cards efficiently. Whether you need to create, retrieve, update, or delete e-cards, this API has got you covered. With a user-friendly interface and comprehensive functionality, you can seamlessly integrate e-card management into your applications.

**Key Features:**

- **Create E-Cards:** Use the POST endpoint to add new e-cards to your database, providing details like name, occupation, position, office address, contact number, email, social media handles, and passport photograph in JSON format.

- **Retrieve E-Cards:** The GET endpoint allows you to fetch a list of all e-cards or retrieve a specific e-card by its unique ID.

- **Update E-Cards:** Easily update e-card information using the PUT endpoint. Send the updated details in JSON format to modify existing e-cards.

- **Delete E-Cards:** Remove e-cards from your database using the DELETE endpoint. Specify the e-card's ID to delete a specific entry.

**Sample Requests and Responses:** We've provided sample JSON requests and responses for each endpoint to help you understand how to interact with the API effectively.

**Error Handling:** The API includes error responses and status codes to guide you in case of any issues.

**API Documentation:** Explore the detailed API documentation below to learn how to use each endpoint, the expected request structures, and response formats.

Start managing your e-cards effortlessly with the E-Card Management API. Integrate it into your applications to streamline e-card management and enhance user experiences.`
  },
  // Production
  host: 'e-card-application.onrender.com',
  // basePath: process.env.BASE_PATH || '/',
  schemes: 'https'

  // Develpoment
  // host: process.env.HOST || 'localhost:8080',
  // // basePath: process.env.BASE_PATH || '/',
  // schemes: [process.env.SCHEMES || 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
console.log('Swagger runs successfully');
