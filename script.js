const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
    

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }


    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    reset: true  
});

const revealElements = [
    { selector: '.home-text', delay: 300 },
    { selector: '.home-img', delay: 400 },
    { selector: '.container', delay: 300 },
    { selector: '.about-img', delay: 0 },
    { selector: '.about-text', delay: 300 },
    { selector: '.middle-text', delay: 0 },
    { selector: '.row-btn, .shop-content', delay: 300 },
    { selector: '.review-content, .contact', delay: 300 }
];

revealElements.forEach(item => {
    sr.reveal(item.selector, { delay: item.delay });
});


const scrollButton = document.querySelector('.scroll');

scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const dynamicText = document.querySelector("h1 span");
const words = ["NATURAL", "EARTH'S", "THE FUTURE", "NATURE'S"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
};

typeEffect();


function subscribeNewsletter() {
    var email = document.getElementById("newsletter").value;
    if (email) {
        alert("Thank you for subscribing, " + email + "!");
        document.getElementById("newsletter").value = '';
    } else {
        alert("Please enter a valid email address.");
    }
}


const themeToggleIcon = document.getElementById('theme-toggle-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggleIcon.classList.remove('bx-moon');
    themeToggleIcon.classList.add('bx-sun');
}


themeToggleIcon.addEventListener('click', () => {
   
    if (body.hasAttribute('data-theme')) {
     
        body.removeAttribute('data-theme');
        themeToggleIcon.classList.remove('bx-sun');
        themeToggleIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    } else {
        
        body.setAttribute('data-theme', 'dark');
        themeToggleIcon.classList.remove('bx-moon');
        themeToggleIcon.classList.add('bx-sun'); 
        localStorage.setItem('theme', 'dark'); 
    }
});


