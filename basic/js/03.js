$('#list a[target]').css('color', 'red')
// target속성이 있는 a 요소
$('#list a[href^=https]').css('border', '5px solid green')
// href속성 https로 시작하는 a요소
$('#list a[href$=net]').css('border', '5px solid blue')
// href속성 net으로 끝나는 a요소
$('#list a[href*=google]').css('border', '5px solid red')
// href속성 google이 있는 a요소
$('li:hidden').css('display', 'block')


$('input:text').css('background', 'red')
// input 타입이 text인 요소
$('input:password').css('background', 'green')
// input 타입이 password인 요소

var v1 = $('#f3 :selected').val()
console.log(v1);

var v2 = $("#f4 :checked").val()
console.log(v2);

var v3 = $("#f5 :checked").val()
console.log(v3);

$('li:contains("구글")').css('background', 'orange')
// 텍스트를 포함한 요소
$('#f2').contents().filter('input').css('background', 'blue')
// 선택한 요소 전체를 반환
$('li a').has('span').css('border', '10px solid green')
// a 중에서 span을 가진 요소
$('li').not(':first').css('border', '4px solid aqua')
// 첫번재 요소가 아닌 전체
$('form section').filter('#f5').css('background', 'red')
// section중에서 id가 f5인 요소
$('form').find('#f4').css('background', 'pink')
// form안에서 id가 f4인 요소

// is() 메서드
console.log($('#list li').eq(3).is(':visible'));
console.log($('#list li').eq(3).is(':hidden'));
console.log($('#chk').is(':checked'));
console.log($('#chk2').is(':checked'));
