//Selectors
var btns = document.getElementsByClassName('carousel-btn');
var cards = document.getElementsByClassName('card slide');
var faqs = document.getElementsByClassName('faq-li');
var burger = document.getElementById('burger');
var mobileNav = document.getElementById('mobile-nav');
var mobileClose = document.getElementById('mobile-close');
var form = document.getElementById('form');
var email = document.getElementById('email');

//Eventlisteners
document.addEventListener('DOMContentLoaded', addCardListeners);
document.addEventListener('DOMContentLoaded', addListListeners);
burger.addEventListener('click', toggleMob);
mobileClose.addEventListener('click', toggleMob);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

//Functions
function addCardListeners(){
    for (let i = 0; i < 3; i++) {
        btns[i].addEventListener('click', function() {toggle(i)});
    }
}

function addListListeners(){
    for (let i = 0; i < 4; i++) {
        faqs[i].addEventListener('click', function() {toggleFaq(faqs[i])});
    }
}

function toggle(n) {
    for (let i = 0; i < 3; i++) {
        if (n === i) {
            cards[i].classList.add('visible');
            btns[i].classList.add('pressed');
        }
        else {
            cards[i].classList.remove('visible');
            btns[i].classList.remove('pressed');
        }
    }
}

function toggleFaq(faq){
    var par = faq.querySelector("p");
    var i = faq.querySelector("i");
    par.classList.toggle("visible");
    i.classList.toggle("rotate");
}

function toggleMob(){
    mobileNav.classList.toggle('hide');
    burger.classList.toggle('hide');
}

function checkInput() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        const formControl = email.parentElement;
        const img = formControl.querySelector('img');
        img.classList.remove('hide');
        const input = formControl.querySelector('input');
        input.classList.add('red-border');
        const em = formControl.querySelector('em');
        em.classList.remove('hide');
    }
    else {
        const formControl = email.parentElement;
        const img = formControl.querySelector('img');
        img.classList.add('hide');
        const input = formControl.querySelector('input');
        input.classList.remove('red-border');
        const em = formControl.querySelector('em');
        em.classList.add('hide');
    }
}