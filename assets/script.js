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


let banner = document.getElementById('banner');
let arrow = document.createElement('div');
banner.appendChild(arrow);
arrow.classList.add('arrow');
let arrowLeft = document.createElement('img');
let arrowRight = document.createElement('img');
// ? faire une fonction pour prendre les deux balise img en un seul ordre
arrow.appendChild(arrowLeft);
Object.assign(arrowLeft, {
	src: "./assets/images/arrow_left.png",
	alt: 'arrow-left'
});
arrow.appendChild(arrowRight);
Object.assign(arrowRight, {
	src: "./assets/images/arrow_right.png",
	alt: 'arrowRight'
});
arrowLeft.addEventListener('click', () => {
	alert("salut bg")
});
arrowRight.addEventListener('click', () => {
	alert("salut fab")
});
