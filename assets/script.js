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
// initialisation de la bannierere
let activeBubble = 0;
let newActiveBubble = 0;


const dots = document.querySelector(".dots")
let table = []
for (let i = 0; i < slides.length; i++){
	const imageElement = document.createElement("img");  
	imageElement.className = "dot";  
	dots.appendChild(imageElement)
	table.push(`./assets/images/slideshow/`+slides[i].image)
}
updateActiveBubble();

function updateActiveBubble(){
	const dots = document.querySelectorAll(".dot");
	dots.forEach(function(item, index){
		if(index === activeBubble){
			item.classList.add("active");
		}else {
			item.classList.remove("active");
		}
	})
}

afficherNewPic();

function afficherNewPic(){
	document.querySelector(".banner-img").innerHTML=`<img src="`+ table[activeBubble] + `" />`
}

// ajout des flèches et du message d'alerte au click

const leftArrowClick = document.querySelector(".arrow_left");
leftArrowClick.addEventListener("click", function(){
	//return alert("click gauchet");
	leftClick();
});


function leftClick(){ 
	if(activeBubble === 0){
		newActiveBubble = 3;
	}else {
		newActiveBubble = activeBubble -1;
	}
	activeBubble = newActiveBubble;
	afficherNewPic();
	updateActiveBubble();
}


const rightArrowClick = document.querySelector(".arrow_right");
rightArrowClick.addEventListener("click",function(){
	//return alert("click droit");
	rightClick();
});

function rightClick(){ 
	if(activeBubble === 3){
		newActiveBubble = 0;
	}else {
		newActiveBubble = activeBubble + 1;
	}
	activeBubble = newActiveBubble;
	afficherNewPic();
	updateActiveBubble();
}





