$(document).ready(function () {
    for (var i = 0; i < 12; i++) {

        if (i == 0) {
            $(".time").append("<li class='digits'><span>12</span></li>");
        } else {
            $(".time").append("<li class='digits'><span>" + i + "</span></li>");
        }

    }

    var myfunc = function () {
        var myDate = new Date();
        var minutes = myDate.getMinutes();
        var hours = myDate.getHours();
        $(".minutes").css('transform', 'rotate(' + (minutes) * 6 + 'deg)');
        $(".hours").css('transform', 'rotate(' + (hours % 12) * 30 + 'deg)');
    };

    setInterval(myfunc, 1000);
})