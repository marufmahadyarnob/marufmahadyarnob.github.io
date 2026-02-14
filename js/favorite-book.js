// More button expand
document.querySelectorAll(".more-btn").forEach(button=>{
button.addEventListener("click",function(){
let card=this.parentElement;
card.querySelector(".short").style.display="none";
card.querySelector(".full").style.display="block";
this.style.display="none";
});
});

// Search filter
document.getElementById("searchInput").addEventListener("keyup",function(){
let value=this.value.toLowerCase();
document.querySelectorAll(".book-card").forEach(card=>{
let text=card.innerText.toLowerCase();
card.style.display=text.includes(value)?"block":"none";
});
});

// Scroll top button
let topBtn=document.getElementById("topBtn");
window.onscroll=function(){topBtn.style.display=window.scrollY>200?"block":"none";}
topBtn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"});}

// Total book counter
let totalCount=document.querySelectorAll(".book-card").length;
document.getElementById("totalCount").innerText="Total Books: "+totalCount;

// Category filter
document.querySelectorAll(".cat-btn").forEach(btn=>{
btn.addEventListener("click",function(){
let cat=this.getAttribute("data-cat");
document.querySelectorAll(".book-card").forEach(card=>{
card.style.display=(cat==="all" || card.getAttribute("data-category")===cat)?"block":"none";
});
});
});
