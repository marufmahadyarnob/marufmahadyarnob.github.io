// ================================
// CONFIG
// ================================
const JSON_FILE = "/data/graphics.json";
const WHATSAPP_PHONE = "8801777205950";

// ================================
// DOM ELEMENTS
// ================================
const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// ================================
// STATE
// ================================
let allDesigns = [];
let currentFilter = "all";
let currentSearch = "";

// ================================
// LOAD JSON DATA
// ================================
async function loadGraphics() {
  try {
    const response = await fetch(JSON_FILE);

    if (!response.ok) {
      throw new Error("Failed to load graphics.json");
    }

    allDesigns = await response.json();
    renderGallery();
  } catch (error) {
    console.error("Error loading JSON:", error);
    gallery.innerHTML = `
      <p style="color: white; text-align: center; width: 100%; font-size: 18px;">
        Failed to load graphics data.
      </p>
    `;
  }
}

// ================================
// RENDER GALLERY
// ================================
function renderGallery() {
  gallery.innerHTML = "";

  const filteredDesigns = allDesigns.filter(item => {
    const matchesFilter =
      currentFilter === "all" || item.category === currentFilter;

    const matchesSearch =
      item.title.toLowerCase().includes(currentSearch.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (filteredDesigns.length === 0) {
    gallery.innerHTML = `
      <p style="color: white; text-align: center; width: 100%; font-size: 18px;">
        No designs found.
      </p>
    `;
    return;
  }

  filteredDesigns.forEach(item => {
    const card = document.createElement("div");
    card.className = `card ${item.category}`;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="overlay">
        <h3>${item.title}</h3>
        <button class="order-btn">Order Now</button>
      </div>
    `;

    // Lightbox click on image
    const img = card.querySelector("img");
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    });

    // WhatsApp order button
    const orderBtn = card.querySelector(".order-btn");
    orderBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      const message = `Hello! I want to order: ${item.title}`;
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });

    gallery.appendChild(card);
  });
}

// ================================
// FILTER SYSTEM
// ================================
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    currentFilter = btn.getAttribute("data-filter");
    renderGallery();
  });
});

// ================================
// SEARCH SYSTEM
// ================================
searchInput.addEventListener("keyup", () => {
  currentSearch = searchInput.value.trim();
  renderGallery();
});

// ================================
// LIGHTBOX CLOSE
// ================================
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

// Optional: click outside image to close
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Optional: ESC key to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});

// ================================
// PARTICLES (if used in your CSS/page)
// ================================
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

// ================================
// INIT
// ================================
loadGraphics();
