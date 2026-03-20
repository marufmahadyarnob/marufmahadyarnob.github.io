// FILTER SYSTEM

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn => {

btn.addEventListener("click", () => {

document.querySelector(".active").classList.remove("active");
btn.classList.add("active");

let filter = btn.getAttribute("data-filter");

cards.forEach(card => {

if(filter === "all"){
card.style.display = "block";
}
else{
if(card.classList.contains(filter)){
card.style.display = "block";
}
else{
card.style.display = "none";
}
}

});

});

});


// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".card img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

closeBtn.onclick = () => {
lightbox.style.display = "none";
};


// ✅ WHATSAPP ORDER SYSTEM

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(btn => {

btn.addEventListener("click", (e) => {

e.stopPropagation();

let card = btn.closest(".card");
let title = card.querySelector("h3").innerText;

// 👉 এখানে WhatsApp নাম্বার 
let phone = "8801777205950";

let message = `Hello! I want to order: ${title}`;

let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

});

});


// ✅ SEARCH SYSTEM

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

let value = searchInput.value.toLowerCase();

cards.forEach(card => {

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});
