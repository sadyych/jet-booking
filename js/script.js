// ---------------Burger------------------------------
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".header__menu");
var body = document.querySelector("body");
var logo = document.querySelector(".header__logo");
var logo_white = document.querySelector(".header__logo-white");
var reg_button = document.querySelector(".header__reg");
var sign_button = document.querySelector(".header__sign");
var header_buttons = document.querySelector(".header__btns");
var main_screen = document.querySelector(".main-page");
var private_jet = document.querySelector(".private-jet");
var specification = document.querySelector(".specification");
var lux_charters = document.querySelector(".luxury-charters");
var membership = document.querySelector(".membership");
var footer = document.querySelector(".footer");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
  logo.classList.toggle("active");
  logo_white.classList.toggle("active");
  reg_button.classList.toggle("active");
  sign_button.classList.toggle("active");
  header_buttons.classList.toggle("active");
  main_screen.classList.toggle("active");
  private_jet.classList.toggle("active");
  specification.classList.toggle("active");
  lux_charters.classList.toggle("active");
  membership.classList.toggle("active");
  footer.classList.toggle("active");
});
var link = document.querySelectorAll(".header__link");

link.forEach(function (link) {
  link.addEventListener("click", function (event) {
    main_screen.classList.remove("active");
    private_jet.classList.remove("active");
    specification.classList.remove("active");
    lux_charters.classList.remove("active");
    membership.classList.remove("active");
    footer.classList.remove("active");
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
    logo.classList.remove("active");
    logo_white.classList.remove("active");
    reg_button.classList.remove("active");
    sign_button.classList.remove("active");
    header_buttons.classList.remove("active");
  });
});

//-------------------Planes-Swiper--------------------------
const planesSwiper = new Swiper(".planes-slider", {
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    589: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
const membershipSwiper = new Swiper(".membership-slider", {
  centeredSlides: true,
  initialSlide: 1,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    500: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
  },
  loop: true,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: -40,
    depth: 100,
    slideShadows: false,
  },
});
