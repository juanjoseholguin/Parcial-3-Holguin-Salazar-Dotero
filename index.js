let products = [];
let favorites = JSON.parse(localStorage.getItem('favoritos')) || [];


function parseDataToProducts() {
  const productsContainer = document.getElementById("products");

  if (!productsContainer) {
    console.error("Element with id 'products' not found.");
    return;
  }

  productsContainer.innerHTML = ""; 
  products = []; 

  
  console.log('Data:', data);
  data.forEach((item, index) => {
    let product = new Product(
      item.Title,
      item.Price,
      item.description || item.Description, 
      item.Size,
      item.Color,
      item.Image
    );
    products.push(product);
    productsContainer.innerHTML += product.htmlCard(index);
  });

  console.log('Productos cargados:', products);
}


function filterProducts(query) {
  
  if (query.length < 1) {
    renderProducts(products);
    return;
  }

  
  const filteredProducts = products.filter(product =>
    product.Title.toLowerCase().includes(query.toLowerCase()) ||
    product.Description.toLowerCase().includes(query.toLowerCase())
  );
  

  console.log('Productos filtrados:', filteredProducts);
  renderProducts(filteredProducts);
}


function renderProducts(productsList) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; 

  if (productsList.length === 0) {
    productsContainer.innerHTML = "<p>No se encontraron productos.</p>";
  }

  // Renderiza cada producto filtrado
  productsList.forEach((product, index) => {
    productsContainer.innerHTML += product.htmlCard(index);
  });
}


document.querySelector("#search-input").addEventListener("input", (event) => {
  const query = event.target.value; 
  console.log('Consulta de búsqueda:', query); 
  filterProducts(query); 
});


document.addEventListener("DOMContentLoaded", function() {
  parseDataToProducts();
});

