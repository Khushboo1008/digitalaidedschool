export const SLICK_SETTING = {
    dots: true,
         infinite: true,
         speed: 1000,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dotsClass: "quiz__carousel__dot",
        easing: "ease-out",
        autoplay: true,
     autoplaySpeed: 2000,
    pauseOnHover: false,
    lazyload: true,
         responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2 }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3 }
        }
      ]
}