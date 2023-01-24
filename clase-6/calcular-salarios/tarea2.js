// TAREA:
// Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
// Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

const $numeroIntegrantesinput = document.querySelector("#integrantes-trabajo");
const $botonAgregar = document.querySelector("#agregar");
const $integrantesContainer = document.querySelector("#integrantes");
const $botonCalcular = document.querySelector("#calcular");
const $botonReiniciar = document.querySelector("#reiniciar");

function crearIntegrante() {
  let cantidadIntegrantes = $numeroIntegrantesinput.value;
  
  for(let i = 1; i <= cantidadIntegrantes; i++) {
    let nuevoIntegranteLabel = document.createElement("label");
    nuevoIntegranteLabel.textContent = "Salario anual integrante #" + i;
    let nuevoINtegranteInput = document.createElement("input");
    nuevoINtegranteInput.classList.add("nuevo-integrante-input");
    nuevoINtegranteInput.type = "number";
    $integrantesContainer.appendChild(nuevoIntegranteLabel);
    $integrantesContainer.appendChild(nuevoINtegranteInput);
  }
}

function calcularResultadoSalarios() {
  const integrantesInputs = document.querySelectorAll(".nuevo-integrante-input");
  let salariosArray = [];

  for( let i = 0; i < integrantesInputs.length; i++) {
    salariosArray.push(Number(integrantesInputs[i].value))
  }

  let salarioMaximo = salariosArray[0];
  for (let i = 0; i < salariosArray.length; i++) {
    if (salariosArray[i] > salarioMaximo) {
      salarioMaximo = salariosArray[i];
    }
  }
  const $mayorSalarioAnualTexto = document.querySelector("#mayor-salario-anual");
  $mayorSalarioAnualTexto.textContent = salarioMaximo;

  let salarioMinimo = salariosArray[0];
  for(let i = 0; i < salariosArray.length; i++) {
    if (salariosArray[i] < salarioMinimo) {
      salarioMinimo = salariosArray[i];
    }
  }
  const $menorSalarioAnualTexto = document.querySelector("#menor-salario-anual");
  $menorSalarioAnualTexto.textContent = salarioMinimo;

  let integrantesArraySuma = 0;
  for(let i = 0; i < salariosArray.length; i++) {
    integrantesArraySuma += salariosArray[i];
  }
  let promedioSalarioAnual = integrantesArraySuma / salariosArray.length;

  const $promedioSalarioAnualTexto = document.querySelector("#promedio-salario-anual");
  $promedioSalarioAnualTexto.textContent = parseInt(promedioSalarioAnual);

  const $promedioSalarioMensualTexto = document.querySelector("#promedio-salario-mensual");
  $promedioSalarioMensualTexto.textContent = parseInt(promedioSalarioAnual / 12);
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
