const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');  // to parse POST requests
const routes = require('routes');  // Import the routes module
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use routes from the routes.js file
app.use('/', routes);

// Serve static files (e.g., images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
