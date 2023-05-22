const navToggleBtn = document.querySelector("#nav-toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");

navToggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  navToggleBtn.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
