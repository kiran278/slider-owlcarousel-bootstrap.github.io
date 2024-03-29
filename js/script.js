//Owl Carousel

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $(".owl-carousel").on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            $(".owl-carousel").trigger('next.owl');
        } else {
            $(".owl-carousel").trigger('prev.owl');
        }
        e.preventDefault();
    });
});