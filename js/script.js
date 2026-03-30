 /* ===== More Button Hover ===== */
 // Wait for DOM
    document.addEventListener('DOMContentLoaded', function() {
        const moreBtn = document.getElementById('more-btn');
        const moreMenu = document.getElementById('more-menu');

        // Toggle dropdown on click
        moreBtn.addEventListener('click', function(e) {
            e.preventDefault(); // prevent page jump
            moreMenu.style.display = (moreMenu.style.display === 'block') ? 'none' : 'block';
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', function(e) {
            if (!moreBtn.contains(e.target) && !moreMenu.contains(e.target)) {
                moreMenu.style.display = 'none';
            }
        });
    });

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
const counter = document.getElementById("visitor-count");

fetch("https://api.countapi.xyz/hit/marufmahadyarnob.github.io/portfolio")
.then(response => response.json())
.then(data => {
    counter.innerText = data.value;
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

// ===== সেন্ড মেসেজ সেকশন =====

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            status.textContent = "✅ Message sent successfully!";
            status.className = "success";
            form.reset();
        } else {
            status.textContent = "❌ Oops! Something went wrong.";
            status.className = "error";
        }
    } catch (error) {
        status.textContent = "⚠ Network error. Try again.";
        status.className = "error";
    }
});

//======================প্রজেক্ট সেকশন==========================//

document.getElementById("onePageWebsite").onclick = () => {
    window.location.href = "/onepageweb/index.html";
};

document.getElementById("graphicsdesign").onclick = () => {
    window.location.href = "/graphics/index.html";
};
