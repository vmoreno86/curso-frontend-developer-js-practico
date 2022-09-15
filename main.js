const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoopingCartContainer = document.querySelector("#shoopingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const darken = document.querySelector('.darken');

menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


function toogleDesktopMenu() {
  const isAsideClosed = shoopingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoopingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
  const isMenuOpen = !desktopMenu.classList.contains('inactive');

  if(isMenuOpen)
      darken.classList.remove('inactive');
  else
      darken.classList.add('inactive');
}

function toogleMobileMenu() {
  const isProductDetailContainerOpen =
    shoopingCartContainer.classList.contains("inactive");

  if (!isProductDetailContainerOpen) {
    shoopingCartContainer.classList.add("inactive");
  }
  //si tenemos abierto un product detail, lo cerramos
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoAside() {
  //si tenemos abierto menu mobile, cerrar
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  //si tenemos abierto un product detail, lo cerramos
  const isProductDetailContainer =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailContainer) {
    productDetailContainer.classList.add("inactive");
  }

  shoopingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  //siempre que abro, cierro todo lo otro
  shoopingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}
const productsList = [];
productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_960_720.png",
});

productsList.push({
  name: "Laptop",
  price: 1050,
  image:
    "https://static9.depositphotos.com/1682899/1155/i/600/depositphotos_11557809-stock-photo-laptop.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
  name: "Patinete",
  price: 80,
  image:
    "https://st3.depositphotos.com/3332767/13005/i/600/depositphotos_130057840-stock-photo-blue-scooter-isolated.jpg",
});

function renderProducts(arr) {
  // <!-- <div class="product-card">
  // <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  // <div class="product-info">
  //   <div>
  //     <p>$120,00</p>
  //     <p>Bike</p>
  //   </div>
  //   <figure>
  //     <img src="./icons/bt_add_to_cart.svg" alt="">
  //   </figure>
  // </div>
  // </div> -->
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    // añadimos eventlistener on clic
    productImg.addEventListener("click", openProductDetailAside);

    //product es oigual a {name,price,image}
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}

renderProducts(productsList);
