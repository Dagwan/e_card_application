const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contact API',
    description: `API documentation for the Contacts API. This API is designed to help you efficiently manage your contact information. Whether you need to create, retrieve, update, or delete contacts, this API has got you covered. With a user-friendly interface and comprehensive functionality, you can seamlessly integrate contact management into your applications.

**Key Features:**

- **Create Contacts:** Use the POST endpoint to add new contacts to your database, providing details like first name, last name, email, favorite color, and birthday in JSON format.

- **Retrieve Contacts:** The GET endpoint allows you to fetch a list of all contacts or retrieve a specific contact by their unique ID.

- **Update Contacts:** Easily update contact information using the PUT endpoint. Send the updated details in JSON format to modify existing contacts.

- **Delete Contacts:** Remove contacts from your database using the DELETE endpoint. Specify the contact's ID to delete a specific entry.

**Sample Requests and Responses:** We've provided sample JSON requests and responses for each endpoint to help you understand how to interact with the API effectively.

**Error Handling:** The API includes error responses and status codes to guide you in case of any issues.

**API Documentation:** Explore the detailed API documentation below to learn how to use each endpoint, the expected request structures, and response formats.

Start managing your contacts effortlessly with the Contacts API. Integrate it into your applications to streamline contact management and enhance user experiences.`
  },
  host: 'cse341-4.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
console.log('Swagger runs successfully');
