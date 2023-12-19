const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/*Ajout des Event Listeners sur les flèches*/

const arrowleft = document.querySelector(".arrow_left");
function showMsg() {
  console.log("Vous avez cliqué sur la flèche de gauche");
}
arrowleft.addEventListener("click", showMsg);

const arrowright = document.querySelector(".arrow_right");
function showMsg() {
  console.log("Vous avez cliqué sur la flèche de droite");
}
arrowright.addEventListener("click", showMsg);

/*Création des bulles points*/
let dotsBullet = document.querySelector(".dots");
let i = 0;
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";

  dotsBullet.appendChild(dot);
}
let dotsCheck = document.querySelectorAll(".dot");
dotsCheck[i].classList.add("dot_selected");
