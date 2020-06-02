// slider with touch and arrows
var mySwiper = new Swiper('.swiper-head', {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// swipe functionality
var swiper = new Swiper('.swiper-packs', {
    slidesPerView: 2.5,
    // centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// filter swipe showcase functionality
var swiper = new Swiper('.swiper-recommend', {
    slidesPerView: 6,
    spaceBetween: 20,
    slidesPerGroup: 6,
    //loop: true,
    //loopFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2
        },
        668: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4
        },
        924: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    }
});



// popup and switch between cats
const btns = document.querySelectorAll(".description__tabs__btn");
const descContent = document.querySelector('.description');
const boxes = document.querySelectorAll('.description__content__box');

descContent.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    // console.log(e.target.dataset.id);
    if (id) {
        // filter btns and set active class on target
        btns.forEach(btn => {
            btn.classList.remove('description__tabs__btn--active');
            e.target.classList.add('description__tabs__btn--active');
        });
        // filter through boxes and set description__content__box--active class on target
        boxes.forEach(box => {
            box.classList.remove('description__content__box--active');
            // console.log(box);
        });
        // get the element with the target id ;)
        const element = document.getElementById(id);
        element.classList.add('description__content__box--active');
    }
});

// toggle dropdowns
const link = document.querySelectorAll('.footer__link');
const fmenu = document.querySelector('.footer__menu');
const fsub = document.querySelectorAll('.footer__submenu');

fmenu.addEventListener('click', (e) => {
    const item = e.target.dataset.id;
    if (item) {
        fsub.forEach(sub => {
            sub.classList.remove('footer__submenu--active');
        });
        const el = document.getElementById(item);
        el.classList.add('footer__submenu--active');
    }
    e.preventDefault();
});


// toggle recommended
const recommendHidden = document.querySelector('.recommended__hidden');
const recommendBtn = document.querySelector('.btn-show');

recommendBtn.addEventListener('click', (e) => {
    recommendHidden.classList.toggle('recommended__show');

    if (recommendHidden.classList.contains('recommended__show')) {
        recommendBtn.innerText = 'Ascunde recomandarile';
    } else {
        recommendBtn.innerText = 'Vezi toate recomandarile';
    }
    e.preventDefault();
});


// drag list items
const slider = document.querySelector('.info');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the fn from running
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;

    e.preventDefault();
});

// popup specs & desc
const popupSpecsBtn = document.querySelector('.view-specs');
const popupRevBtn = document.querySelectorAll('.view-review');
const popupCartBtn = document.querySelectorAll('.btn-cart');
const popupDescBtn = document.querySelector('.view-desc');

const popupSpecs = document.querySelector('.popup-specs');
const popupRev = document.querySelector('.popup-review');
const popupDesc = document.querySelector('.popup-desc');
const popupCart = document.querySelector('.popup-cart');

const popup = document.querySelectorAll('.popup');

const popupClose = document.querySelectorAll('.popup__close');
const revCancel = document.querySelector('.review__footer__link');

function popupTestPop(name) {
    name.classList.add('popup--active');
    document.body.style.overflow = 'hidden';
}

function popupTestUnPop(name) {
    name.classList.remove('popup--active');
    document.body.style.overflow = 'visible';
}

function popupClosePop(name) {
    name.classList.remove('popup--active');
    document.body.style.overflow = 'visible';
}

popup.forEach(pop => {
    pop.addEventListener('click', (e) => {
        evt = e.target;
        if (evt.classList.contains('popup--active')) {
            popupClosePop(pop);
        }
    });
});

popupSpecsBtn.addEventListener('click', (e) => {
    if (!popupSpecs.classList.contains('popup--active')) {
        popupSpecs.classList.add('popup--active');
    } else { popupSpecs.classList.remove('popup--active'); }
    e.preventDefault();
});

popupDescBtn.addEventListener('click', (e) => {
    if (!popupDesc.classList.contains('popup--active')) {
        popupTestPop(popupDesc);
    } else { popupTestUnPop(popupDesc); }
    e.preventDefault();
});

