let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

let icon = document.querySelector('#search-icon');
icon.onclick = () => {
    document.querySelector('#search-form').classList.add('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });

  var swiper = new Swiper(".swiper-wrapper", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
 
  });

  