const modalContainer = document.querySelector('.modal-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');

const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');

const easterEgg = document.getElementById('easter-egg');

window.onload = function(){
    if (window.innerWidth <= 800){
        nav.style.display = 'none';
        burger.style.display = 'flex';
        burger.style.opacity = '1';
    }
    else{
        nav.style.display = 'flex';
        burger.style.display = 'none';
        nav.style.animation = 'none';
        nav.style.opacity = '1';
        nav.classList.remove('burger-menu');
    }
};
    
window.onresize = function(){
    if (window.innerWidth <= 800){
        nav.style.display = 'none';
        burger.style.display = 'flex';
        burger.style.opacity = '1';
    }
    else{
        nav.style.display = 'flex';
        burger.style.display = 'none';
        nav.style.animation = 'none';
        nav.style.opacity = '1';
        nav.classList.remove('burger-menu');
    }
};

burger.addEventListener('click', function(){
    if (nav.className == 'burger-menu'){
        nav.style.animation = 'reverse_burger_anim 0.4s ease 0s 1 normal forwards';
        setTimeout(function(){
            nav.style.display = 'none';
            nav.classList.toggle('burger-menu');
        }, 400);
    }
    else{
        nav.style.display = 'flex';
        nav.style.animation = 'burger_anim 0.4s ease 0s 1 normal forwards';
        nav.classList.toggle('burger-menu');
    }
});

modalTriggers.forEach(trigger => trigger.addEventListener('click', toggleModal))

function toggleModal(){
    modalContainer.classList.toggle('active');
};

easterEgg.addEventListener('click', function(){
    const song = new Audio('songs/concombre.mp3');
    song.play();
});