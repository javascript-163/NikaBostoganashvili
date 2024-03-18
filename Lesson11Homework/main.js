let cards = document.getElementsByClassName("card");

function searchProduct() {
  let input = document.getElementById("filter_input");
  let filter = input.value.toUpperCase();

  for (let card of cards) {
    let product = card.querySelector("h4");
    let txtValue = product.textContent;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

function filterByCategory(category) {
  for (let card of cards) {
    let product = card.querySelector("h4");
    let txtValue = product.textContent;

    if (txtValue.toUpperCase().indexOf(category.toUpperCase()) > -1) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

function showAll() {
  for (let card of cards) {
    card.style.display = "block";
  }
}

const buttons = document.querySelectorAll(".filter_button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    if (button.textContent !== "All") {
      filterByCategory(button.textContent);
    } else {
      showAll();
    }
  });
});

let slideIndex = 0;
autoSlider();
function autoSlider() {
  let slides = document.getElementsByClassName("cardAutoSlider");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";

  setTimeout(autoSlider, 2000);
}

let indexOfSlide = -1;

function moveSlides(num) {
  slidesShower((indexOfSlide += num));
}

function currentSlide(num) {
  slidesShower((indexOfSlide = num));
}

function slidesShower(num) {
  let slides = document.getElementsByClassName("cardSlider");
  let dots = document.getElementsByClassName("dot2");

  if (num > slides.length) {
    indexOfSlide = 1;
  }

  if (num < 1) {
    indexOfSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot2", "");
  }

  slides[indexOfSlide - 1].style.display = "block";
  dots[indexOfSlide - 1].className += " activeDot2";
}

slidesShower(1);
