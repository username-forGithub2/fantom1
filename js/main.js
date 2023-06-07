const swiper = new Swiper('.home-slider', {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 80,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-home',
    prevEl: '.swiper-button-prev-home',
  },
});

const swiperblog = new Swiper('.home-blog-slider', {
  slidesPerView: 3,
  // centeredSlides: true,
  spaceBetween: 30,
  // loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-home-blog',
    prevEl: '.swiper-button-prev-home-blog',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

});

(function(jQuery) {
  jQuery(function() {
  
    $('.select select').styler();
  
  });
  })(jQuery);

  let getBurger = document.querySelector(".burger-wrapper")
  let getOverlay = document.querySelector(".black-overlay")
  let getClose = document.querySelector(".close")
  getBurger.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("active")
  })
  getOverlay.addEventListener("click", ()=>{
    document.querySelector("body").classList.remove("active")
  })
  getClose.addEventListener("click", ()=>{
    document.querySelector("body").classList.remove("active")
  })