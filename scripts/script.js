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
]
// Récupères chaques images et sont tagline
// parcours chaque objet
slides.forEach((image, tagLine) => console.log(image, tagLine))

let premierSlide = slides[0]
console.log(premierSlide)

// Récupère les flèches
const arrow_left = document.querySelector(".arrow_left")
console.log(arrow_left);

const arrow_right = document.querySelector(".arrow_right")
console.log(arrow_right);

// Ecoute évènement lors du click sur les flèches
arrow_left.addEventListener("click", (event) =>{
	console.log("fleche gauche")
})

arrow_right.addEventListener("click", (event) =>{
	console.log("fleche droite")
})



// Récupère les dots
const dots = document.getElementsByClassName("dot")
console.log(dots)


// 
for (let i = 0; i < dots.length; i++) {
	const dot = dots[i];
	const slide = slides[i]
	console.log(i,dot, slide)
	
}

// let premierDot = dots[0]
// console.log(premierDot)
