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

// ! Variables
let dots = document.querySelector(".dots");
let imageIndex = 0;
let bannerImg = document.querySelector(".banner-img");
let tagLine = document.querySelector("#banner p");
let banner = document.getElementById("banner");

// ! =====Arrow part======
function arrowClick() {
  let arrow = document.createElement("div");
  banner.appendChild(arrow);
  arrow.classList.add("arrow");
  let arrowLeft = document.createElement("img");
  arrow.appendChild(arrowLeft);
  arrowLeft.setAttribute("src", "./assets/images/arrow_left.png");
  arrowLeft.setAttribute("alt", "arrow-left");

  arrowLeft.addEventListener("click", () => {
    imageIndex--;
    if (imageIndex === -1) {
      imageIndex = slides.length - 1;
    }
    bannerImg.src = slides[imageIndex].image;
    tagLine.innerHTML = slides[imageIndex].tagLine;
  });

  let arrowRight = document.createElement("img");
  arrow.appendChild(arrowRight);
  arrowRight.setAttribute("src", "./assets/images/arrow_right.png");
  arrowRight.setAttribute("alt", "arrowRight");

  arrowRight.addEventListener("click", () => {
    imageIndex++;
    if (imageIndex === slides.length) {
      imageIndex = 0;
    createDot();
    }
    bannerImg.src = slides[imageIndex].image;
    tagLine.innerHTML = slides[imageIndex].tagLine;
  });
}
arrowClick(imageIndex);

// ! =====Dot part=====
function createDot() {
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i === imageIndex) {
      dot.classList.add("dot_selected");
    }
  }
}
createDot();
