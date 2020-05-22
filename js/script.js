// timer functionality
// --------------------------------------------------------------------
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const deadline = document.querySelector('.timer__deadline');
  const deadlineFormat = document.querySelectorAll('.deadline-format h4');
  // display the end date of the promo
  const giveaway = document.querySelector('.giveaway');
  
  // set the end date of the promo
  const promoDay = new Date().getDate();
  const promoMonth = new Date().getMonth();
  const promoYear = new Date().getFullYear();
  // add number of days the promo lasts
  const endDate = new Date(promoYear, promoMonth, promoDay, 0 + 34, 0, 0);
  
  // get the info from endDate and assign it to vars
  const endYear = endDate.getFullYear();
  const endMonth = months[endDate.getMonth()];
  const endDay = weekdays[endDate.getDay()];
  const endHour = endDate.getHours();
  const endMinutes = endDate.getMinutes();
  const endSeconds = endDate.getSeconds();
  
  // console.log(endYear, endMonth, endDay, endHour, endMinutes, endSeconds);
  // show the end date as a string inside the giveaway container
  //   giveaway.textContent = `our offer ends ${endDay} ${endMonth} ${endYear}, at ${endHour}:${endMinutes}:${endSeconds}`;
  
  function promoCounter() {
    const today = new Date().getTime();
    const endDateTime = endDate - today;
  
    // get 1day 1hour 1minute 1sec
    // const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // console.log(hoursEnd, minsEnd, secEnd);
  
    // calculate to get remaining time till expire
    // let days = Math.floor(endDateTime / oneDay);
    let hours = Math.floor(endDateTime / oneHour);
    let minutes = Math.floor((endDateTime % oneHour) / oneMinute);
    let seconds = Math.floor((endDateTime % oneMinute) / 1000);
    // console.log(days, hours, minutes, seconds);
  
    // put info in array
    const values = [hours, minutes, seconds];
  
    // format to add a 0 at index 0 if numbers are less than 10
    function formatItem(item) {
      if(item < 10) {
        item = `0${item}`;
      }
  
      return item;
    }
  
    // loop through html elements and assign from the val array
    // for each element, the value[index]
    deadlineFormat.forEach((item, index) => {
      item.innerHTML = formatItem(values[index]);
    });
  
    if(endDateTime < 0) {
      clearInterval(counter);
      deadline.innerHTML = `<h4 class="expired">The offer has expired!</h4>`;
    }
  }
  
  let counter = setInterval(promoCounter, 1000);
  promoCounter();

// menu functionality
// --------------------------------------------------------------------
const navItemBtn = document.querySelector('.navigation__link');
const navSubMenu = document.querySelector('.navigation__submenu');
const navIco = document.querySelector('.navigation__chev--cat');

navItemBtn.addEventListener('click', (e) => {
  navSubMenu.classList.toggle('navigation__submenu--active');

  if(!navSubMenu.classList.contains('navigation__submenu--active')) {
    e.target.nextElementSibling.classList.add('fa-chevron-down');
    e.target.nextElementSibling.classList.remove('fa-chevron-up');
  } else {
    e.target.nextElementSibling.classList.remove('fa-chevron-down');
    e.target.nextElementSibling.classList.add('fa-chevron-up');
  }
  e.preventDefault();
});

// swiper gallery func
// --------------------------------------------------------------------

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 5,
    },
  }
});

// menu bg change on stick to top #desktop only
const nav = document.querySelector('.navigation__submenu');

window.addEventListener('scroll', () => {
  el = scrollY;
  if(scrollY > 400) {
    nav.style.backgroundColor = '#fab7c0';
    nav.style.paddingBottom = '.5rem';
  }
});