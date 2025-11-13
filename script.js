const carrossel = document.querySelector('.carrossel');
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    index = i;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    showSlide(index + 1);
}, 3000);
