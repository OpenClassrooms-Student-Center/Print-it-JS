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

//console.log(slides[0])
//console.log(slides[1])
//console.log(slides[2])
//console.log(slides[3])

//let i = 0


//let btnNext = document.querySelector(".arrow_left")
//let btnPrevious = document.querySelector("arrow_right")
//afficherImage(slides[i])
//btnNext.addEventListener("click", () => {
	//console.log(i++)
//})



//let footer = document.querySelector("footer")
//footer.innerHTML = div

console.log(slides[0])
console.log(slides[1])
console.log(slides[2])
console.log(slides[3])

let slideBoutonLeft = document.querySelector(".arrow_left");
slideBoutonLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton gauche")
});

let slideBoutonRight = document.querySelector(".arrow_right");
slideBoutonRight.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton droite")
});