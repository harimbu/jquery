// console.log($('li'));
$('li:first').css('border', '5px solid red') // 첫 번째 요소
$('li').first().css('border', '5px solid blue')
$('li:last').css('border', '5px solid red') // 마지막 요소
$('li').last().css('border', '5px solid blue')
$('li:odd').css('border', '5px solid green') // 홀수 인덱스
$('li:even').css('border', '5px solid red') // 짝수 인덱스

$('li:first-of-type').css('border', '5px solid blue') // 요소 무리 중 첫 번째 요소
$('li:last-of-type').css('border', '5px solid blue') // 요소 무리 중 마지막 요소
$('li:nth-child(2)').css('fontSize', 30) // 요소 무리 중 n번째 요소
$('li:nth-child(3n)').css('backgroundColor', '#ccc') // 요소 무리 중 3배수 번째 요소

$('li:eq(1)').css('border', '5px solid black') // 요소 중 인덱스 1 인 요소
$('li').eq(8).css('border', '5px solid black') // 요소 중 인덱스 8 인 요소
$('li:gt(5)').css('border', '5px solid pink') // 인덱스 5보다 큰 요소
$('li:lt(4)').css('border', '5px solid pink') // 인덱스 4보다 작은 요소
$('li').slice(7).css('border', '10px solid #ccc') // 요소 중 인덱스 7부터 전부