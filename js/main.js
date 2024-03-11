const navbar = document.getElementById('navbar');
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > topbar.offsetHeight) {
    navbar.classList.add('bg-white');
  } 
});
