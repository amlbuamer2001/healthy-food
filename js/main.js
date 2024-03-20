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
optionsearch.addEventListener('keyup',searchLang())
function searchLang(){
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
  }