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

const ImagesSlider=document.getElementById("js-banner-img");
console.log(ImagesSlider) 

const DotsSlider=document.getElementById("js-dots"); // pour créé les dots
console.log(DotsSlider)

// les flèches
const ArrowLeft = document.getElementById("js-arrow_left"); 
const ArrowRight = document.getElementById("js-arrow_right"); 





// ajouter les dots

for (let i = 0; i < 4; i++) {
    const newDot = document.createElement("div");
    newDot.classList.add("dot");
    DotsSlider.appendChild(newDot);
}

// Set the first dot as active initially
DotsSlider.children[0].classList.add("active");




// ajouter les event listeners à des flèches

ArrowLeft.addEventListener('click', function() {
    console.log('Left arrow clicked!');
    // Add your event handling code for left arrow here
});


ArrowRight.addEventListener('click', function() {
    console.log('Right arrow clicked!');
    // Add your event handling code for right arrow here
});