
const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const slider = document.querySelector('.slider-content');
const nbLanguages = document.querySelectorAll('.slider-content .card').length;

let i = 0;

document.querySelector('#left')?.addEventListener('click', () => {
	let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
	i = i > 0 ? i - 1 : (nbLanguages - nbDisplayedLanguages);
	slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
});

document.querySelector('#right')?.addEventListener('click', () => {
	let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
	i = (i < nbLanguages - nbDisplayedLanguages) ? i + 1 : 0;
	slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
});

		changeInProgress = true;

		// Images
		images.forEach((img, i) => img.classList.toggle('active', i === index));
		// Dots
		dots.forEach((dot, i) => dot.classList.toggle('dot_selected', i === index));
		// Texte
		bannerText.innerHTML = slides[index].tagLine;

		currentIndex = index;

		// Fin de transition (600ms = durée de l'opacité dans le CSS)
		setTimeout(() => changeInProgress = false, 600);
	}

	// === Navigation ===
	leftArrow.addEventListener('click', () => {
		if (changeInProgress) return;
		const newIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
		goToSlide(newIndex);
		resetAutoSlide();
	});

	rightArrow.addEventListener('click', () => {
		if (changeInProgress) return;
		const newIndex = (currentIndex + 1) % totalSlides;
		goToSlide(newIndex);
		resetAutoSlide();
	});

	dots.forEach(dot => {
		dot.addEventListener('click', () => {
			if (changeInProgress) return;
			const index = parseInt(dot.dataset.index);
			goToSlide(index);
			resetAutoSlide();
		});
	});

	// === Défilement automatique ===
	function startAutoSlide() {
		autoSlideInterval = setInterval(() => {
			if (changeInProgress) return;
			const newIndex = (currentIndex + 1) % totalSlides;
			goToSlide(newIndex);
		}, 5000);
	}

	function resetAutoSlide() {
		clearInterval(autoSlideInterval);
		startAutoSlide();
	}

	// === Pause au survol ===
	banner.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
	banner.addEventListener('mouseleave', startAutoSlide);

	// === Démarrage ===
	startAutoSlide();
});
