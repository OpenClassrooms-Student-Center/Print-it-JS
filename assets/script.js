document.addEventListener("DOMContentLoaded", () => {
	const slides = [
		{ image: "./assets/images/slideshow/slide1.jpg", 
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
		{ image: "./assets/images/slideshow/slide2.jpg", 
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
		{ image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
		{ image: "./assets/images/slideshow/slide4.png", 
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
	];


const banner = document.querySelector('#banner');
const bannerImages = banner.querySelector('.banner-img');
const bannerText = banner.querySelector('.banner-text');
const dotsContainer = banner.querySelector('.dots');
const leftArrow = banner.querySelector('.arrow_left');
const rightArrow = banner.querySelector('.arrow_right');

slides.forEach((slide, index) => {
	const dot = document.createElement('span');
	dot.className = 'dot' + (index === 0 ? ' dot_selected' : '');
	dot.dataset.index = index;
	dotsContainer.appendChild(dot);
});

const images = banner.querySelector('.banner-img');
const dots = banner.querySelectorAll('.dot');
let currentIndex = 0;


function goToSlide(index) {
	dots.forEach((dot, i) => dot.classList.toggle('dot_selected', i === index));
	images.src= slides[index].image;
	bannerText.innerHTML = slides[index].tagLine;
	currentIndex = index;
	console.log (slides[index].image,images)
}

leftArrow.addEventListener('click', () => {
	const newIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
	goToSlide(newIndex);
});

rightArrow.addEventListener('click', () => {
	const newIndex = (currentIndex + 1) % slides.length;
	goToSlide(newIndex);
});

dots.forEach(dot =>
	dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)))
);

bannerText.innerHTML = slides[0].tagLine;
});