/* ================= BOOK DATA ================= */
const books = [
    {
        name: "কালিন্দীর নৌকা",
        author: "শীর্ষেন্দু মুখোপাধ্যায়",
        description: "অ্যাডভেঞ্চার ও ভৌতিক গল্প",
        img: "images/kalindi.jpg",
        type: "গল্প"
    },
    {
        name: "B",
        author: "b",
        description: "একটি সুন্দর উপন্যাস।",
        img: "images/maruf.jpg",
        type: "উপন্যাস"
    },
    {
        name: "A",
        author: "a",
        description: "b",
        img: "images/maruf.jpg",
        type: "উপন্যাস"
    }
];

/* ================= DOM ELEMENTS ================= */
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortBtn = document.getElementById("sortBtn");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const scrollTopBtn = document.getElementById("scrollTopBtn");

/* ================= RENDER BOOKS ================= */
function renderBooks(list) {
    bookList.innerHTML = "";
    if(list.length === 0){
        bookList.innerHTML = `<p style="color: var(--text-muted); text-align:center;">No books found.</p>`;
        return;
    }
    list.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card reveal";
        card.innerHTML = `
            <img src="${book.img}" alt="${book.name}" class="book-img">
            <div class="book-content">
                <span class="category-badge">${book.type}</span>
                <h3 class="book-name">${book.name}</h3>
                <p class="author">${book.author}</p>
                <p class="description">${book.description}</p>
                <button>View</button>
            </div>
        `;
        card.querySelector("button").addEventListener("click", () => openModal(book));
        bookList.appendChild(card);
    });
}

/* ================= FILTER & SEARCH ================= */
function filterBooks() {
    const text = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = books.filter(book => {
        const matchesSearch = book.name.toLowerCase().includes(text)
            || book.author.toLowerCase().includes(text)
            || book.description.toLowerCase().includes(text);
        const matchesCategory = category === "all" || book.type === category;
        return matchesSearch && matchesCategory;
    });
    renderBooks(filtered);
}

/* ================= SORT ================= */
let asc = true;
sortBtn.addEventListener("click", () => {
    books.sort((a,b) => asc 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name)
    );
    asc = !asc;
    filterBooks();
});

/* ================= MODAL ================= */
function openModal(book){
    modal.style.display = "flex";
    modalContent.querySelector("#modalImg").src = book.img;
    modalContent.querySelector("#modalTitle").innerText = book.name;
    modalContent.querySelector("#modalAuthor").innerHTML = `<strong>Author:</strong> ${book.author}`;
    modalContent.querySelector("#modalDesc").innerText = book.description;
}
modalContent.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

/* ================= SCROLL TO TOP ================= */
window.addEventListener("scroll", () => {
    if(window.scrollY > 300) scrollTopBtn.style.display = "block";
    else scrollTopBtn.style.display = "none";
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 50) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealOnScroll);

/* ================= INITIAL ================= */
renderBooks(books);
searchInput.addEventListener("input", filterBooks);
categoryFilter.addEventListener("change", filterBooks);
revealOnScroll();
