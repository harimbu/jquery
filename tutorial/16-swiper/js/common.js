$('.header_container').load('../inc/header.html')

// parallax
$('.banner').parallax({imageSrc: '../../images/slide_01.jpg'});

// gotop
$('.goTop').on('click', function() {
    $('html').animate({scrollTop :0}, 'fast')
})

$(window).on('scroll', function() {

    if($(this).scrollTop() > 200) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }


    if($(this).scrollTop() > 500) {
        $('.goTop').fadeIn()
    } else {
        $('.goTop').fadeOut()
    }
})