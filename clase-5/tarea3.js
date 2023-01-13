const $horasPorClase = document.querySelector("#horas");
const $minutosPorClase = document.querySelector("#minutos");
const $segundosPorClase = document.querySelector("#segundos");
const $botonAñadirClase = document.querySelector("#añadir-clase");
const $tiempoClasesTexto = document.querySelector("#tiempo-clase");
const $sumatiempoTotalTexto = document.querySelector("#tiempo-total-texto");
const $botonCalcularTiempo = document.querySelector("#calcular-tiempo");

let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

function agregarTiempoClase() {
  let horasDeLaClase;
  let minutosDeLaClase;
  let segundosDeLaClase;

  horasDeLaClase = parseFloat($horasPorClase.value);
  minutosDeLaClase = parseFloat($minutosPorClase.value);
  segundosDeLaClase = parseFloat($segundosPorClase.value);

  if (minutosDeLaClase > 59) {
    alert("El máximo por clase es de 59 minutos");
    minutosDeLaClase = 59;
  }

  if (segundosDeLaClase > 59) {
    alert("El máximo por clase es de 59 segundos");
    segundosDeLaClase = 59;
  }

  horasTotales += horasDeLaClase;
  minutosTotales += minutosDeLaClase;
  segundosTotales += segundosDeLaClase;

  let resultadoTexto = horasTotales + ":" + minutosTotales + ":" + segundosTotales;

  $tiempoClasesTexto.textContent = resultadoTexto;
}

function calcularTiempoTotal() {
  let horas_Segundos = horasTotales * 3600;
  let minutos_Segundos = minutosTotales * 60;
  segundosTotales = segundosTotales + minutos_Segundos + horas_Segundos;

  let hours = Math.floor(segundosTotales / 3600);
  let minutes = Math.floor((segundosTotales % 3600) / 60);
  let seconds = segundosTotales % 60;

  let result = hours + ":" + minutes + ":" + seconds;

  $sumatiempoTotalTexto.textContent = "El tiempo total de las clases es " + result;
}

$botonAñadirClase.onclick = function () {
  agregarTiempoClase();

  return false;
};

$botonCalcularTiempo.onclick = calcularTiempoTotal;
