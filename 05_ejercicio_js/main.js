$(document).ready(function () {
    $("#carrete").hide()
});

$(document).on("click", function () {
    $("h1").hide();
});

$(document).on("click", function () {
    $("#carrete").show();
});


$("img").hover(function () {

    $(this).css("width", 350);
}, function () {
    $(this).css("width", 250);
});

