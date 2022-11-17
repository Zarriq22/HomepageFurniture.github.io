const popup = document.querySelector(".popup");
const sub = document.querySelector(".subPopup");

const regis = document.querySelectorAll(".regis");
const close = document.querySelector(".close");
const pesan = document.querySelector(".order");
const keluar = document.querySelector(".btn");
const navbar = document.querySelector('.humburger');
const back = document.querySelector('.silang');
const menu = document.querySelector('.menu');



for (let i = 0; i < regis.length; i++) {
    regis[i].addEventListener('click', function (){
        popup.classList.remove('hidden')
    });
};

close.addEventListener('click', function (){
    popup.classList.add('hidden')
});

pesan.addEventListener('click', function (){
    popup.classList.add('hidden')
});

pesan.addEventListener('click', function (){
    sub.classList.remove('hidden')
});

navbar.addEventListener('click', function (){
    menu.classList.toggle('hidden')
    back.classList.toggle('hidden')
})

navbar.addEventListener('click', function (){
    navbar.classList.remove('hidden')
})

back.addEventListener('click', function (){
    menu.classList.add('hidden')
    navbar.classList.toggle('hidden')
})

