///////////////
// ALLGEMEIN //
///////////////
let gotoTopBtn = document.getElementById("idGotoTopBtn");

window.onscroll = function () {
  shrinkNavbar();
  scrollFunction();
};

function shrinkNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("idLogoFont").style.fontSize = "1.5rem";
    document.getElementById("idLogoLink").style.padding = ".5rem";

    document.getElementById("idBurger").style.fontSize = "1rem";
    document.getElementById("idBurger").style.top = "0rem";
  } else {
    document.getElementById("idLogoFont").style.fontSize = "3rem";
    document.getElementById("idLogoLink").style.fontSize = "30rem";

    document.getElementById("idBurger").style.fontSize = "1.6rem";
    document.getElementById("idBurger").style.top = "0.5rem";
  }
}

// GotoTop Btn einblenden und onclick-function
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    gotoTopBtn.style.display = "block";
  } else {
    gotoTopBtn.style.display = "none";
  }
}

function gotoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// expand TopNav
function expandMenu() {
  var x = document.getElementById("idTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

////////////////
// REFERENZEN //
////////////////

//Accordion Script
var acc = document.getElementsByClassName("ref-accordion-btn");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordion-open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Bilder vergrößern
document.querySelectorAll(".container-sektion img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
