/* Scroll Reveal */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* Circular Skills */
document.querySelectorAll('.circle').forEach(circle => {
    const target = +circle.dataset.percent;
    const span = circle.querySelector('span');
    let count = 0;

    const timer = setInterval(() => {
        if (count > target) return clearInterval(timer);
        span.textContent = count + '%';
        circle.style.background =
            `conic-gradient(#64ffda ${count * 3.6}deg, #233554 0deg)`;
        count++;
    }, 15);
});

/* Copy Email */
document.querySelectorAll('.copy-email').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.dataset.email);
        alert('Email copied!');
    });
});

/* Smooth scroll ONLY for # links */
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

/* Mobile dropdown click */
const moreBtn = document.querySelector('.more-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

moreBtn.addEventListener('click', e => {
    e.preventDefault();
    dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
