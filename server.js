const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const routes = require('./routes/routes');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));


// Serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
