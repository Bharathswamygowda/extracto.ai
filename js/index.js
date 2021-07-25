$('.owl-carousel').owlCarousel({
    loop:false,
    rewind:true,
    center: false,
    margin:30,
    stagePadding:30,
    nav:true,
    dots:false,
    navText:["<i class='icofont-arrow-left'></i>","<i class='icofont-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})