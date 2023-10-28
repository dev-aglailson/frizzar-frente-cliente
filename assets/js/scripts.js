$(document).ready(function(){

    const swiperBanner = new Swiper('.banner', {
        loop:true,
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

    const swiperStory = new Swiper('.slide-story', {
        loop:false,
        effect:'slide',
        margin:0,
        autoplay: {
            delay: 300,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
            waitForTransition:true,
            enabled:false,
        },
        speed:1000,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            // when window width is >= 480px
            680: {
              slidesPerView: 6,
              spaceBetween: 30
            },
        },

        
    });

})