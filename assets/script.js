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



let arrowRight = document.querySelector('.arrow_right');
let arrowLeft = document.querySelector('.arrow_left');
let bannerImage = document.querySelector('#banner img');
let bannerText = document.querySelector('#banner p');
let bannerDots = document.querySelector('.dots');


// Dots section : pour chaque slide on crée et on ajoute une
// dot dans le HTML dans la div .dots

slides.forEach ((slide, index) => {
  let dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('dot_selected');
  }
  bannerDots.appendChild(dot);
});



// Activation des boutons au clic : on écoute les clicls sur arrowRight et arrowLeft,
// au clic on prend la focntion pour changer de +1 ou -1 slide

arrowRight.addEventListener('click', function() {
  changeSlide(-1);
  console.log('clic droite');
});

arrowLeft.addEventListener('click', function() {
  changeSlide(1);
  console.log('clic gauche');
});



//Changement de slide : on récupère les images dans la constante slides, elle change quand
// on clique sur une des flèches : on utilise la clé "image" pour changer l'image
// et la clé "tagLine" pour changer le texte
