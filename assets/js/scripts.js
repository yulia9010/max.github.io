
$(document).ready(function() { 

//Timer без дней
function get_timer(string) {
    var date_new = string;
    var date_x = new Date(date_new);
    var date = new Date();
    var timer = date_x - date;
    if (date_x > date) {
        var hour = parseInt(timer / (60 * 60 * 1000));
        if (hour < 10) { hour = "0" + hour; } hour = hour.toString();
        var min = parseInt(timer / (1000 * 60)) % 60;
        if (min < 10) { min = "0" + min; } min = min.toString();
        var sec = parseInt(timer / 1000) % 60;
        if (sec < 10) { sec = "0" + sec; } sec = sec.toString();
        timethis = hour + " : " + min + " : " + sec;
        $(".x-hour").text(hour);
        $(".x-minute").text(min);
        $(".x-second").text(sec);
    } else {
        $(".x-hour").text("00");
        $(".x-minute").text("00");
        $(".x-second").text("00");
    }
}
function timer_x() {
    // "месяц/число/год час:мин"

    var date = new Date();
    var newDate = date;
    newDate.setMinutes(newDate.getMinutes() + 15);

    function addZero(val){
        if(val.toString().length < 2){
            return val = '0' + val;
        } else {
            return val
        }
    }

    string = addZero((newDate.getMonth() + 1)) + '/' + addZero(newDate.getDate()) + '/' + newDate.getFullYear() + ' ' + addZero(newDate.getHours()) + ':' + addZero(newDate.getMinutes());

    get_timer(string);
    setInterval(function() { get_timer(string); }, 1000);
}
$(document).ready(function() { timer_x(); });



//Прокрутка по якорям
$('a[href*="#"]').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 700);
    e.preventDefault();
});


//Slider
$('.slider').bxSlider({
    adaptiveHeight: true
});



});