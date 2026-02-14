// Expand More button
document.querySelectorAll(".more-btn").forEach(button=>{
button.onclick=function(){
let card=this.parentElement;
card.querySelector(".short").style.display="none";
card.querySelector(".full").style.display="block";
this.style.display="none";
}
});

// Search filter + highlight
document.getElementById("searchInput").addEventListener("keyup",function(){
let value=this.value.toLowerCase();
document.querySelectorAll(".book-card").forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";
});
});

// Scroll top button
let topBtn=document.getElementById("topBtn");
window.onscroll=function(){topBtn.style.display=window.scrollY>200?"block":"none";}
topBtn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"});}

// Total book counter
let count=document.querySelectorAll(".book-card").length;
document.getElementById("totalCount").innerText="Total Books: "+count;

// Category filter
document.querySelectorAll(".cat-btn").forEach(btn=>{
btn.onclick=function(){
let cat=this.getAttribute("data-cat");
document.querySelectorAll(".book-card").forEach(card=>{
card.style.display=(cat==="all" || card.getAttribute("data-category")===cat)?"block":"none";
});
});
});
