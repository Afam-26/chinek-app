const express = require('express');
const router = express.Router();

// Static data for products (you can replace this with a database later)
const products = [
  {
    id: 1,
    name: 'Tyre A',
    price: '50',
    description: 'Durable all-terrain tyre.',
    imageUrl: '/images/tyre-a.jpg',
  },
  {
    id: 2,
    name: 'Tyre B',
    price: '60',
    description: 'High performance tyre for sports cars.',
    imageUrl: '/images/tyre-b.jpg',
  },
  // Add more tyre products here
];

// Home route - Serve the homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Catalog route - Serve product data
router.get('/catalog', (req, res) => {
  res.json(products);  // Send product list as JSON
});

// Contact route - Serve the catalog page
app.get('/catalog', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'catalog.html'));
  });

// Contact route - Serve the contact form
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

// POST route for handling contact form submission
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact form submitted: ${name}, ${email}, ${message}`);
  res.send('Thank you for your message!');
});

// Other routes can be added as needed
module.exports = router;
