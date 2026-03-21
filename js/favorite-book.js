let container=document.getElementById("bookContainer")

fetch("json/books.json")
.then(res=>res.json())
.then(data=>{

document.getElementById("totalCount").innerText="Total Books: "+data.length

data.forEach(book=>{

let fav=book.favorite?'<div class="book-badge">❤️ Favorite</div>':''

let card=document.createElement("div")
card.className="book-card"
card.setAttribute("data-category",book.category)

card.innerHTML=`

<div class="card-inner">

<img src="${book.img}" class="book-img">

<div class="book-details">

<h2 class="book-name">${book.name}</h2>

<div class="book-info">
<span>লেখক: ${book.author}</span>
<span>টপিক: ${book.topic}</span>
</div>

<div class="book-meta">
<div class="book-rating">${book.rating}</div>
${fav}
</div>

<p class="book-description short">${book.short}</p>
<p class="book-description full">${book.full}</p>

<button class="more-btn">More</button>

</div>
</div>
`

container.appendChild(card)

})

})

// more button
document.addEventListener("click",function(e){

if(e.target.classList.contains("more-btn")){

let card=e.target.parentElement

card.querySelector(".short").style.display="none"
card.querySelector(".full").style.display="block"

e.target.style.display="none"

}

})

// search
document.getElementById("searchInput").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

document.querySelectorAll(".book-card").forEach(card=>{

let text=card.innerText.toLowerCase()

card.style.display=text.includes(value)?"block":"none"

})

})

// category
document.querySelectorAll(".cat-btn").forEach(btn=>{

btn.addEventListener("click",function(){

let cat=this.getAttribute("data-cat")

document.querySelectorAll(".book-card").forEach(card=>{

card.style.display=(cat==="all" || card.getAttribute("data-category")===cat)?"block":"none"

})

})

})

// scroll button
let topBtn=document.getElementById("topBtn")

window.onscroll=function(){

topBtn.style.display=window.scrollY>200?"block":"none"

}

topBtn.onclick=function(){

window.scrollTo({top:0,behavior:"smooth"})

}
