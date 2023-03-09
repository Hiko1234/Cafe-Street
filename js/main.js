// search

// click on the search button
const searchBtn = document.getElementById('search-icon');
const searchInput = document.querySelector('.search-form__item');

searchBtn.addEventListener('click', function () {
    searchInput.classList.toggle('active');
})

// ---------------

// burger

const navBtn = document.querySelector('.header__burger');
const navBurger = document.querySelector('.header__nav');

navBtn.addEventListener('click', function () {
    navBurger.classList.toggle('burger-active');
    navBtn.classList.toggle('burger-close')
})

// ---------------

// remove burger nav when we click on link

const MOBILE_NAV_LINKS = document.querySelectorAll('.header__nav_list-link');

MOBILE_NAV_LINKS.forEach((link) => {
  link.addEventListener('click', () => {
    navBurger.classList.toggle('burger-active');
    navBtn.classList.toggle('burger-close')
  })
})
// slider (section: popular)

$(document).ready(function(){
    $('.popular__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    })
})

// ---------------

// more btn

const MENU = [
  {
    id: 1,
    img: 'img/menu-section/menu-4.jpg',
    name: 'Cappucino',
    price: '12 K',
    rating: '4,8',
    comment: 'Hot Cappucino',
  },
  {
    id: 2,
    img: 'img/menu-section/menu-5.jpg',
    name: 'Moccacinno',
    price: '12 K',
    rating: '4,8',
    comment: 'Hot Moccacino',
  },
  {
    id: 3,
    img: 'img/menu-section/menu-6.jpg',
    name: 'Waffle Ice Crem',
    price: '12 K',
    rating: '4,8',
    comment: 'Wafle with Ice cream',
  }
];

const MENU_MORE_BTN = document.querySelector('.menu__btn');

MENU_MORE_BTN.addEventListener('click', function () {
  let html = '';
  MENU.forEach((item) => {
    html += `
    <div class="menu__card">
        <div class="menu__card_container">
            <div class="menu__card_img-wrapper">
                <img class="menu-img" src="${item.img}" alt="">
            </div>
            <div class="menu__card_rating rating">
                <span>${item.rating}</span><img class="popular__slide_rating-img" src="img/star.png" alt="">
            </div>
            <div class="menu__card_name-cost">
                <div class="menu__card_name">
                    <span>${item.name}</span>
                </div>
                <div class="menu__card_cost">
                    <span>${item.price}</span>
                </div>
            </div>
            <div class="menu__card_info-btn">
                <div class="menu__card_info text">
                    <span>${item.comment}</span>
                </div>
                <a class="menu__card_buy-btn buy-btn" href="#"><img class="buy-img"
                    src="img/buy-btn.png" alt=""></a>
            </div>
        </div>
    </div>`
  });
  const TARGER = document.querySelector('#more-card');
  TARGER.innerHTML = html;
  MENU_MORE_BTN.classList.add('d-none');
})

// ---------------

// slider (section: visitors)

$(document).ready(function(){
  $('.visitors__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 2,
      centerPadding: '30px',
      speed: 1000,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
  })
})

// ---------------