// swiper_01
const swiper = new Swiper('.swiper_01', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});