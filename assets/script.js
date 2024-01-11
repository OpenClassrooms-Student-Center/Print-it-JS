const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


// Récuperer les elements :)


// les flèches
const ArrowLeft = document.getElementById("js-arrow_left"); 
const ArrowRight = document.getElementById("js-arrow_right"); 


//caroussel
const ImagesSlider=document.getElementById("js-banner-img");

const DotsSlider=document.getElementById("js-dots"); 
const TaglineElement = document.getElementById("js-text-img");

let currentSlideIndex = 0;




// ajouter les 4 dots  

for (let i = 0; i < slides.length; i++) {
    const newDot = document.createElement("div");
    newDot.classList.add("dot");
    DotsSlider.appendChild(newDot); // pour liéé l’élément créé à la page html
}

const dots = DotsSlider.querySelectorAll(".dot");





// Function to update the image, tagline, and dots based on the current slide index

function updateSlide() {
    ImagesSlider.src = src="./assets/images/slideshow/"+ slides[currentSlideIndex].image;
    TaglineElement.innerHTML = slides[currentSlideIndex].tagLine;

	
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[currentSlideIndex].classList.add("dot_selected");
}


// ajouter les eventlisteners à des flèches 

ArrowLeft.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
});


ArrowRight.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide();
});


updateSlide();

