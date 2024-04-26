/*navegação de ícones*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};


/*seções de rolagem*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .orientações-img, .services-container, .formulario-img', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .orientações-container, .orientações-box, #equipe, .expert-container, .contact form, .svg-frame, .cards_wrap, .orientações-text, .formulario-text', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .faca-mais-text, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .faca-mais-img, .wrapper', { origin: 'right' });



const typed = new Typed('.multiple-text',{
    strings: [''],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// contador de visualização 

