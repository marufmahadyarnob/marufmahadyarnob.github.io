// ===== Typewriter effect =====
const words = ["Civil Engineer", "Graphic Designer", "Web Learner"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typewriter = document.getElementById('typewriter');

function type(){
    if(i >= words.length) i = 0;
    const fullWord = words[i];
    if(isDeleting){
        currentWord = fullWord.substring(0, currentWord.length-1);
    } else {
        currentWord = fullWord.substring(0, currentWord.length+1);
    }
    typewriter.textContent = currentWord;
    if(!isDeleting && currentWord === fullWord){
        setTimeout(()=>isDeleting=true,1000);
    } else if(isDeleting && currentWord === ''){
        isDeleting=false;
        i++;
    }
    setTimeout(type,isDeleting?50:120);
}
type();

// ===== Scroll Reveal =====
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
    for(let r of reveals){
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;
        if(elementTop < windowHeight - 50){
            r.classList.add('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Circular Skill Progress =====
const circles = document.querySelectorAll('.circle');
circles.forEach(circle=>{
    const percent = circle.dataset.percent;
    const span = circle.querySelector('span');
    let current = 0;
    const interval = setInterval(()=>{
        if(current>=percent) clearInterval(interval);
        span.textContent = current+'%';
        circle.style.setProperty('--deg', ${(current/100)*360}deg);
        circle.querySelector('::after'); // handled via CSS rotation animation
        current++;
    },15);
});

// ===== Modal for Projects =====
const modalTriggers = document.querySelectorAll('.project');
const modals = document.querySelectorAll('.modal');
modalTriggers.forEach(trigger=>{
    trigger.addEventListener('click', ()=>{
        const modal = document.getElementById(trigger.dataset.modal);
        modal.style.display='flex';
    });
});
modals.forEach(modal=>{
    modal.querySelector('.close').addEventListener('click', ()=>{
        modal.style.display='none';
    });
});
window.addEventListener('click', e=>{
    if(e.target.classList.contains('modal')){
        e.target.style.display='none';
    }
});

// ===== Copy Email =====
document.querySelectorAll('.copy-email').forEach(el=>{
    el.addEventListener('click', ()=>{
        navigator.clipboard.writeText(el.dataset.email);
        alert('Email copied to clipboard!');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('.navbar a').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});
