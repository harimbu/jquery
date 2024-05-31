$('#list a[target]').css('color', 'red')
// target속성이 있는 a 요소
$('#list a[href^=https]').css('border', '5px solid green')
// href속성 https로 시작하는 a요소
$('#list a[href$=net]').css('border', '5px solid blue')
// href속성 net으로 끝나는 a요소