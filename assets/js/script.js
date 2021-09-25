var task = [];

$(document).ready(function() {

  //section for each save button click
$('.saveBtn1').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task1", JSON.stringify(val));

});
$('.saveBtn2').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task2", JSON.stringify(val));

});
$('.saveBtn3').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task3", JSON.stringify(val));

});
$('.saveBtn4').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task4", JSON.stringify(val));

});
$('.saveBtn5').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task5", JSON.stringify(val));

});
$('.saveBtn6').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task6", JSON.stringify(val));

});
$('.saveBtn7').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task7", JSON.stringify(val));

});
$('.saveBtn8').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task8", JSON.stringify(val));

});
$('.saveBtn9').on('click', function(){
    var val = $(this).siblings('.description').val();

        localStorage.setItem("task9", JSON.stringify(val));

});


var time = $('.time-div');
var i = 8;

$(time).each(function(index) {
    i++;
    $(this).attr("id", "time" + i);
   
});

//gets the time and compares it to the IDs on the textarea

function getHour() {
    var hour = 13;

    $('.description').each(function() {
        var timeID = parseInt($(this).attr('id'))

    if(hour === timeID){
        $(this).addClass('present');
    } else if(hour > timeID){
        $(this).addClass('past');
    } else if(hour < timeID){

        $(this).addClass('future');
    }
})
}

getHour();

//gets all of the localStorage Tasks
$('#time9 .description').val(localStorage.getItem("task1"));
$('#time10 .description').val(localStorage.getItem("task2"));
$('#time11 .description').val(localStorage.getItem("task3"));
$('#time12 .description').val(localStorage.getItem("task4"));
$('#time13 .description').val(localStorage.getItem("task5"));
$('#time14 .description').val(localStorage.getItem("task6"));
$('#time15 .description').val(localStorage.getItem("task7"));
$('#time16 .description').val(localStorage.getItem("task8"));
$('#time17 .description').val(localStorage.getItem("task9"));
$('#currentDay').text(moment().format('dddd, MMMM Do'));



});