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
arrowleft.addEventListener("click", slideLeft);

const arrowright = document.querySelector(".arrow_right");
arrowright.addEventListener("click", slideRight);

/*Création des bulles points*/
const dotsBullet = document.querySelector(".dots");

/* Boucle qui permet de rajouter un bullet point en fonction du nombre d'images*/
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dotsBullet.appendChild(dot);
}

const dotsCheck = document.querySelectorAll(".dot");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let positionImage = 0;
setClassAndImage();

function slideRight() {
  console.log("Vous avez cliqué sur la flèche de droite");
  changeClass("remove");
  if (positionImage >= slides.length - 1) {
    positionImage = 0;
  } else {
    positionImage++;
  }
  setClassAndImage();
}

function slideLeft() {
  console.log("Vous avez cliqué sur la flèche de gauche");
  changeClass("remove");
  if (positionImage <= 0) {
    positionImage = slides.length - 1;
  } else {
    positionImage--;
  }
  setClassAndImage();
}

function changeClass(action) {
  if (action === "remove") {
    dotsCheck[positionImage].classList.remove("dot_selected");
  }
  if (action === "add") {
    dotsCheck[positionImage].classList.add("dot_selected");
  }
}

function setClassAndImage() {
  changeClass("add");
  /*changement de l'image et du titre*/
  bannerImage.src = `./assets/images/slideshow/${slides[positionImage].image}`;
  bannerText.innerHTML = slides[positionImage].tagLine;
}
