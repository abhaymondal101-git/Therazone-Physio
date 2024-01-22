
$( document ).ready(function() {
   
    // Section start=====================================
    $('.train-driver-card-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1800,
        autoplayHoverPause: true,
        dots: false,
        items: 1,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            768:{
                items:2
            },
            1000:{
                items: 3
            },
            1366:{
                items: 4
            }
        }
    });

 
});



