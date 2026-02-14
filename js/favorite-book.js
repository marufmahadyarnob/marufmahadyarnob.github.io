let books = JSON.parse(localStorage.getItem("books")) || [

{

name:"কালিন্দীর নৌকা",

author:"হিমাদ্রি",

description:"রহস্যময় গল্প",

img:"images/kalindi.jpg",

type:"গল্প",

rating:5,

favorite:false,

read:false

}

];



const bookList=document.getElementById("bookList");



function save(){

localStorage.setItem("books",JSON.stringify(books));

}



function render(list){

bookList.innerHTML="";


list.forEach((book,i)=>{


bookList.innerHTML+=`


<div class="book-card">


<img src="${book.img}" class="book-img">


<div>


<span class="category-badge">${book.type}</span>


<h3 class="book-name">${book.name}</h3>


<p class="author">${book.author}</p>


<p class="description">${book.description}</p>


<div>


<span onclick="fav(${i})" class="favorite ${book.favorite?"active":""}">❤️</span>


<span onclick="read(${i})" class="read ${book.read?"active":""}">✔</span>


<span class="rating">${"★".repeat(book.rating)}</span>


</div>


<button onclick="view(${i})">View</button>


</div>


</div>


`;


});


}



function fav(i){

books[i].favorite=!books[i].favorite;

save();

render(books);

}



function read(i){

books[i].read=!books[i].read;

save();

render(books);

}



function view(i){

modal.style.display="flex";

modalImg.src=books[i].img;

modalTitle.innerText=books[i].name;

modalAuthor.innerText=books[i].author;

modalDesc.innerText=books[i].description;

}



addBookBtn.onclick=()=>{


let name=prompt("Book name");


if(!name)return;


books.push({

name,

author:"Unknown",

description:"",

img:"images/maruf.jpg",

type:"উপন্যাস",

rating:5,

favorite:false,

read:false

});


save();

render(books);


};



render(books);
