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

// ! =====Arrow part======

function arrowClick() {
  let banner = document.getElementById("banner");
  let arrow = document.createElement("div");
  banner.appendChild(arrow);
  arrow.classList.add("arrow");
  let arrowLeft = document.createElement("img");
  let arrowRight = document.createElement("img");
  // ? faire une fonction pour prendre les deux balise img en un seul ordre
  arrow.appendChild(arrowLeft);
  Object.assign(arrowLeft, {
    src: "./assets/images/arrow_left.png",
    alt: "arrow-left",
  });
  arrow.appendChild(arrowRight);
  Object.assign(arrowRight, {
    src: "./assets/images/arrow_right.png",
    alt: "arrowRight",
  });
  arrowLeft.addEventListener("click", () => {
    const bannerImg = document.querySelector(".banner-img");
    bannerImg.setAttribute("src", "../assets/images/slideshow/slide2.jpg");
  });
  arrowRight.addEventListener("click", () => {
    console.log("fabien");
  });
}
arrowClick();
// ! =====Dot part=====
// * Je recupere le container des dots
let dots = document.querySelector(".dots");
// * Je crée une variable pour compter les index
let indexCounter = 0;
// * Je crée une fonction pour créer les dots
function createDot (i) {
  // * Je crée une variable pour chaque dot
  let dot = document.createElement("div");
  // * Je lui donne une class
  dot.classList.add("dot");
  // * Je l'ajoute dans le container
  dots.appendChild(dot);
  // * Je lui donne une valeur
  if (i === indexCounter) {
    // * Je lui donne une class
    dot.classList.add("dot_selected");
  }
}
// * Je crée une fonction pour afficher les dots
function displayDot () {
  // * Je crée une boucle pour chaque slide
  for (let i = 0; i < slides.length; i++) {
    // * J'appelle la fonction createDot
    createDot(i);
  }
}
// * J'appelle la fonction displayDot
 displayDot(); 


//  ! premiere tentative de dot
//   for (let i = 0; i < slides.length; i++) {
//     let dot = document.createElement("div");
//     dot.classList.add("dot");
//     dots.appendChild(dot);
//     if (i === 0) {
//       dot.classList.add("dot_selected");
//     }
//   }