$(document).ready(function(){
    $(".mainSlider").slick({
            vertical:true,
            verticalSwiping:true,
            dots: false,
            arrows:true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,    
            prevArrow:'<div class="btn01"><a href="#">Prev</a></div>',
            nextArrow:'<div class="btn02"><a href="#">Next</a></div>',
      });
})