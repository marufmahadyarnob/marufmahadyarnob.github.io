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

// ===== Visitor Counter with smooth animation =====
fetch("https://api.countapi.xyz/hit/marufmahadyarnob.github.io/visits")
.then(response => response.json())
.then(data => {
    const countElement = document.getElementById("visitor-count");
    let start = 0;
    const end = data.value;
    const duration = 1500; // animation duration in ms
    const stepTime = Math.max(Math.floor(duration / end), 20);

    let counter = setInterval(() => {
        start++;
        countElement.textContent = start;

        // Confetti sparkle on milestone (every 1000 visitors)
        if(start % 1000 === 0 && start !== 0){
            createConfetti();
        }

        if(start >= end){
            clearInterval(counter);
        }
    }, stepTime);
});

// ===== Confetti function =====
function createConfetti(){
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-20px";
    confetti.style.width = confetti.style.height = Math.random() * 10 + 5 + "px";
    confetti.style.background = "#00b4d8";
    confetti.style.opacity = Math.random();
    confetti.style.position = "absolute";
    confetti.style.borderRadius = "50%";
    document.body.appendChild(confetti);

    let fall = setInterval(() => {
        confetti.style.top = (parseInt(confetti.style.top) + 5) + "px";
        if(parseInt(confetti.style.top) > window.innerHeight){
            confetti.remove();
            clearInterval(fall);
        }
    }, 20);
}
