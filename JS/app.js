/* RESPONSIVE NAVBAR */
const navToggleBtn = document.querySelector("#nav-toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");

navToggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  navToggleBtn.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

/* Display none - Display block */
function showAbt() {
  //Get the p element
  const pShow = document.querySelector(".abt-p-hide");

  //Start the animation
  pShow.classList.remove("hide");
  pShow.classList.add("show");

  //Show the p element
  pShow.style.display = "block";

  //Show and hide know more and know less btn
  const more = document.querySelector(".toggle-show");
  more.style.display = "none";

  const less = document.querySelector(".toggle-hide");
  less.style.display = "block";

  return false;
}

function hideAbt() {
  //Get the p element
  const pShow = document.querySelector(".abt-p-hide");

  //Animate p element
  pShow.classList.remove("show");
  pShow.classList.add("hide");

  //Hide the p element
  pShow.addEventListener("animationend", () => {
    pShow.style.display = "none";
  });

  //Show and hide know more and know less btn
  const more = document.querySelector(".toggle-show");
  more.style.display = "block";

  const less = document.querySelector(".toggle-hide");
  less.style.display = "none";

  return false;
}

//SHOW AND HIDE QH SECTION

//Grab marco sections
const damler = document.getElementById("DAMLER");
const ej1 = document.getElementById("EJ1");
const ej2 = document.getElementById("EJ2");
const ej3 = document.getElementById("EJ3");
const ej4 = document.getElementById("EJ4");
const ej5 = document.getElementById("EJ5");
//Grab btns
const btnDamler = document.getElementById("structure");
const btnEj1 = document.getElementById("test1");
const btnEj2 = document.getElementById("test2");
const btnEj3 = document.getElementById("test3");
const btnEj4 = document.getElementById("test4");
const btnEj5 = document.getElementById("test5");

//By default only show DAMLER
damler.style.display = "block";

ej1.style.display = "none";
ej2.style.display = "none";
ej3.style.display = "none";
ej4.style.display = "none";
ej5.style.display = "none";

//Addevent listeners part
btnDamler.addEventListener("click", () => {
  damler.style.display = "block";

  ej1.style.display = "none";
  ej2.style.display = "none";
  ej3.style.display = "none";
  ej4.style.display = "none";
  ej5.style.display = "none";
});

btnEj1.addEventListener("click", () => {
  damler.style.display = "none";

  ej1.style.display = "block";

  ej2.style.display = "none";
  ej3.style.display = "none";
  ej4.style.display = "none";
  ej5.style.display = "none";
});

btnEj2.addEventListener("click", () => {
  damler.style.display = "none";
  ej1.style.display = "none";

  ej2.style.display = "block";

  ej3.style.display = "none";
  ej4.style.display = "none";
  ej5.style.display = "none";
});

btnEj3.addEventListener("click", () => {
  damler.style.display = "none";
  ej1.style.display = "none";
  ej2.style.display = "none";

  ej3.style.display = "block";

  ej4.style.display = "none";
  ej5.style.display = "none";
});

btnEj4.addEventListener("click", () => {
  damler.style.display = "none";
  ej1.style.display = "none";
  ej2.style.display = "none";
  ej3.style.display = "none";

  ej4.style.display = "block";

  ej5.style.display = "none";
});

btnEj5.addEventListener("click", () => {
  damler.style.display = "none";
  ej1.style.display = "none";
  ej2.style.display = "none";
  ej3.style.display = "none";
  ej4.style.display = "none";

  ej5.style.display = "block";
});
