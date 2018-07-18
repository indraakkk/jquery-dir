// selector by tag, class name and id
$(document).ready(function () {
    $(".head1").css("background", "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,5,117,1) 33%, rgba(0,212,255,1) 100%)");
    $("h1").css("color", "white")
    $("#head1").css("min-height", "10rem");
});

// selector by attribute
$(document).ready(function () {
    $('#login-form').css("text-align", "center")
    $('input[type="text"]').css("background", "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,5,117,1) 33%, rgba(0,212,255,1) 100%)");
    $('input[type="text"]').css("color", "white");
});

// resize images
$(document).ready(function () {
    $("img").css("max-height", "10rem");
});

// animate container
$(document).ready(function () {
    $("#button-move").click(function () {
        $(".d-flex").animate({
            top: '50px'
        });
    });
});

// hide images
$("#img1").click(function(){
    $(this).hide()
});

$("#img2").click(function(){
    $(this).hide();
});
$("#img3").click(function(){
    $(this).hide();
});