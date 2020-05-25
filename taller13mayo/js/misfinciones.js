$(document).ready(function() {
    $(".dropdown-trigger").dropdown();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.modal').modal();

    $('.tooltipped').tooltip();
});
function registrar() {
    // Genera una ventana de alerta donde se visualiza la cantidad de ventas totales
    alert("Registro exito ");
}