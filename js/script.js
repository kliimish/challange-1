`use strict`;

//selecting elements
const hamburgerIcon = document.querySelector(`.hamburger`);
const close = document.querySelector(`.close`);
const navBar = document.querySelector(`.nav-bar`);

hamburgerIcon.addEventListener(`click`, () => {
  hamburgerIcon.style.display = `none`;
  close.style.display = `block`;
  navBar.style.display = `flex`;
  navBar.classList.add(`responsive`);
});

close.addEventListener(`click`, () => {
  close.style.display = `none`;
  hamburgerIcon.style.display = `block`;
  navBar.style.display = `none`;
  navBar.classList.remove(`responsive`);
});
