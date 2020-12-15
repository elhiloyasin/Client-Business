$('.btn-info').on('click', function () {  
let text = $(this).parent().siblings('.col-10').children().val()
let time = $(this).attr('id')
console.log(time);
console.log(text);
localStorage.setItem(time,text)
})


$('#9').val(localStorage.getItem('9'));
$('#10').val(localStorage.getItem('10'));
$('#11').val(localStorage.getItem('11'));
$('#12').val(localStorage.getItem('12'));
$('#13').val(localStorage.getItem('13'));
$('#14').val(localStorage.getItem('14'));
$('#15').val(localStorage.getItem('15'));
$('#16').val(localStorage.getItem('16'));
$('#17').val(localStorage.getItem('17'));
$('#18').val(localStorage.getItem('18'));

$('textarea').each(function(){
let blockHour = parseInt($(this).attr('id'))
let currentHour = 13 
if(blockHour === currentHour){
    $(this).addClass('present'); 
}

else if(blockHour < currentHour){
    $(this).addClass('past')
}

else if (blockHour > currentHour){
    $(this).addClass('future')

}
})


















