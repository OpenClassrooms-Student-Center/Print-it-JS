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

// banner
var img = document.querySelector(".banner-img");
let currentIndex = 0;

// Fonction pour faire défiler le carrousel vers la gauche
function scrollLeft() {
  if (currentIndex === 0) {
    currentIndex = 3;
  }
  currentIndex -= 1;
  img.nextElementSibling.innerHTML = slides[currentIndex].tagLine;
  img.src = `./assets/images/slideshow/${slides[currentIndex].image}`; // changer la source de l'image
}

function scrollRight() {
  if (currentIndex === 3) {
    currentIndex = 0;
  }
  currentIndex += 1;
  img.nextElementSibling.innerHTML = slides[currentIndex].tagLine;
  img.src = `./assets/images/slideshow/${slides[currentIndex].image}`; // changer la source de l'image
}

// au clic sur la flèche gauche
const leftArrow = document.querySelector(".arrow_leftt");
leftArrow.addEventListener("click", () => {
  scrollLeft();
});

// au clic sur la flèche droite
const rightArrow = document.querySelector(".arrow_rightt");
rightArrow.addEventListener("click", () => {
  scrollRight();
});
