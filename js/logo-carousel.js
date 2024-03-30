/// <reference types="./../@types/jquery" />
    $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:4,
            },
            1000:{
                items:6,
            }
        }
    });
