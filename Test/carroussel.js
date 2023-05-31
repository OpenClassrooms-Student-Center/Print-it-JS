// -------------------------------- Variables ------------------------------------

const arrowRight = document.querySelector(`.arrow_right`);
const arrowLeft = document.querySelector('.arrow_left');
const dot = document.querySelector('.dots');
const dotContainer = document.querySelector(`.dots-container`);
const banner = document.getElementById(`banner`);
let bannerImg = document.getElementsByClassName('banner-img');


let slideIndex = 0;
let slideIndexPlus = slideIndex +1;
const slides = [
	{
		image:"../assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"../assets//images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"../assets//images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"../assets//images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideTotal = slides.length;
//----------------------------- FUNCTION -----------------------------

// ----------------INIT-----------
function init () {
	slides.reverse();

	slides.forEach( (slide , index) => {	
		const originalIndex = slides.length - index;

		let newDot = document.createElement('div');
		newDot.classList.add('dots');
		dotContainer.appendChild(newDot);
	
		let img = document.createElement('img');
		img.classList.add('banner-img');
		img.style.visibility= 'hidden'
		img.id = 'slide' + (originalIndex);
		img.src = slide.image;
		img.alt = "Slide";
		banner.prepend(img);
	});
		createP ();
		bannerImg[slideIndex].style.visibility = 'visible';	
}
init();

// ------------------Fleche ---------------
function slideActionRight (){
	bannerImg[slideIndex].style.visibility = 'hidden';
	if(slideIndex === slides.length -1){
			 slideIndex = 0} 
	else { slideIndex++ }
	bannerImg[slideIndex].style.visibility = 'visible';
	let bannerText = document.querySelector('#banner p');
	bannerText.innerHTML = slides[slideIndex].tagLine;

	}

function slideActionLeft (){
	bannerImg[slideIndex].style.visibility = 'hidden';
	if(slideIndex === 0 ){
			 slideIndex = slides.length-1} 
	else { slideIndex--}
	bannerImg[slideIndex].style.visibility = 'visible';
	let bannerText = document.querySelector('#banner p');
	bannerText.innerHTML = slides[slideIndex].tagLine;
	} 

// function dotSelected (){
// 	dot[slideIndex].classList.add('dot_selected')
// }
arrowRight.addEventListener('click', slideActionRight);

arrowLeft.addEventListener('click', slideActionLeft);



// --------------------- Create Images ------------------

// -------------------- Create Paragraphe ---------------
function createP () {
	let description = document.createElement('p')
	description.innerHTML = slides[slideIndex].tagLine
	banner.append(description)
	console.log('Paragraphe Créé')
}
// -------------------- Changer  --------------