popupRevBtn.forEach(revBtn => {
    revBtn.addEventListener('click', (e) => {
        if (!popupRev.classList.contains('popup--active')) {
            popupTestPop(popupRev);
        } else { popupTestUnPop(popupRev); }
        e.preventDefault();
    });
});

popupCartBtn.forEach(cartBtn => {
    cartBtn.addEventListener('click', (e) => {
        if (!popupCart.classList.contains('popup--active')) {
            popupTestPop(popupCart);

            // filter swipe showcase functionality
            var swiper = new Swiper('.swiper-items', {
                slidesPerView: 4,
                spaceBetween: 5,
                slidesPerGroup: 4,
                //loop: true,
                //loopFillGroupWithBlank: true,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        slidesPerGroup: 1
                    },
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerGroup: 2
                    },
                    668: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                        slidesPerGroup: 4
                    },
                }
            });
        } else { popupTestUnPop(popupCart); }
        e.preventDefault();
    });
});

revCancel.addEventListener('click', (e) => {
    if (popupRev.classList.contains('popup--active')) {
        popupClosePop(popupRev);
    }
    e.preventDefault();
});

popupClose.forEach(close => {
    close.addEventListener('click', (e) => {
        popupClosePop(popupSpecs);
        popupClosePop(popupDesc);
        popupClosePop(popupRev);
        popupClosePop(popupCart);
        e.preventDefault();
    });
});

// upload some images
function previewImages() {

    var preview = document.querySelector('.review__add-image__placeholder');

    if (this.files) {
        [].forEach.call(this.files, readAndPreview);
    }

    function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria
        if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
            return alert(file.name + " is not an image");
        } // else...

        var reader = new FileReader();

        reader.addEventListener("load", function () {
            const wrapSpan = document.createElement('span');
            wrapSpan.classList.add('review__add-image__container');

            const image = document.createElement('img');
            image.classList.add('review__add-image__imgs');
            image.src = `${this.result}`;

            const closeLink = document.createElement('a');
            closeLink.classList.add('review__add-image__close');
            closeLink.href = '#';

            const closeIco = document.createElement('i');
            closeIco.classList.add('icon-close');

            // append icon to link
            closeLink.appendChild(closeIco);

            wrapSpan.appendChild(image);
            wrapSpan.appendChild(closeLink);

            preview.appendChild(wrapSpan);

            closeLink.addEventListener('click', e => {
                const img = e.target.parentElement.previousElementSibling;

                if (img) {
                    img.remove();
                    closeLink.remove();
                }
                e.preventDefault();
            });
        });

        reader.readAsDataURL(file);
    }
}

document.querySelector('#review__img').addEventListener("change", previewImages);

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
        if (item < 10) {
            item = `0${item}`;
        }

        return item;
    }

    // loop through html elements and assign from the val array
    // for each element, the value[index]
    deadlineFormat.forEach((item, index) => {
        item.innerHTML = formatItem(values[index]);
    });

    if (endDateTime < 0) {
        clearInterval(counter);
        deadline.innerHTML = `<h4 class="expired">The offer has expired!</h4>`;
    }
}

let counter = setInterval(promoCounter, 1000);
promoCounter();


// comments reply and replies toggle

//btns
const replyBtns = document.querySelectorAll('.comment-reply');
const repliesBtns = document.querySelectorAll('.comment-replies');
// content
const replyContent = document.querySelectorAll('.comment__reply');
const repliesContent = document.querySelectorAll('.comment__replies');

replyBtns.forEach(replyBtn => {
    replyBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        replyContent.forEach(content => {
            if (id) {
                content.classList.remove('comment__reply--active');
            }
        });
        const test = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
        test.classList.add('comment__reply--active');
        e.preventDefault();
    });
});

repliesBtns.forEach(repliesBtn => {
    repliesBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        repliesContent.forEach(content => {
            if (id) {
                content.classList.remove('comment__replies--active');
            }
        });
        const test = e.target.parentElement.parentElement.nextElementSibling;
        test.classList.add('comment__replies--active');
        e.preventDefault();
    });
});
