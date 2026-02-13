/* ===== Scroll Reveal Animation ===== */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ===== Circular Skill Animation ===== */
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

/* ===== Copy Email ===== */
document.querySelectorAll('.copy-email').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.dataset.email);
        alert('Email copied!');
    });
});

/* ===== Smooth Navbar Scroll ===== */
document.querySelectorAll('.navbar a').forEach(link => {
    const href = link.getAttribute('href');

    // শুধু internal scroll link (# দিয়ে শুরু) এর জন্য preventDefault
    if (href.startsWith('#')) {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        });
    }
});
