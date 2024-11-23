let products = [];
let favorites = JSON.parse(localStorage.getItem('favoritos')) || [];

function parseDataToProducts() {
  const productsContainer = document.getElementById("products");

  if (!productsContainer) {
    console.error("Element with id 'products' not found.");
    return;
  }

  // Limpiar contenedor antes de renderizar
  productsContainer.innerHTML = "";
  products = [];  // Reiniciar array para evitar duplicados

  // Renderizar todos los productos sin filtrar favoritos
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

// Función para redirigir al detalle del producto seleccionado
function productselected(pos) {
  const selectedProduct = products[pos];
  window.location.href = `detallesproducto.html?name=${encodeURIComponent(selectedProduct.Title)}`;
}

// Evento de filtro de búsqueda
document.querySelector(".search-bar input").addEventListener("input", (event) => {
  filterProducts(event.target.value);
});

// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", function() {
  parseDataToProducts();
});
