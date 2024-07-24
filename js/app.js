const slides = [
    { image: "./img/ali/img.jpg", link: "./html/ali.html" },
    { image: "./img/negin/negin.jpg", link: "./html/negin.html" },
    { image: "./img/abbas/abbas-kot.jpg", link: "./html/abbas.html" }
];

let currentIndex = 0;
const sliderImage = document.querySelector('.slider-image');
const sliderLink = document.querySelector('.slider-link');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlide() {
    const currentSlide = slides[currentIndex];
    sliderImage.src = currentSlide.image;
    sliderLink.href = currentSlide.link;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

updateSlide();

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}, 5000);