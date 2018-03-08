$("document").ready(function () {
    $("#anuncio").text("¡CLICK! para cambiar de color")
        .hide()
        .height(500)
        .width(500)
        .fadeIn(3000)
});


$("#anuncio").on("click", function () {

    let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];
    let color = colores[Math.floor(Math.random() * colores.length)];

    $("#anuncio").css("background-color", color);

});