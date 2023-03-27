
new Swiper('.team-swiper',{

    // стрелки
    navigation: {
        nextEl: '.team-slide__arrow.swiper-button-next',
        prevEl: '.team-slide__arrow.swiper-button-prev',
      },

    // Перетаскивание на ПК
    simulateTouch: true,
    
    // Чувствительность свайпа
    touchRatio: 1,

    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,

    // Курсор перетаскивания
    grabCursor: true,

    // Управление клавиатурой
    keyboard: {
        // включить/выключить
        enabled: true,

        // Вкл/Выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true,

        // включить/выключить управление клавиатурой PageUp, pageDown
        pageUpDown: true,
    },
    // Автовысота
    autoHeihgt: true,

    // Количство слайдов для показа
    slidesPerView: 4,

    // Отступ между слайдами
    spaceBetween: 30,

    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        
      },
});

new Swiper('.testimonials-swiper',{


  navigation: {
      nextEl: '.testimonials-arrow.swiper-button-next',
      prevEl: '.testimonials-arrow.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  

    
  // direction: 'vertical',
  // Перетаскивание на ПК
  simulateTouch: true,
  
  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
      // отслеживать состояние
      watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
      // включить/выключить
      enabled: true,

      // Вкл/Выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // включить/выключить управление клавиатурой PageUp, pageDown
      pageUpDown: true,
  },
  // Автовысота
  autoHeihgt: true,
  // Количство слайдов для показа
  slidesPerView: 1,

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 1,
    }
}, 
  // Отступ между слайдами
  spaceBetween: 30,

});