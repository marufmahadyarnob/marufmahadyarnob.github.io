/* ================= BOOK DATA ================= */
const books = [
    {
        name: "A",
        author: "a",
        description: "b",
        img: "images/maruf.jpg"
    },
    {
        name: "B",
        author: "a",
        description: "b",
        img: "images/maruf.jpg"
    },
    // এখানে আরও বই যোগ করতে পারো
];

/* ================= DOM ELEMENTS ================= */
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const typeSelect = document.getElementById("typeSelect");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".close");

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
                <h3 class="book-name">${book.name}</h3>
                <p class="author">Author: ${book.author}</p>
                <p class="description">${book.description}</p>
                <button>View</button>
            </div>
        `;
        // modal open
        card.querySelector("button").addEventListener("click", () => openModal(book));
        bookList.appendChild(card);
    });
}

/* ================= FILTER & SEARCH ================= */
function filterBooks() {
    const searchText = searchInput.value.toLowerCase();
    const typeText = typeSelect.value.toLowerCase();

    const filtered = books.filter(book => {
        const matchesSearch = book.name.toLowerCase().includes(searchText);
        const matchesType = typeText === "all" || book.type === typeText;
        return matchesSearch && matchesType;
    });

    renderBooks(filtered);
}

/* ================= MODAL FUNCTIONS ================= */
function openModal(book) {
    modal.style.display = "flex";
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${book.img}" alt="${book.name}">
        <h2>${book.name}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>${book.description}</p>
    `;
    modal.querySelector(".close").addEventListener("click", closeModal);
}

function closeModal() {
    modal.style.display = "none";
}

/* ================= INITIAL RENDER ================= */
renderBooks(books);

/* ================= EVENT LISTENERS ================= */
searchInput.addEventListener("input", filterBooks);
typeSelect.addEventListener("change", filterBooks);
window.addEventListener("click", e => {
    if(e.target === modal) closeModal();
});

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
