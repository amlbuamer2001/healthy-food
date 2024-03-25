/// <reference types="./../@types/jquery" />

// $(document).ready(function() {
//     $('.logo-carousel').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       arrows: true,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [{
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4
//         }
//       }, {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 2
//         }
//       }]
//     });
//   });

    $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:6,
            }
        }
    });
