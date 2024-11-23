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
}


function productselected(pos) {
  const selectedProduct = products[pos];
  window.location.href = `detallesproducto.html?name=${encodeURIComponent(selectedProduct.Title)}`;
}

document.querySelector(".search-bar input").addEventListener("input", (event) => {
  filterProducts(event.target.value);
});


document.addEventListener("DOMContentLoaded", function() {
  parseDataToProducts();
});
