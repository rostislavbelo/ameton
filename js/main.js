window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const swiper = () => new window.Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,

      navigation: {
        nextEl: '.swiper__btn-right',
        prevEl: '.swiper__btn-left',
      },

    });
    swiper();
  });
});
