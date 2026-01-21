/* ========= SCROLL REVEAL ========= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {
            el.classList.add("active");
        }
    });
});

/* ========= RIPPLE EFFECT ========= */
document.querySelectorAll(".skill, .project, .card").forEach(btn => {
    btn.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

/* ========= PROGRESS ANIMATION ========= */
window.addEventListener("load", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.getAttribute("style").replace("--width:", "");
    });
});
