//Scolling Code


$(document).ready(function() {
    // Smooth Scroll Code
    var scrollSelect = $('.scroll');

    scrollSelect.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    //Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollSelect.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('make-active');
                $(this).parent().siblings().removeClass('make-active');
            }
        });
    });

})