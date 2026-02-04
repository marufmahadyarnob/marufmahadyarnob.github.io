/* ===== Scroll Reveal ===== */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ===== Smooth Scroll (ONLY internal links) ===== */
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

/* ===== Dropdown Click Toggle (Mobile support) ===== */
const toggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');

toggle.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.toggle('show');
});

document.addEventListener('click', () => {
    menu.classList.remove('show');
});
