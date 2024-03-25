const navbar = document.getElementById('navbar');
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > topbar.offsetHeight) {
    navbar.classList.add('bg-white');
  } 
});

let options=document.querySelector('.dropdown-menu');
let optionsList=document.querySelector('.optionsList');
let optionsearch=document.querySelector('.search')
optionsearch.addEventListener('keyup',function searchLang(){

  let filter = optionsearch.value.toLowerCase();
  let li=options.getElementsByClassName('optionsList');
  for (let i = 0; i < li.length; i++) {
    let liCount = li[i];
    let textValue=liCount.textContent || liCount.innerText;
    if(textValue.toLowerCase().indexOf(filter) >-1){
      li[i].style.display='';
    }else{
      li[i].style.display='none';

      }
    }
  })


  



var TrandingSlider = new Swiper('.tranding-slider',
{
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   loop: true,
   slidesPerView: 'auto',
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 100,
     modifier: 2.5,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }
 });