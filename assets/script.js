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
// initialisation des variables
let activeBubble = 0;
let newActiveBubble = 0;
let urlListe = []

const dots = document.querySelector(".dots")
const bannerImg = document.querySelector(".banner-img");
//création des bulletpoints 
for (let i = 0; i < slides.length; i++){
	const imageElement = document.createElement("img");  
	imageElement.className = "dot";  
	dots.appendChild(imageElement)
	urlListe.push(`./assets/images/slideshow/`+slides[i].image) // j'utilise la boucle pour implémenter une table d'url
}

//mise en place de la bubble avec class dot_selected
updateActiveBubble();

function updateActiveBubble(){
	const dotsCount = document.querySelectorAll(".dot");
	dotsCount.forEach(function(item, index){
		if(index === activeBubble){
			item.classList.add("dot_selected");
		}else {
			item.classList.remove("dot_selected");
		}
	})
}
//fonction qui affiche l'image du slider indexee sur la bubble active.
afficherNewPic();

function afficherNewPic(){
	bannerImg.src = urlListe[activeBubble]

}

// ajout des flèches et du message d'alerte au click puis fonctionnalité

const leftArrowClick = document.querySelector(".arrow_left");
leftArrowClick.addEventListener("click", function(){
	//return alert("click gauchet");
	leftClick();
});
const rightArrowClick = document.querySelector(".arrow_right");
rightArrowClick.addEventListener("click",function(){
	//return alert("click droit");
	rightClick();
});
//fonctions au clique
function leftClick(){ 
	if(activeBubble === 0){
		newActiveBubble = 3;
	}else {
		newActiveBubble = activeBubble -1;
	}
	updateAfterClick ()
}

function rightClick(){ 
	if(activeBubble === 3){
		newActiveBubble = 0;
	}else {
		newActiveBubble = activeBubble + 1;
	}
	updateAfterClick ()
}

//refactorisation des fonctions au clique

function updateAfterClick (){
	activeBubble = newActiveBubble;
	afficherNewPic();
	updateActiveBubble();
}

