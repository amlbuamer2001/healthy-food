const navbar = document.getElementById('navbar');
const topbar = document.getElementById('topbar');
// const dropdown=document.querySelector('.dropdown');
window.addEventListener('scroll', () => {
  if (window.scrollY > topbar.offsetHeight) {
    navbar.classList.add('bg-white');
  } 
});


// function search(){
//   const searchLang=documsent.querySelector('#search');
//   const filter = searchLang.value.toLowerCase();

//   const dropdownItem=document.querySelectorAll('.dropdown-item');
  

//   dropdownItem.forEach((item)=>{
// let text =item.textContent;
// if(text.toLowerCase().includes(filter.toLowerCase())){
//   item.computedStyleMap.display='';
// }
// else{
//   item.computedStyleMap.display='none';
// }
//   })
// }

// let options=document.querySelector('.dropdown-menu');
// const dropdownItem=document.querySelectorAll('.dropdown-item');
// let optionsList=document.querySelector('.dropdown-menu li');
// let searchInput=document.getElementById('search');
// searchInput.addEventListener('keyup',function(){
//   searchValue=searchInput.value.toLowerCase();
//   for (let i = 0; i < dropdownItem.length; i++) {
//     // const element = dropdownItem[i];
//     // if(element.textContent.toLowerCase().indexOf(searchValue)>-1){
//     //   dropdownItem[i].style.display=''
//     console.log(i);
//     }
    
//   })

let options=document.querySelector('.dropdown-menu');
let optionsList=document.querySelector('.optionsList');
let optionsearch=document.querySelector('.search')

optionsearch.addEventListener('keyup',function(){
  let filter = optionsearch.value.toLowerCase();
  li=options.getElementsByClassName('optionsList');
  for (let i = 0; i < li.length; i++) {
    liCount = li[i];
    textValue=liCount.textContent || liCount.innerText;
    if(textValue.toLowerCase().indexOf(filter) >-1){
      li[i].style.display='';
    }else{
      li[i].style.display='none';

      }
    }
    
  })

