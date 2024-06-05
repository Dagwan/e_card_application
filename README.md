# E-Card Management Application

Welcome to the E-Card Management Application. This project provides a comprehensive API to manage electronic business cards efficiently. It allows users to create, retrieve, update, and delete e-cards with ease.

## Features

- **Create E-Cards:** Add new e-cards with details like name, occupation, position, contact number, email, and more.
- **Retrieve E-Cards:** Fetch a list of all e-cards or retrieve a specific e-card by its unique ID.
- **Update E-Cards:** Modify existing e-card details.
- **Delete E-Cards:** Remove e-cards from the database.
- **API Documentation:** Detailed API documentation is available via Swagger UI.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (ensure it's running on your local machine or use a cloud instance)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Dagwan/e_card_application.git
   cd e_card_application

2. Install the dependencies:
npm install

3. Set up environment variables:
Create a .env file in the root directory and add your MongoDB connection string.
MONGO_URI=mongodb://localhost/E_card_db

4. Start the application:
npm start

### Project Structure
e_card_application/
├── models/
│   └── e_card.js          # E-Card Mongoose model
├── routes/
│   ├── e_cardRoutes.js    # E-Card API routes
│   └── index.js           # Main router
    └── swagger.js         # Swagger route
    
├── tests/
│   └── e_card.test.js     # Test cases for the E-Card API
├── app.js                 # Express app setup
├── swagger.json           # Swagger documentation configuration
├── swagger.js             # Swagger autogen setup
├── package.json
└── README.md

## License

This project is licensed under the MIT License - see the [LICENSE](docs/LICENSE) file for details.