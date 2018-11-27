//Alert y botón para ocultar/mostrar
var abierto = true;
function buttonHandler() {
    console.log("Botón de Alert pulsado");
    if (abierto) {
        //$("#alert-cerrable").alert("close");
        $("#alert-cerrable").hide();
        $("#alert-button").text("Pulsar para abrir");
        console.log("Div Alert cerrado");
    } else {
        $("#alert-cerrable").show();
        $("#alert-button").text("Pulsar para cerrar");
        console.log("Div Alert mostrado");
    }
    abierto = !abierto;
}

//Badge con contador de pulsaciones
var pulsaciones = 0;
function badgeHandler() {
    pulsaciones++;
    $("#badge-count").text(pulsaciones);
    console.log("Badge pulsado, pulsaciones="+pulsaciones);
}

//Listeners
$("#alert-button").click(buttonHandler);
$("#badge-button").click(badgeHandler);