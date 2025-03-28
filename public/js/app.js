// Product search functionality (example)
document.querySelector("#search").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");
  
    products.forEach(product => {
      const productName = product.querySelector(".product-name").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
  

  // Fetch product data from the server
fetch('/catalog')
.then(response => response.json())
.then(products => {
  const productList = document.getElementById('product-list');
  
  // Loop through each product and create HTML elements for them
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3 class="product-name">${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
    `;
    
    productList.appendChild(productCard);
  });
});

// Search functionality
document.querySelector("#search").addEventListener("input", function (e) {
const searchTerm = e.target.value.toLowerCase();
const products = document.querySelectorAll(".product-card");

products.forEach(product => {
  const productName = product.querySelector(".product-name").textContent.toLowerCase();
  if (productName.includes(searchTerm)) {
    product.style.display = "block";
  } else {
    product.style.display = "none";
  }
});
});
