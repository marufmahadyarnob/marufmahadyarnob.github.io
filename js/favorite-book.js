import { db, collection, getDocs } from "./firebase.js";

const container = document.getElementById("bookContainer");
const topBtn = document.getElementById("topBtn");

async function loadBooks() {

  try {

    const querySnapshot = await getDocs(collection(db, "books"));

    let data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    console.log("Books loaded:", data);

    const totalCount = document.getElementById("totalCount");
    if (totalCount) {
      totalCount.innerText = "Total Books: " + data.length;
    }

    if (!container) {
      console.error("bookContainer not found in HTML");
      return;
    }

    container.innerHTML = "";

    data.forEach(book => {

      let fav = book.favorite
        ? '<div class="book-badge">❤️ Favorite</div>'
        : '';

      let card = document.createElement("div");

      card.className = "book-card";
      card.setAttribute("data-category", book.category);

      card.innerHTML = `
        <div class="card-inner">

          <img src="${book.image}" class="book-img">

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
            <p class="book-description full" style="display:none">${book.full}</p>

            <button class="more-btn">More</button>

          </div>
        </div>
      `;

      container.appendChild(card);

    });

  } catch (error) {
    console.error("Error loading books:", error);
  }
}

loadBooks();


// 🔥 MORE BUTTON
document.addEventListener("click", function (e) {

  if (e.target.classList.contains("more-btn")) {

    let card = e.target.closest(".book-card");

    if (!card) return;

    card.querySelector(".short").style.display = "none";
    card.querySelector(".full").style.display = "block";

    e.target.style.display = "none";
  }

});


// 🔍 SEARCH (SAFE)
const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    document.querySelectorAll(".book-card").forEach(card => {

      let text = card.innerText.toLowerCase();

      card.style.display = text.includes(value) ? "block" : "none";

    });

  });

}


// 📂 CATEGORY FILTER (SAFE)
const catBtns = document.querySelectorAll(".cat-btn");

if (catBtns.length) {

  catBtns.forEach(btn => {

    btn.addEventListener("click", function () {

      let cat = this.getAttribute("data-cat");

      document.querySelectorAll(".book-card").forEach(card => {

        card.style.display =
          (cat === "all" || card.getAttribute("data-category") === cat)
            ? "block"
            : "none";

      });

    });

  });

}


// ⬆️ SCROLL TO TOP (SAFE)
if (topBtn) {

  window.addEventListener("scroll", function () {

    topBtn.style.display = window.scrollY > 200 ? "block" : "none";

  });

  topBtn.addEventListener("click", function () {

    window.scrollTo({ top: 0, behavior: "smooth" });

  });

}
