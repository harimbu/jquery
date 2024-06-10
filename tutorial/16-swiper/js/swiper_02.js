// swiper_02
const swiper2 = new Swiper('.swiper_02', {
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },
});

$('.xi-play').hide()

$('.xi-pause').on('click', function() {
    $(this).hide()
    $('.xi-play').show()
    swiper2.autoplay.stop()
})

$('.xi-play').on('click', function() {
    $(this).hide()
    $('.xi-pause').show()
    swiper2.autoplay.start()
})