// 요소의 넓이와 높이
// width(), height()
// innerWidth(), innerHeight 여백을 포함한 넓이와 높이
// outerWidth(), outerHeight 여백 및 선을 포함한 넓이와 높이

console.log($('.p1').width());
console.log($('.p1').innerWidth());
console.log($('.p1').outerWidth());

$('.p2').outerWidth(100).outerHeight(100)

// 요소의 위치
// offset() 요소가 문서에서 가로, 세로 얼마나 떨어져 있는지에 대한 값을 반환
// position() 기준이 되는 요소에서의 가로세로 위치값
console.log($('.box').offset().top);
console.log($('.box').offset().left);
console.log($('.box').position().top);
console.log($('.box').position().left);

// 스크롤바 위치
$(window).on('scroll', function() {
    console.log($(window).scrollTop());
})


