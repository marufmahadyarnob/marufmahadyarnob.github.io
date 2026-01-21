const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

// Scroll করলে animation
window.addEventListener("scroll", revealOnScroll);

// Page load হলেই প্রথম অংশ দেখাবে 🔥
window.addEventListener("load", revealOnScroll);
