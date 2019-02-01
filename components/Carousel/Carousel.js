const images = document.querySelectorAll('.image');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let imageIndex = 1;
showImages(imageIndex);

function plusImages(n) {
    showImages(imageIndex += n);
}

function showImages(n) {
    if (n > images.length) {imageIndex = 1}
    if (n < 1) {imageIndex = images.length}
    images.forEach(image => image.classList.remove('active'));
    images[imageIndex-1].classList.add('active');
}

next.addEventListener('click', event => plusImages(-1));
prev.addEventListener('click', event => plusImages(1));