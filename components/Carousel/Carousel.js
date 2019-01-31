class Image {
    constructor(image) {
        this.image = image;
    }
    
}

const images = document.querySelectorAll('.item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev')
images.forEach(image => new Image(image));