var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  body.style.overflow = "hidden";
})
