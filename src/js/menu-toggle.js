let buttonBurger = document.getElementById('mb-burger');
let menu = document.getElementById('mb-menu');

buttonBurger.addEventListener('click', () => {
  menu.classList.toggle('mb-menu-active');
});
