// before(), insertBefore(), after(), insertAfter()
$('.wrap p:eq(1)').before('<p>Before</p>')
$('<p>InserBefore</p>').insertBefore('.wrap p:eq(0)')
$('.wrap p:eq(4)').after('<p>After</p>')
$('<p>InsertAfer</p>').insertAfter('.wrap p:last')

// append(), appendTo(), prepend(), prependTo()
$('.list').append('<li>리스트 2</li>')
$('<li>리스트 3</li>').appendTo('.list')
$('.list').prepend('<li>리스트 0</li>')

// clone(), empty(), remove()
var clonList = $('.list').children().clone()
console.log(clonList);

$('.list2').append(clonList)
$('.list2').empty()
$('.list').remove()

//replaceAll(), replaceWith() 
$('h1').replaceWith('<h3>replaceWith</h3>')
$('<p>replaceAll</p>').replaceAll('.box2 div')

// unwrap(), wrap(), wrapAll(), wrapInner()
$('span').unwrap() // 부모요소를 삭제
$('.p1').wrap('<div />') // 요소를 div로 감싼다.
$('.p3').wrapAll('<div />') // 요소를 전부를 div로 감싼다.
$('.box3 ul li').wrapInner('<h3 />') // 요소의 하위요소를 h3로 감싼다.
