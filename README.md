# E-Card Application

This project is an E-Card Management API designed to facilitate the efficient management of electronic business cards. Whether you need to create, retrieve, update, or delete e-cards, this API has got you covered. With a user-friendly interface and comprehensive functionality, you can seamlessly integrate e-card management into your applications.

## Overview

The E-Card Application is a RESTful API built using Node.js and Express.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on electronic business cards. The API is equipped with endpoints to handle various tasks such as creating new e-cards, retrieving existing ones, updating e-card details, and deleting e-cards.

[API Documentation](https://e-card-application.onrender.com/api-docs/)

## Features

- **Create E-Cards:** Users can add new e-cards to the database by providing details like name, occupation, contact information, and social media handles in JSON format.
- **Retrieve E-Cards:** The API allows users to fetch a list of all e-cards or retrieve a specific e-card by its unique ID.
- **Update E-Cards:** Users can easily update e-card information using the PUT endpoint. They can send the updated details in JSON format to modify existing e-cards.
- **Delete E-Cards:** E-cards can be removed from the database using the DELETE endpoint. Users need to specify the e-card's ID to delete a specific entry.

## Development Environment

The E-Card Application was developed using the following tools:

- Node.js: A JavaScript runtime environment for building server-side applications.
- Express.js: A web application framework for Node.js that provides a robust set of features for web and mobile applications.
- MongoDB: A NoSQL database used to store and manage e-card data.
- Swagger: Used to generate API documentation for easy reference and testing.

### Installation

To install the necessary dependencies, run the following command:
npm install


### Starting the Server

To start the server locally, run:
npm start


## API Endpoints

- **POST /e_cards:** Create a new e-card.
- **GET /e_cards:** Retrieve all e-cards.
- **GET /e_cards/{id}:** Retrieve a specific e-card by its ID.
- **PUT /e_cards/{id}:** Update an existing e-card.
- **DELETE /e_cards/{id}:** Delete an e-card by its ID.

## Testing

Unit tests and integration tests have been implemented using Jest and Supertest to ensure the reliability and functionality of the API. You can run the tests using the following command:
npm test


## Useful Websites

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/4x/api.html)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Jest Documentation](https://jestjs.io/docs/en/getting-started)
- [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client/) - For manual testing and API development.

## Future Work

While the current version of the E-Card Application provides essential functionality for managing e-cards, there are several areas for improvement and future enhancements:

- Implement authentication and authorization mechanisms to secure API endpoints.
- Enhance error handling to provide informative error messages for API consumers.
- Add pagination support for retrieving large collections of e-cards.
- Implement rate limiting and request throttling to prevent abuse of the API.
- Integrate additional data validation checks to ensure data integrity.
- Improve logging and monitoring capabilities to track API usage and performance.
- Expand the API documentation to include detailed usage examples and code snippets.

## License

This project is licensed under the MIT License - see the [LICENSE](/docs/LICENSE) file for details.


