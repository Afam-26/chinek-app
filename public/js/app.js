const products = [
  { id: 1, name: 'Tyre A', description: 'Durable all-terrain tyre.', price: 50, imageUrl: '/images/tyre-a.jpg' },
  { id: 2, name: 'Tyre B', description: 'High-performance tyre for sports cars.', price: 60, imageUrl: '/images/tyre-b.jpg' },
  { id: 3, name: 'Tyre C', description: 'All-weather tyre for city cars.', price: 70, imageUrl: '/images/tyre-c.jpg' },
  { id: 4, name: 'Tyre D', description: 'Premium performance tyre.', price: 80, imageUrl: '/images/tyre-d.jpg' },
];

// Load products dynamically
function loadProducts(filter = '') {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Clear previous list

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.description.toLowerCase().includes(filter.toLowerCase())
  );

  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
    `;
    
    productList.appendChild(productCard);
  });
}

// Search function
function searchProducts() {
  const searchTerm = document.getElementById('search-bar').value;
  loadProducts(searchTerm);
}

// Load products initially
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});
