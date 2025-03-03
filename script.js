// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearBtn = document.getElementById("clear-cart-btn");

document.addEventListener("DOMContentLoaded",()=>{
	products.forEach((product)=>{
		const li=document.createElement("li");
		li.textContent=`${product.name} - ${product.price} `;
		const addToCartBtn=document.createElement("button");
		addToCartBtn.textContent="Add To Cart";
		li.appendChild(addToCartBtn);
		addToCartBtn.addEventListener("click", ()=>{
			addToCart(product)
		})
		productList.appendChild(li);
	})
})

// Add item to cart
function addToCart(productId) {
	let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
	cart.push(productId);
	sessionStorage.setItem("cart", JSON.stringify(cart));
	renderCart(productId);
}


// Render cart list
function renderCart() {
	let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
	cartList.innerHTML="";
	cart.forEach((item)=>{
		const li=document.createElement("li");
		li.innerText=`${item.id} ${item.name} - ${item.price}`;
		cartList.appendChild(li);
	})
}


// Clear cart
clearBtn.addEventListener("click", clearCart)
function clearCart() {
	sessionStorage.removeItem("cart");
	renderCart();
}

renderCart();
// /////////////////////////////////////////////////////////////
// // Render product list
// function renderProducts() {
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${product.name} - $${product.price}
// 	<button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
// 	const AddItemToCart=document.getElementByClassName("add-to-cart-btn");
// 	AddItemToCart.addEventListener("click",()=>{
// 		addToCart(product)
// 	})
// 	productList.appendChild(li);
//   });
// }

// // Render cart list
// function renderCart() {
// 	let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
// 	cartList.innerHTML="";
// 	cart.forEach((item)=>{
// 		const li=document.createElement("li");
// 		li.innerText=`${item.name} - ${item.price}`;
// 		cartList.appendChild(li);
// 	})
// }

// // Add item to cart
// function addToCart(productId) {
// 	let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
// 	cart.push(productId);
// 	sessionStorage.setItem("cart", JSON.stringify(cart));
// 	renderCart(productId);
// }

// // Remove item from cart
// function removeFromCart(productId) {
// 	sessionStorage.removeItem("cart");
// 	renderCart();
// }

// // Clear cart
// function clearCart() {}

// // Initial render
// renderProducts();
// renderCart();
