const hambuger= document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-link');

hambuger.addEventListener('click', () => {
    hambuger.classList.add('active');

  navMenu.classList.add('active');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     hambugerMenu.classList.remove('active');

//     navMenu.classList.remove('active');
//   });
// });