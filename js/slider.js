let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slide-item')
    document.querySelector('.slider').appendChild(slides[0])
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slide-item')
    document.querySelector('.slider').prepend(slides[slides.length - 1]) // here the length of slides = 6
})