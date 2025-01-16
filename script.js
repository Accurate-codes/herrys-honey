const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
    
    // Handle menu and scroll-to-top button visibility
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }

    // Close the menu on scroll
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
});

// Menu toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// Scroll Reveal
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

// Scroll-to-top button functionality
const scrollButton = document.querySelector('.scroll');

scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Type effect for dynamic text
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

// Newsletter subscription
function subscribeNewsletter() {
    var email = document.getElementById("newsletter").value;
    if (email) {
        alert("Thank you for subscribing, " + email + "!");
        document.getElementById("newsletter").value = ''; // Clear input after subscription
    } else {
        alert("Please enter a valid email address.");
    }
}

// Get the theme toggle icon and body element
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggleIcon.classList.remove('bx-moon');
    themeToggleIcon.classList.add('bx-sun'); // Change to sun icon
}

// Add event listener for the icon click
themeToggleIcon.addEventListener('click', () => {
    // Check if the body currently has the dark theme
    if (body.hasAttribute('data-theme')) {
        // Switch to light theme
        body.removeAttribute('data-theme');
        themeToggleIcon.classList.remove('bx-sun');
        themeToggleIcon.classList.add('bx-moon'); // Change back to moon icon
        localStorage.setItem('theme', 'light'); // Save light theme preference
    } else {
        // Switch to dark theme
        body.setAttribute('data-theme', 'dark');
        themeToggleIcon.classList.remove('bx-moon');
        themeToggleIcon.classList.add('bx-sun'); // Change to sun icon
        localStorage.setItem('theme', 'dark'); // Save dark theme preference
    }
});


