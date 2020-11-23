var mySwiper = new Swiper('.swiper-1', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    }
});

var mySwiper = new Swiper('.swiper-2', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var mySwiper = new Swiper('.swiper-3', {
    // Optional parameters
    autoplay: {
        delay: 2000,
    },
    direction: 'vertical',
    loop: true,
    simulateTouch: false,
});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

var mySwiper = new Swiper('.swiper-5', {
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 480px
        780: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1000: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});