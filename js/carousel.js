let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slider = document.querySelector('.slider')
let slideItem = document.querySelector('.slide-item')

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slide-item')
    slider.appendChild(slides[0])
})

slideItem.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slide-item')
    slider.appendChild(slides[0])
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slide-item')
    slider.prepend(slides[slides.length - 1])
})