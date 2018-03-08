$("li").hover(function () {

    $(this).addClass("destacar");

}, function () {
    $(this).removeClass("destacar");
});




$("#elem1").hover(function () {

    $("img").attr("src", "img/arbol.jpg");
}, function () {

    $("img").attr("src", "img/blanco.jpg");

});

$("#elem2").hover(function () {

    $("img").attr("src", "img/lago.jpg");
}, function () {

    $("img").attr("src", "img/blanco.jpg");

});

$("#elem3").hover(function () {

    $("img").attr("src", "img/rio.jpg");
}, function () {

    $("img").attr("src", "img/blanco.jpg");

});

$("#elem4").hover(function () {

    $("img").attr("src", "img/sol.jpg");
}, function () {

    $("img").attr("src", "img/blanco.jpg");

});