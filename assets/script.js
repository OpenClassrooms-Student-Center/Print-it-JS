const slides = [
  {
    image: "../assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "../assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "../assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "../assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// ? Variables globales
const banner = document.getElementById("banner");
const arrows = document.createElement("div");
arrows.classList.add("arrow");
banner.appendChild(arrows);
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
let slideIndex = 0;

// ? affichages des dots
function createDot() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == slideIndex) {
      dot.classList.add("dot_selected");
    }
  }
}
// ? gestion de la fleche gauche
function arrowClickLeft () {
  const leftArrow = document.createElement('img');
  leftArrow.classList.add('.arrow_left');
  leftArrow.setAttribute("src", "./assets/images/arrow_left.png");
  arrows.appendChild(leftArrow);
  leftArrow.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[slideIndex].classList.remove("dot_selected");
    slideIndex--;
    if ( slideIndex < 0) {
      slideIndex = slides.length -1;
    }
    bannerImg.src = slides[slideIndex].image;
    tagLine.innerHTML = slides[slideIndex].tagLine;
    arrayDots[slideIndex].classList.add("dot_selected");
  })
    
}

// ? gestion de la fleche droite 
function arrowClickRight () {
  const rightArrow = document.createElement('img');
  rightArrow.classList.add('.arrow_left');
  rightArrow.setAttribute("src", "./assets/images/arrow_right.png");
  arrows.appendChild(rightArrow);
  rightArrow.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[slideIndex].classList.remove("dot_selected");
    slideIndex++;
    if ( slideIndex > slides.length -1) {
      slideIndex = 0;
    }
    bannerImg.src = slides[slideIndex].image;
    tagLine.innerHTML = slides[slideIndex].tagLine;
    arrayDots[slideIndex].classList.add("dot_selected");
  })
    
}
// ? appel des fonctions 
createDot();
arrowClickLeft();
arrowClickRight();