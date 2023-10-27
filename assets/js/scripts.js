$(document).ready(function(){

    const swiperTimelinePassos = new Swiper('.banner', {
        loop:false,
        effect:'slide',
        autoplay: {
            delay: 300,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
            waitForTransition:true,
            enabled:false,
        },
        speed:1000,

        
    });

})