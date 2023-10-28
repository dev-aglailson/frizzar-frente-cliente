$(document).ready(function(){

    var btnsStories = document.querySelectorAll('.btn-storie')
    var slideStory  = document.querySelector('.box-story-grande-slide')
    var slideStoryAberto = false

    btnsStories.forEach(btn=>{
        btn.addEventListener('click', function(){

            toggleSlideStory()
    
        })
    
    })

    function toggleSlideStory(){

        if(!slideStoryAberto){
            slideStory.classList.add('open-slide-story')
            slideStoryAberto = true
        }else{
            slideStory.classList.remove('open-slide-story')
            slideStoryAberto = false
        }

    }

    slideStory.addEventListener('click', function(e){

        if((e.target.id == 'box-story-grande-slide' ||  e.target.id == 'content-slide') && slideStoryAberto){
            toggleSlideStory()
        }

    })
    
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

    const swiperSlideStory = new Swiper('.slide-story-grande', {
        effect: 'cards',
        grabCursor: true,

        
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
        freeMode:{
            momentum:true,
        },
        speed:300,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            // when window width is >= 480px
            680: {
              slidesPerView: 6,
              spaceBetween: 0
            },
        },

        
    });

})