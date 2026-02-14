/* ================= BOOK DATA ================= */
const books = [
    {
        নাম: "কালিন্দীর নৌকা",
        লেখক: "হিমাদ্রিকিশোর দাশগুপ্ত",
        বিবরণ: "ইছামতী নদীর তীরে চণ্ডীদাসের ঘরের এক কোণে পড়ে থাকা এক রহস্যময় কালো পাথরের নারীমূর্তিকে কেন্দ্র করে গল্পের রহস্য দানা বাঁধে।",
        img: "images/kalindi.jpg",
        type: "গল্প",
        rating: 4,
        favorite: false,
        read: false
    },
    {
        name: "B",
        author: "b",
        description: "একটি সুন্দর উপন্যাস।",
        img: "images/maruf.jpg",
        type: "উপন্যাস",
        rating: 5,
        favorite: false,
        read: false
    },
    {
        name: "A",
        author: "a",
        description: "b",
        img: "images/maruf.jpg",
        type: "উপন্যাস",
        rating: 3,
        favorite: false,
        read: false
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
    list.forEach((book, index) => {
        const card = document.createElement("div");
        card.className = "book-card reveal";

        const bookName = book.name || book.নাম || "Unknown";
        const bookAuthor = book.author || book.লেখক || "Unknown";
        const bookDesc = book.description || book.বিবরণ || "No description.";

        // Favorite heart & read status
        const favClass = book.favorite ? "favorite active" : "favorite";
        const readClass = book.read ? "read active" : "read";

        card.innerHTML = `
            <img src="${book.img}" alt="${bookName}" class="book-img">
            <div class="book-content">
                <span class="category-badge">${book.type || "Unknown"}</span>
                <h3 class="book-name">${bookName}</h3>
                <p class="author">${bookAuthor}</p>
                <p class="description">${bookDesc}</p>
                <div class="book-actions">
                    <span class="${favClass}" title="Add to Favorite">❤️</span>
                    <span class="${readClass}" title="Mark as Read">✓</span>
                    <span class="rating">${"★".repeat(book.rating)}${"☆".repeat(5 - book.rating)}</span>
                </div>
                <button>View</button>
            </div>
        `;

        // Favorite toggle
        card.querySelector(".favorite").addEventListener("click", () => {
            book.favorite = !book.favorite;
            renderBooks(list);
        });

        // Read toggle
        card.querySelector(".read").addEventListener("click", () => {
            book.read = !book.read;
            renderBooks(list);
        });

        // Modal
        card.querySelector("button").addEventListener("click", () => openModal(book));

        bookList.appendChild(card);
    });
}

/* ================= FILTER & SEARCH ================= */
function filterBooks() {
    const text = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = books.filter(book => {
        const bookName = (book.name || book.নাম || "").toLowerCase();
        const bookAuthor = (book.author || book.লেখক || "").toLowerCase();
        const bookDesc = (book.description || book.বিবরণ || "").toLowerCase();
        const matchesSearch = bookName.includes(text) || bookAuthor.includes(text) || bookDesc.includes(text);
        const matchesCategory = category === "all" || book.type === category;
        return matchesSearch && matchesCategory;
    });
    renderBooks(filtered);
}

/* ================= SORT ================= */
let asc = true;
sortBtn.addEventListener("click", () => {
    books.sort((a,b) => {
        const nameA = (a.name || a.নাম || "").toLowerCase();
        const nameB = (b.name || b.নাম || "").toLowerCase();
        return asc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    asc = !asc;
    filterBooks();
});

/* ================= MODAL ================= */
function openModal(book){
    modal.style.display = "flex";
    modalContent.querySelector("#modalImg").src = book.img;
    modalContent.querySelector("#modalTitle").innerText = book.name || book.নাম || "Unknown";
    modalContent.querySelector("#modalAuthor").innerHTML = `<strong>Author:</strong> ${book.author || book.লেখক || "Unknown"}`;
    modalContent.querySelector("#modalDesc").innerText = book.description || book.বিবরণ || "No description.";
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
