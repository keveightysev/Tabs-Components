const images = document.querySelectorAll('.image');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i = 0;
    if (n > images.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = images.length
    }
    images.forEach(image => image.style.display = "none");
    images[slideIndex-1].style.display = "block";
}


next.addEventListener('click', event => plusSlides(-1));
prev.addEventListener('click', event => plusSlides(1));