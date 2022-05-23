window.addEventListener('load', function(){
    new Glider(document.querySelector('.skill__list'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                // screens greater than >= 400px
                breakpoint: 400,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
            {
              // screens greater than >= 650px
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },{
              // screens greater than >= 800px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            }
          ]
    });
})