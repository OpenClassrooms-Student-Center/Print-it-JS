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
// Récupères chaques images et sont tagline
// parcours chaque objet
// slides.forEach((image, tagLine) => console.log(image, tagLine))

// let premierSlide = slides[0]
// console.log(premierSlide)

// Récupère les flèches
const arrow_left = document.querySelector(".arrow_left");
console.log(arrow_left);

const arrow_right = document.querySelector(".arrow_right");
console.log(arrow_right);

// Ecoute évènement lors du click sur les flèches
arrow_left.addEventListener("click", (event) => {
  console.log("fleche gauche");
});

arrow_right.addEventListener("click", (event) => {
  console.log("fleche droite");
});

// Créer les dots pour chaque slide

// je récup le selecteur .dots
const dotsDiv = document.querySelector(".dots");
const imageElement = document.querySelector(`#banner .banner-img`);
console.log(imageElement);
const tagLineElement = document.querySelector(`#banner p`);
console.log(tagLineElement);

const maxSlides = slides.length;

let currentSlide = 0;
// je parcours chaque objet dans la liste slides
// et pour chaque slide tu fait
slides.forEach((slide) => {
  // création d'une div
  const dot = document.createElement("div");
  // avec la class "".dot"
  dot.classList.add(`dot`);
  // il sera l'enfant de la div "dots" (qui est récupêrer dans cette variable)
  dotsDiv.appendChild(dot);
});

// Pour être SUR que chaque dot contient son slide relatifs à l'index
// je récupère all dot et stock dans la variable dots
const dots = document.querySelectorAll(".dot");
// j'parcours chaque objet dans ma liste dots
// Avec en paramètre
dots.forEach((dot, index) => {
  console.log(`Le Dot ${index + 1}:`, dots[index]);
  console.log(
    `Le Dot ${index + 1} contient le slide ${index + 1}:`,
    slides[index]
  );
});

// Ont applique un style à chaque dot selectionner

// j'applique le style au dot
dots[0].classList.add(`dot_selected`);

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    // supprimer la classe .dot_selected de tous les dots
    dots.forEach((otherDot) => {
      otherDot.classList.remove(`dot_selected`);
    });

    // ajoute la class .dot_selected au dot cliqué
    dot.classList.add(`dot_selected`);

    updateSlide(index);
  });
});

function updateSlide(index) {
  currentSlide = index;
  // Mets a jour l'image
  const slide = slides[currentSlide];
  console.log(currentSlide);
  imageElement.src = `./assets/images/slideshow/${slide.image}`;
  console.log(`./assets/images/slideshow/${slide.image}`);

  // Mets a jour le tagline
  tagLineElement.innerHTML = slide.tagLine;
}
