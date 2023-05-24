
// Definir les const pour les 2 fleches

	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");
	arrowLeft.addEventListener('click', function  () { console.log("Recule")});
	arrowRight.addEventListener('click', function () { console.log("Avance")});

// Definir animation  du fade en inserant une class .fade a la div mySlides pour l'animation depuis JS 

/*

const slide1 = document.querySelector("slide1")

// Definir les images et le text lié
const slides = [
	{
		image:slide1 ,
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:document.querySelector("slide2"),
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:document.querySelector("slide3"),
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:document.querySelector("slide4"),
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/*	function Forward () {
		let i =O
		this.click()
		slides[++i]   
		slides[i].p.replace(slides[i{tagLine}])
		if(i === slides.length){
			i=0
		}
	}

console.log(slides)

let i = 0

if( i === slides.lengh){i= 0}

function rotateCarroussel() {
	
		if(arrowLeft.click()){
			slides[--i]
		} else if (arrowRight.click()){
			slides[++i]
		} else {
			setInterval ( ++slides[{}],4000)
		}
	}

	window.onload = function () {
		var el = document.getElementById("title-div");
		el.onclick = sayHello;
	}
	
	function sayHello() {
		console.log("Hello");
	}

	*/