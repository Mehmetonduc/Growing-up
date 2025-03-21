document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});
