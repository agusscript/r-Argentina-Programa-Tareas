// TAREA:
// Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
// Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

const $numeroIntegrantes = document.querySelector("#integrantes-trabajo");
const $botonAgregar = document.querySelector("#agregar");
const $integrantesContainer = document.querySelector("#integrantes");
const $botonCalcular = document.querySelector("#calcular");
const $botonReiniciar = document.querySelector("#reiniciar");

function crearIntegrante() {
  let nuevoIntegrante = $numeroIntegrantes.value;
  let numeroNuevoIntegrante;
  
  for(let i = 1; i <= nuevoIntegrante; i++) {
    numeroNuevoIntegrante = i;

    let nuevoIntegranteLabel = document.createElement("label");
    nuevoIntegranteLabel.textContent = "Salario anual integrante #" + numeroNuevoIntegrante;
    let nuevoINtegranteInput = document.createElement("input");
    nuevoINtegranteInput.classList.add("nuevo-integrante-input");
    nuevoINtegranteInput.type = "number";
    $integrantesContainer.appendChild(nuevoIntegranteLabel);
    $integrantesContainer.appendChild(nuevoINtegranteInput);
  }
}

function calcularResultadoSalarios() {
  let integrantesInputs = document.querySelectorAll(".nuevo-integrante-input");
  let integrantesArray = [];

  for( let i = 0; i < integrantesInputs.length; i++) {
    integrantesArray.push(Number(integrantesInputs[i].value))
  }

  let salarioMinimo = Math.min(...integrantesArray);
  let salarioMaximo = Math.max(...integrantesArray);

  let mayorSalarioAnualTexto = document.querySelector("#mayor-salario-anual");
  mayorSalarioAnualTexto.textContent = salarioMaximo;

  let menorSalarioAnualTexto = document.querySelector("#menor-salario-anual");
  menorSalarioAnualTexto.textContent = salarioMinimo;

  let integrantesArraySuma = 0;

  for(let i = 0; i < integrantesArray.length; i++) {
    integrantesArraySuma += integrantesArray[i];
  }

  let promedioSalarioAnual = integrantesArraySuma / integrantesArray.length;

  let promedioSalarioAnualTexto = document.querySelector("#promedio-salario-anual");
  promedioSalarioAnualTexto.textContent = parseInt(promedioSalarioAnual);

  let promedioSalarioMensualTexto = document.querySelector("#promedio-salario-mensual");
  promedioSalarioMensualTexto.textContent = parseInt(promedioSalarioAnual / 12);
}

$botonAgregar.onclick = function() {
  crearIntegrante();

  return false
}

$botonCalcular.onclick = function() {
  calcularResultadoSalarios();

  return false
}

$botonReiniciar.onclick = function() {
  location.reload;
}
