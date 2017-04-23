$(document).ready(function(){
     var startingPos = 0; /* << This is the value you need to change in order to position the parallax image. The number represents the pixel value of the margin-top. */
   /* $('#home').css('background-position','50% ' + startingPos + 'px');*/
    
    $(window).scroll(function(){    
        var scrl_tp = $(this).scrollTop();
        if(scrl_tp >= 130){
            $('nav').addClass('transparent_black');
            console.log("BLACK");
        }else{
            $('nav').removeClass('transparent_black');
            console.log("TRANSPARENT");
        }
        /*$('#home').css('background-position','50% ' + (parseInt(-scrl_tp/4) + startingPos)+ 'px');*/
    });     
    
    /*  Smooth scrolling nav ...........................................  */
    $(function () {
        $('a[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                /* Finding the page offset height and offsetting it by the height of the banner so
                  that the page scrolls to the correct place, and the banner doesn't cover the header. */
                var customHeight = (target.offset().top)/* - ($("#customBanner").height() - 5);*/
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: customHeight
                    }, 1000);
                    return false;
                }
            }
        });
    });
});//End Ready

