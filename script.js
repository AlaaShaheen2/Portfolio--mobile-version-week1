const hambuger = document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');

// const navLinks = document.querySelectorAll(".nav-link");

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');

  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hambuger.classList.remove('active');
  navMenu.classList.remove('active');
}));
