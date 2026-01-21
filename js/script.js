// Typewriter effect
const words = ["Civil Engineer", "Graphic Designer", "Web Learner"];
let i=0, currentWord='', isDeleting=false;
const typewriter = document.getElementById('typewriter');
function type(){
    if(i>=words.length) i=0;
    const fullWord = words[i];
    if(isDeleting){ currentWord=fullWord.substring(0,currentWord.length-1); }
    else { currentWord=fullWord.substring(0,currentWord.length+1); }
    typewriter.textContent=currentWord;
    if(!isDeleting && currentWord===fullWord){setTimeout(()=>isDeleting=true,1000);}
    else if(isDeleting && currentWord===''){isDeleting=false;i++;}
    setTimeout(type,isDeleting?50:120);
}
type();

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
    for(let r of reveals){
        const top=r.getBoundingClientRect().top;
        if(top<window.innerHeight-50){ r.classList.add('active'); }
    }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Modal Projects
const modalTriggers=document.querySelectorAll('.project');
const modals=document.querySelectorAll('.modal');
modalTriggers.forEach(trigger=>{
    trigger.addEventListener('click',()=>{
        document.getElementById(trigger.dataset.modal).style.display='flex';
    });
});
modals.forEach(modal=>{
    modal.querySelector('.close').addEventListener('click',()=>{modal.style.display='none';});
});
window.addEventListener('click',e=>{
    if(e.target.classList.contains('modal')) e.target.style.display='none';
});

// Copy Email
document.querySelectorAll('.copy-email').forEach(el=>{
    el.addEventListener('click',()=>{navigator.clipboard.writeText(el.dataset.email);alert('Email copied!');});
});

// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Circular Skills Animation
const circles = document.querySelectorAll('.circle');
circles.forEach(circle=>{
    const percent=parseInt(circle.dataset.percent);
    let current=0;
    const span=circle.querySelector('span');
    const interval=setInterval(()=>{
        if(current>percent){ clearInterval(interval); return; }
        span.textContent=current+'%';
        circle.style.background=`conic-gradient(#64ffda ${current*3.6}deg, #233554 0deg)`;
        current++;
    },15);
});
