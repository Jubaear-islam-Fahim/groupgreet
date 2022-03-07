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
            customPaging: function (slider, i) {
                return '<i class="fas fa-circle"></i>';
            }
        });
    }
    if ($('.back-card-slid').length) {
        $('.back-card-slid').slick({
            dots: true,
            customPaging: function (slider, i) {
                return '<i class="fas fa-circle"></i>';
            }
        });
    }

    if ($('.').length) { }


})(jQuery);