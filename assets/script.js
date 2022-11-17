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

// variables
const arrowRight = document.querySelector('.arrow_right')
const arrowLeft = document.querySelector('.arrow_left')
const img = document.querySelector('#banner img')
const tag = document.querySelector('#banner p')
const bulletPoints = document.getElementsByClassName('dot')
let imgSrc = './assets/images/slideshow/'
let slide = 0

// add a loop to create each bullet point with the 'dot' class
for (let i = 0; i < slides.length; i++) { 
	const bulletPoint = document.createElement('div')
	const dots = document.querySelector('div.dots')
	dots.append(bulletPoint)
	bulletPoint.classList.add('dot')
}

// add the class 'dot_selected' on the active bullet point
const currentBulletPoint = document.querySelector('.dot:first-child')
currentBulletPoint.classList.add('dot_selected')

// add function to change image and paragraph with 'slide' as argument
function slideShow(slide) {
	img.setAttribute('src', (imgSrc + slides[slide].image))
	tag.innerHTML = slides[slide].tagLine
}

// add function to right click
function rightClick(e) {
	bulletPoints[slide].classList.remove('dot_selected') // remove the 'dot_selected' class from the active bullet point
	if (slide < slides.length - 1) {
		slide++ // operator increment
	} else {
		slide = 0 // to make the slideshow run endlessly
	}
	bulletPoints[slide].classList.add('dot_selected') // add the 'dot_selected' class to next bullet point
	slideShow(slide) // call the slideshow function with 'slide' as argument
	e.stopPropagation()
	console.log('arrow right click')
}

// add function to left click
function leftClick(e) {
	bulletPoints[slide].classList.remove('dot_selected') // remove the 'dot_selected' class from the active bullet point
	if (slide > 0) { 
		slide-- // operator decrement
	} else {
		slide = slides.length - 1 // return to end of slideshow
	}
	bulletPoints[slide].classList.add('dot_selected') // add the 'dot_selected' class to previous bullet point
	slideShow(slide)
	e.stopPropagation()
	console.log('arrow left click')
}

// add event listeners on the click of right and left arrows and call the function rightClick or leftClick
arrowRight.addEventListener('click', rightClick)
arrowLeft.addEventListener('click', leftClick)

// other solution

/*
function bulletShow(e) {
		if (bulletPoints[slide].classList.contains('dot_selected')) {
			bulletPoints[slide].classList.remove('dot_selected')
		}
		if ((slides.length - 1) > slide ) {
			slide = slide + 1
		} else {
		slide = 0
		}
	bulletPoints[slide].classList.add('dot_selected')
	slideShow(slide)
	e.stopPropagation()
	console.log('arrow right click')
}

function bulletShowRev(e) {
		if (bulletPoints[slide].classList.contains('dot_selected')) {
			bulletPoints[slide].classList.remove('dot_selected')
		}
		if ((slide > 0)) {
			slide = slide - 1
		} else {
		slide = slides.length - 1
		}
	bulletPoints[slide].classList.add('dot_selected')
	slideShow(slide)
	e.stopPropagation()
	console.log('arrow left click')
}

arrowRight.addEventListener('click', bulletShow)
arrowLeft.addEventListener('click', bulletShowRev)
*/