const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');   
};




const sr = ScrollReveal({
    reset: true  
  });

  const revealElements = [
    { selector: '.home-text', delay: 300 },
    { selector: '.home-img', delay: 500 },
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
  