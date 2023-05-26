// -------------------------------- Variables ------------------------------------

const arrowRight = document.querySelector(`.arrow_right`);
const arrowLeft = document.querySelector('.arrow_left');
const dot = document.querySelector('.dots');
const dotContainer = document.querySelector(`.dots-container`)
const banner = document.getElementById(`banner`)
let bannerText = document.querySelector('#banner p');
let bannerImg = document.querySelector('.banner-img')
let slideIndex = 0;


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
 let slideIndexCurrent = slides[slideIndex]
//----------------------------- FUNCTION -----------------------------

// ----------------INIT-----------
function init () {
	slides.forEach( () => {	
		let newDot = document.createElement('div');
		newDot.classList.add(`dots`);
		dotContainer.append(newDot);
		})
		slideCurrent()
}
init()

// ------------------Fleche ---------------
function slideActionRight (){
		if(slideIndex === slides.length -1){
			 slideIndex = 0} 
		else { slideIndex++ }
		slides[slideIndex]
	}


function slideActionLeft (){
		if(slideIndex === 0 ){
			 slideIndex = slides.length-1} 
		else { slideIndex--}
		slides[slideIndex]
	} 

// function dotSelected (){
// 	dot.classList.add('dot_selected')
// }
arrowRight.addEventListener('click', () => {
	slideActionRight()
	deleteElementText()
	slideCurrent()
	console.log(slideIndexCurrent);
});

arrowLeft.addEventListener('click', () => {
	slideActionLeft()
	slideCurrent()

});

function deleteElementText () {
	bannerText.innerHTML(bannerText,"slideIndexCurrent.tagLine")
}
function slideCurrent(){
	let imageCurrent
	let textCurrent
	imageCurrent = createImg(slideIndexCurrent)
	textCurrent = createP(slideIndexCurrent)
	console.log(`Nouvelle slide ${slideIndex+1} créé`);
}

function createImg () {
	let img = document.createElement('img')
	img.classList.add('banner-img')
	img.setAttribute('id',"slide"+[slideIndex+1])			
	img.setAttribute ('src',"")
	img.setAttribute ('alt',"Slide")
	img.src = `${slideIndexCurrent.image}`
	console.log(img)
	banner.append(img)
	console.log(`Image ${slideIndex+1} Créé`)
}

function createP () {
	let description = document.createElement('p')
	description.innerHTML = slideIndexCurrent.tagLine
	banner.append(description)
	console.log('Paragraphe Créé')
}

