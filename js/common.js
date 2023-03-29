const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  effect: "fade",
});
