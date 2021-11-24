$(document).ready(function () {
  $('.partners__list').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
