(function ($) {
    'use strict'

    document.addEventListener("DOMContentLoaded", function(){ 
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
        	element.addEventListener('click', function (e) {
        		e.stopPropagation();
        	});
        })
    }); 

    $(document).ready(function () {
        $('select:not(.ignore)').niceSelect();
        FastClick.attach(document.body);
    });    


    if ($('.').length) {}


})(jQuery);