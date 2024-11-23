
class Product {
    constructor(Title, Price, Description, Size, Color, Image) {
      this.Title = Title;
      this.Price = Price;
      this.Description = Description;
      this.Size = Size;
      this.Color = Color;
      this.Image = Image;
    }
  
    
    htmlCard(index) {
      return `
        <div class="product-card" onclick="productselected(${index})">
          <img src="${this.Image}" alt="${this.Title}">
          <h3>${this.Title}</h3>
          <p>${this.Description}</p>
          <p>Price: $${this.Price}</p>
        </div>
      `;
    }
  }
  
  
  let products = [];
  
  function parseDataToProducts() {
    const productsContainer = document.getElementById("products");
  
   
    productsContainer.innerHTML = "";
  
    
    if (!data || data.length === 0) {
      console.error("No hay productos en data.js.");
      return;
    }
  
    
    data.forEach((item, index) => {
      let product = new Product(
        item.Title,
        item.Price,
        item.Description,
        item.Size,
        item.Color,
        item.Image
      );
      products.push(product);
      productsContainer.innerHTML += product.htmlCard(index);
    });
  }
  
  function filterProducts(query) {
    let filteredProducts = products.filter(product =>
      product.Title.toLowerCase().includes(query.toLowerCase()) ||
      product.Description.toLowerCase().includes(query.toLowerCase()) ||
      product.Size.some(size => size.toLowerCase().includes(query.toLowerCase())) ||
      product.Color.some(color => color.toLowerCase().includes(query.toLowerCase()))
    );
  
    renderProducts(filteredProducts);
  }
  
  
  function renderProducts(productsList) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";  
  
    if (productsList.length === 0) {
      productsContainer.innerHTML = "<p>No se encontraron productos.</p>";
    }
  
    productsList.forEach((product, index) => {
      productsContainer.innerHTML += product.htmlCard(index);
    });
  }
  

  document.querySelector("#search-input").addEventListener("input", (event) => {
    filterProducts(event.target.value);
  });
  
 
  document.addEventListener("DOMContentLoaded", function() {
    parseDataToProducts();
  });
  