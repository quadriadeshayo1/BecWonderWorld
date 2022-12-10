const showMenu =document.querySelector('.nav__menu');
document.querySelector('.nav__toggle').addEventListener('click', function(){
    showMenu.classList.toggle('show')
});

// nav movement
function scrollheader(){
    if(window.scrollY > 100){
        document.querySelector('.header').classList.add('fixed');  //.header.fixed
    }else{
        document.querySelector('.header').classList.remove('fixed');
    }
}
window.addEventListener("scroll",scrollheader);

// remove mobile menu
const navLink =document.querySelectorAll('.nav__item');

function linkAction(){
    const navMenu =document.getElementById('nav-menu');
    navMenu.classList.remove('show');  //when we click on each nav__link remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));