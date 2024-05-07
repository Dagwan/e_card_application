const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'E-cards API',
    description: 'E-cards Application'
  },
  host: 'https://e-card-application.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
