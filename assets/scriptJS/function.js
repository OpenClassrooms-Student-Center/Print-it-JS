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