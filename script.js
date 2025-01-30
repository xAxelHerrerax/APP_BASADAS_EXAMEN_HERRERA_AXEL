var tamano = 400;
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var otrocanvas = document.getElementById("otrocanvas");
var ctx = canvas.getContext("2d");
var currentStream = null;
var facingMode = "user";

var modelo = null;

fetch('./model.json')
  .then(response => response.json())
  .then(modelData => {
    console.log("Cargando modelo...");
    modelo = tf.model({
      inputs: modelData.inputs,
      outputs: modelData.outputs,
      layers: modelData.modelTopology.layers
    });
    console.log("Modelo cargado");
  })
  .catch(error => {
    console.error('Error cargando el modelo:', error);
  });

window.onload = function () {
    mostrarCamara();
}

function mostrarCamara() {
    var opciones = {
        audio: false,
        video: {
            width: tamano, height: tamano
        }
    }

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(opciones)
            .then(function (stream) {
                currentStream = stream;
                video.srcObject = currentStream;
                procesarCamara();
                predecir();
            })
            .catch(function (err) {
                alert("No se pudo utilizar la cámara :(");
                console.log(err);
            })
    } else {
        alert("No existe la función getUserMedia");
    }
}

function cambiarCamara() {
    // El resto del código permanece igual
}

function procesarCamara() {
    // El resto del código permanece igual
}

function predecir() {
    if (modelo != null) {
        // El resto del código permanece igual
    }

    setTimeout(predecir, 150);
}

function resample_single(canvas, width, height, resize_canvas) {
    // El resto del código permanece igual
}
