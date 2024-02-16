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

// variable position

let position = 0;

const bannerImg = document.querySelector(".banner-img");
const path = "./assets/images/slideshow/";
const dots = document.querySelectorAll(".dot");
const tagline = document.querySelector(".tagline");

// ajout: Event listeners flèches
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  // variable position qui execute le changement de position
  position = position + 1;
  // si position est égale à la longueur du tableau (slides) alors
  // c'est la fin de la diapositive et la valeur de position revient à (0) pour ne pas être négative.
  if (position === slides.length) [(position = 0)];

  //récupérer la diapositive actuelle
  const currentSlide = slides[position];

  // mise à jour du texte de la tagline
  tagline.innerHTML = currentSlide.tagLine;

  // mise à jour l'image de la bannière
  bannerImg.src = path + currentSlide.image;

  updateDots();

  
  console.log(position);

  console.log("clickflèchedroite");
});

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  console.log("clicflèchegauche");
  position = position - 1;

  if (position === -1) [(position = slides.length - 1)];
  const currentSlide = slides[position];
  bannerImg.src = path + currentSlide.image;

  updateDots();

  console.log(position);
});

//mise à jour du point sélectionné  dots

// pour chacun des dots dans la nodelist 
// si index est égale à la position alors ajouter la classList css dot selected sinon suprrimer la class css 
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// fonctions conditions

// Si on est à la dernière image et que l’on clique à droite :
// on affiche la première image ;
// le point sélectionné est le premier.
// if (){const slides = [4]

// }else{ const slides = [1]

// }

// Si on est à la première image et qu’on clique à gauche :
// on affiche la dernière image ;
// le point sélectionné est le dernier.

// Dans tous les cas, le texte change en accord avec l’image montrée.
