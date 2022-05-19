//гамбургер меню
const hamburger = () => {
  const hamburgerBtn = document.querySelector('.header__hamburger-btn');
  const menu = document.querySelector('.header__menu');

  hamburgerBtn.addEventListener('click', () => {
    if (hamburgerBtn.classList.contains('header__hamburger-btn--active')) {
      hamburgerBtn.classList.remove('header__hamburger-btn--active');
      menu.classList.remove('header__menu--active')
    } else if (hamburgerBtn.classList.contains('header__hamburger-btn')) {
      hamburgerBtn.classList.add('header__hamburger-btn--active');
      menu.classList.add('header__menu--active')
    }
  })
}
hamburger();

//поиск на кнопке
const searchSpinner = () => {
  const searchBtn = document.querySelector('.top__search-btn');
  const progressBar = document.querySelector('.top__progress-line-bg');
  let elem = document.getElementById('top__progress-line');

  searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('top__search-btn--active');
    progressBar.classList.toggle('top__progress-line-bg--active');
    animate();
  });
  //анимация

  let count = 0;
  let idInterval;

  const animate = () => {
    count++
    idInterval = requestAnimationFrame(animate);

    if (count < 101) {
      elem.style.width = count + '%';
    } else if (count >= 101) {
      cancelAnimationFrame(idInterval);
      count = 0;
    };
  };
}
searchSpinner();

//Трек номер на форме поиска
const searchTreck = () => {
  const treckNum = document.querySelectorAll('.top__search-link');
  let inputForm = document.querySelector('.top__search-input');

  treckNum.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      inputForm.value = item.textContent;
    });
  });
}
searchTreck();

//Переключатель языков
const removeFlag = () => {
  const boxFlag = document.querySelector('.header__lang-box');
  const dropDown = document.querySelector('.header__dropdown');
  const dropDownItem = document.querySelectorAll('.header__dropdown-item');
  const langText = document.querySelector('.header__lang-text');
  const flagEn = document.querySelector('.header__lang-flag--en');
  const flagRu = document.querySelector('.header__lang-flag--ru');

  boxFlag.addEventListener('click', () => {
    dropDown.classList.toggle('header__dropdown--active');
  });

  dropDownItem.forEach((item, index) => {
    item.addEventListener('click', () => {
      langText.textContent = item.textContent;
      if (index == 0) {
        flagEn.style.display = 'block';
        flagRu.style.display = 'none';
      } else if (index == 1) {
        flagRu.style.display = 'block';
        flagEn.style.display = 'none';
      }
      dropDown.classList.remove('header__dropdown--active');
    })
  })

};
removeFlag();

const tabDeliveryTime = () => {
  const tabBtn = document.querySelectorAll('.delivery__tabs-btn');
  const tabContent = document.querySelectorAll('.time__content');

  tabBtn.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('delivery__tabs-btn--active')) {

      } else {
        tabBtn.forEach((item, i) => {
          item.classList.remove('delivery__tabs-btn--active');
          tabContent[i].classList.remove('time__content--active');
        });
        this.classList.add('delivery__tabs-btn--active');
        tabContent[i].classList.add('time__content--active');
      }
    });
  });
};
tabDeliveryTime();
const tabFaq = () => {
  const tabItem = document.querySelectorAll('.faq__list-item');

  tabItem.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('faq__list-item')) {
        this.classList.toggle('faq__list-item--active');
      }
    });
  });
};
tabFaq();

const bufer = () => {
  const writeBtn = document.querySelector('.tracking-widget__aside-btn');
  const inputEl = document.querySelector('.tracking-widget__aside-input');

  writeBtn.addEventListener('click', () => {
    inputEl.select();
    document.execCommand("copy");
  });
}
bufer();



//jQuery---
$(function () {

  $(".services-pochta__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#E24949",
    spacing: "2px",
    fullStar: true,
  }).on("rateyo.change", function (e, data) {
    let rating = data.rating;
    $(this).parent().find('.services-pochta__star-result').text(rating);
  });

  $(".services-pochta__top-box-star").rateYo({
    starWidth: "20px",
    normalFill: "transparent",
    ratedFill: "#E24949",
    spacing: "2px",
    readOnly: true,
    // rating: '5',
    starSvg: '<svg width = "21" height = "20" viewBox = "0 0 21 20" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><path d = "M10.4435 1.61908L13.085 6.97187L13.2013 7.2076L13.4615 7.2454L19.3689 8.10401L15.0943 12.2704L14.906 12.4538L14.9505 12.7129L15.9595 18.5965L10.6762 15.8189L10.4436 15.6965L10.2109 15.8189L4.92719 18.5966L5.93626 12.7129L5.98069 12.4538L5.79244 12.2704L1.51786 8.10401L7.42526 7.2454L7.68538 7.2076L7.80171 6.97189L10.4435 1.61908Z"/></svg>',
  });

  $(".poshta-reviews__box-star").rateYo({
    starWidth: "20px",
    normalFill: "transparent",
    ratedFill: "#E24949",
    spacing: "2px",
    readOnly: true,
    starSvg: '<svg width = "21" height = "20" viewBox = "0 0 21 20" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><path d = "M10.4435 1.61908L13.085 6.97187L13.2013 7.2076L13.4615 7.2454L19.3689 8.10401L15.0943 12.2704L14.906 12.4538L14.9505 12.7129L15.9595 18.5965L10.6762 15.8189L10.4436 15.6965L10.2109 15.8189L4.92719 18.5966L5.93626 12.7129L5.98069 12.4538L5.79244 12.2704L1.51786 8.10401L7.42526 7.2454L7.68538 7.2076L7.80171 6.97189L10.4435 1.61908Z"/></svg>',
  });

  const mixin1 = document.querySelector('.delivery__content');
  const mixin2 = document.querySelector('.tracking__content');
  const mixin3 = document.querySelector('.post-indexes__content');
  const mixin4 = document.querySelector('.time__box');

  if (mixin1) {
    mixitup('.delivery__content', {
      selectors: {
        control: '.mixitup'
      }
    })
  };

  if (mixin2) {
    mixitup('.tracking__content', {
      selectors: {
        control: '.mixitup'
      }
    })
  };

  if (mixin3) {
    mixitup('.post-indexes__content', {
      selectors: {
        control: '.mixitup'
      }
    })
  };
  if (mixin4) {
    mixitup('.time__box', {
      selectors: {
        control: '.mixitup'
      }
    })
  };
});