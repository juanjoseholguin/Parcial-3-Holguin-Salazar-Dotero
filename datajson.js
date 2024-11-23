
import { data } from './datajs'; 

class Product {
    constructor(title, price, description, size, color, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.size = size;
        this.color = color;
        this.image = image;
    }

    htmlCard(index) {
        return `
            <div class="product-card">
                <img src="${this.image}" alt="${this.title}">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <p>Price: $${this.price}</p>
                <p>Available Sizes: ${this.size.join(", ")}</p>
                <button onclick="addToFavorites(${index})">Add to Favorites</button>
            </div>
        `;
    }
}

let products = [];

function parseDataToProducts() {
    if (data && Array.isArray(data)) {
        products = data.map(item => new Product(
            item.Title,
            item.Price,
            item.Description,
            item.Size,
            item.Color,
            item.Image
        ));
        renderAllProducts();
    } else {
        console.error('No se pudo cargar los datos correctamente.');
    }
}

function renderAllProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    products.forEach((product, index) => {
        productsContainer.innerHTML += product.htmlCard(index);
    });
}

document.addEventListener("DOMContentLoaded", parseDataToProducts);
