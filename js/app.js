const images = [
    "./img/ali/img.jpg",
    "./img/negin/negin.jpg",
    "./img/abbas/abbas-kot.jpg"
];

let currentIndex = 0;
const sliderImage = document.querySelector('.slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}, 5000);
