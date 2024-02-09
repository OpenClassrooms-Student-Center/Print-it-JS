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


// ? appel des fonctions 
