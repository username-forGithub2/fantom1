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

const swiper_three_images = new Swiper('.three-image-swiper', {
  breakpoints: {
    300: {
      slidesPerView: 'auto',
      spaceBetween: 24,
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
  
    jQuery('.select select').styler();
  
  });
})(jQuery);

let getBurger = document.querySelector(".burger-wrapper")
let getOverlay = document.querySelector(".black-overlay")
let getClose = document.querySelector(".close")
console.log(getBurger );
if(getBurger){
  getBurger.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("active")
  })
}
if(getOverlay){
  getOverlay.addEventListener("click", ()=>{
    document.querySelector("body").classList.remove("active")
  })
}
if(getClose){
  getClose.addEventListener("click", ()=>{
    document.querySelector("body").classList.remove("active")
  })
}

const getNavwrapper = document.querySelector(".nav-wrapper")
const chatObserver = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {
    document.querySelector("body").classList.add("intersecting")
  } else {
    document.querySelector("body").classList.remove("intersecting")
  }
}, {threshold: 0.5, rootMargin: "0px 0px 0px 0px"})
chatObserver.observe(getNavwrapper)

// let getChat = document.querySelector(".chat-wrapper")
// let getPopupClose = document.querySelector(".popup-wrapper")
// getChat.addEventListener("click", ()=>{
//   document.querySelector("body").classList.add("chat")
// })
// getPopupClose.addEventListener("click", ()=>{
//   document.querySelector("body").classList.remove("chat")
// })