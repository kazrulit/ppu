$(document).ready(function(){
    var menu = $('#header-menu');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            menu.addClass('sticky');
        } else {
            menu.removeClass('sticky');
        }


    }

    document.onscroll = scroll;
})