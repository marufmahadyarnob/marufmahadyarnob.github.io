// ===== Scroll Reveal =====
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    for (let r of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            r.classList.add('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Circular Skill Progress =====
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    const percent = circle.dataset.percent;
    const span = circle.querySelector('span');
    let current = 0;
    const interval = setInterval(() => {
        if (current >= percent) clearInterval(interval);
        span.textContent = current + '%';
        circle.style.setProperty('--deg', (current / 100) * 360 + 'deg');
        circle.querySelector('::after');
        // Update conic-gradient dynamically
        circle.style.background = `conic-gradient(#64ffda 0deg ${(current / 100) * 360}deg, #233554 ${(current / 100) * 360}deg 360deg)`;
        current++;
    }, 15);
});

// ===== Modal for Projects (Smooth) =====
const modalTriggers = document.querySelectorAll('.project');
modalTriggers.forEach(trigger => {
    const modal = document.getElementById(trigger.dataset.modal);
    trigger.addEventListener('click', () => {
        modal.classList.add('show');
    });
});

const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    modal.querySelector('.close').addEventListener('click', () => {
        modal.classList.remove('show');
    });
});

// ===== Click outside modal to close =====
window.addEventListener('click', e => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});

// ===== Copy Email =====
document.querySelectorAll('.copy-email').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.dataset.email);
        alert('Email copied to clipboard!');
    });
});

// ===== Smooth Scroll for Navbar =====
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
