const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const routes = require('./routes/routes');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes from the routes.js file
// app.use('/', routes);

// Serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve catalog page
app.get('/catalog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'catalog.html'));  // Serve catalog.html
});

// Handle the contact form submission
// app.post('/contact', (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(`Contact form submitted: ${name}, ${email}, ${message}`);
//   res.send('Thank you for your message!');
// });

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
