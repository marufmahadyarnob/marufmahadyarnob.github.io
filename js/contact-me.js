// Typing animation
new Typed(".typing",{
    strings:[
        "Assistant Teacher",
        "Savar Model Academy",
        "Web Designer",
        "Contact Me Anytime"
    ],
    typeSpeed:60,
    backSpeed:40,
    loop:true
});

// Particles - small slow dots
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 2 },
        color: { value: "#00ffff" },
        line_linked: {
            enable: true,
            color: "#00ffff",
            opacity:0.2
        },
        move: { speed: 0.8 }
    },
    interactivity:{
        detect_on:"canvas",
        events:{
            onhover:{ enable:true, mode:"repulse" }
        }
    }
});
