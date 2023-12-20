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

let arrowleft = document.querySelector(".arrow_left");
function slideLeft() {
  console.log("Vous avez cliqué sur la flèche de gauche");
}
arrowleft.addEventListener("click", slideLeft);

let arrowright = document.querySelector(".arrow_right");
function slideRight() {
  console.log("Vous avez cliqué sur la flèche de droite");
}
arrowright.addEventListener("click", slideRight);

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

/*Changement de slide au clic sur la flèche droite*/

const bannerImage = document.querySelector(".banner-img");

const bannerText = document.querySelector("#banner p");

function slideRight() {
  dotsCheck[i].classList.remove("dot_selected");
  /*i += 1; lors de létape 4, puis condition pour avoir le défilement étape 5*/

  if (i >= slides.length - 1) {
    i = 0;
  } else {
    i++;
  }

  dotsCheck[i].classList.add("dot_selected");

  /*changement de l'image et du titre*/
  bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
  bannerText.innerHTML = slides[i].tagLine;
}

function slideLeft() {
  dotsCheck[i].classList.remove("dot_selected");
  /*i -= 1; lors de l'étape 4, puis condition pour avoir le défilement étape 5*/

  if (i <= 0) {
    i = slides.length - 1;
  } else {
    i--;
  }

  dotsCheck[i].classList.add("dot_selected");

  /*changement de l'image et du titre*/
  bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
  bannerText.innerHTML = slides[i].tagLine;
}
