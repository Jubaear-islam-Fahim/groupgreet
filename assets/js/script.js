(function ($) {
    'use strict'

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.dropdown-menu').forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })
    });

    $(document).ready(function () {
        $('select:not(.ignore)').niceSelect();
        FastClick.attach(document.body);
    });


    if ($('.GroupGreeting-slid').length) {
        $('.GroupGreeting-slid').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }

    if ($('.testimonial-slid').length) {
        $('.testimonial-slid').slick({
            dots: true,
            autoplay: true,
            customPaging: function (slider, i) {
                return '<i class="fas fa-circle"></i>';
            }
        });
    }
    if ($('.back-card-slid').length) {
        $('.back-card-slid').slick({
            dots: true,
            autoplay: true,
            customPaging: function (slider, i) {
                return '<i class="fas fa-circle"></i>';
            }
        });
    }

    if ($('.demoSwiper').length) {
        var swiper = new Swiper(".demoSwiper", {
            effect: "coverflow",
            loop: false,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
            },
            breakpoints: {
                1000: {
                    coverflowEffect: {
                        depth: 250,
                        modifier: 2,
                        slideShadows: true,
                    },
                },
                640: {
                    coverflowEffect: {
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    },
                },
                375: {
                    coverflowEffect: {
                        depth: 20,
                        modifier: 1,
                        slideShadows: true,
                    },
                }
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if ($('.orientation-item').length) {
        $('.orientation-item').click(function () {
            $('.orientation-item').removeClass("active");
            $(this).addClass("active");
        });
    }
     



})(jQuery);