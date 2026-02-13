function filterBooks() {
    let search = document.getElementById("searchInput").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let cards = document.querySelectorAll(".book-card");

    cards.forEach(card => {
        let author = card.querySelector(".author").innerText.toLowerCase();
        let cardCategory = card.getAttribute("data-category");

        let matchAuthor = author.includes(search);
        let matchCategory = (category === "all" || category === cardCategory);

        card.style.display = (matchAuthor && matchCategory) ? "flex" : "none";
    });
}

function sortBooks() {
    let list = document.getElementById("bookList");
    let cards = Array.from(list.children);

    cards.sort((a, b) => {
        let nameA = a.querySelector(".book-name").innerText.toLowerCase();
        let nameB = b.querySelector(".book-name").innerText.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    cards.forEach(card => list.appendChild(card));
}

function openModal(btn) {
    let card = btn.closest(".book-card");

    document.getElementById("modalImg").src = card.querySelector("img").src;
    document.getElementById("modalTitle").innerText = card.querySelector(".book-name").innerText;
    document.getElementById("modalAuthor").innerText = card.querySelector(".author").innerText;
    document.getElementById("modalDesc").innerText = card.querySelector(".description").innerText;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
