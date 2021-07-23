export const SETTINGS = (infinite = false, autoplay = false, toShow=3, toScroll = 1) => {
    return ({
        dots: true,
        infinite,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "quiz__carousel__dot",
        easing: "ease-out",
        pauseOnHover: false,
        autoplay,
        autoplaySpeed: 3000
        // responsive: [
        //     {
        //         breakpoint: 320,
        //         settings: { slidesToShow: 1, slidesToScroll: 1 }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: { slidesToShow: 2, slidesToScroll: 1 }
        //     },
        //     {
        //         breakpoint: 1024,
        //         settings: { slidesToShow: 3, slidesToScroll: 1 }
        //     }
        // ]
    })
}