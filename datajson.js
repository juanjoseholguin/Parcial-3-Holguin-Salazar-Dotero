// Definición de la clase Product
class Product {
    constructor(title, price, description, size, color, disponible, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.size = size;
        this.color = color;
        this.disponible = disponible;
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
                <p>Colors: ${this.color.join(", ")}</p>
                <p>Available: ${this.disponible} units</p>
                <button onclick="addToFavorites(${index})">Add to Favorites</button>
            </div>
        `;
    }
}


let products = [];


async function fetchData() {
    try {
        const response = await fetch('data.json'); 
        const data = await response.json();

        
        if (Array.isArray(data)) {
            
            products = data.map(item => new Product(
                item.Title,
                item.Price,
                item.Description,
                item.Size,
                item.Color,
                item.Disponible,
                item.Image
            ));
            renderAllProducts();
        } else {
            console.error('El formato de los datos no es correcto.');
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}


function renderAllProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; 
    products.forEach((product, index) => {
        productsContainer.innerHTML += product.htmlCard(index);
    });
}


document.addEventListener("DOMContentLoaded", fetchData);
