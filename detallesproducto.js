const params = new URLSearchParams(window.location.search);
const namefromUrl = params.get('name');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function getProduct(name) {
  for (let i = 0; i < data.length; i++) {
    let map = data[i];
    if (map["Title"] === name) {
      let product = new Product(map["Title"], map["Price"], map["Description"], map["Size"], map["Color"], map["Image"], map["CategoryName"]);
      return product;
    }
  }
  return null;
}

function renderProduct() {
  let productt = getProduct(namefromUrl);

  if (productt) {
    document.getElementById("title").innerHTML = productt.Title;
    document.getElementById("Price").innerHTML = `$${productt.Price} USD`;
    document.getElementById("Description").innerHTML = productt.Description;
    document.getElementById("main-img").src = productt.Image;

    // Actualiza el ícono de favorito en la página de detalles
    const heartIcon = document.getElementById("heart-icon");
    if (favorites.includes(productt.Title)) {
      heartIcon.classList.add("favorite");
    }
    heartIcon.addEventListener("click", () => toggleFavorite(productt.Title, heartIcon));
  } else {
    console.log("Product not found");
  }
}

function toggleFavorite(productTitle, iconElement) {
  if (favorites.includes(productTitle)) {
    favorites = favorites.filter(title => title !== productTitle);
    iconElement.classList.remove("favorite");
  } else {
    favorites.push(productTitle);
    iconElement.classList.add("favorite");
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

window.onload = renderProduct;



