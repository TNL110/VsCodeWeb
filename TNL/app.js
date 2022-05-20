$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    // button next, previous
    arrows: false,
    dots : true,
    prevArrow: 
      "<button type='button' class='slick-prev slick-arrow'><ion-icon name='arrow-back-outline'></ion-icon></button>",
    nextArrow: 
      "<button type='button' class='slick-next slick-arrow'><ion-icon name='arrow-forward-outline'></ion-icon></button>",

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ] 
  }

  );
});