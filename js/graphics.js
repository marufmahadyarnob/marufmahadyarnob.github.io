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