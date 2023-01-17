// TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
// Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

const $integrantesFamiliaInput = document.querySelector("#integrantes-familia");
const $botonAgregarIntegrantes = document.querySelector("#agregar");
const $containerIntegrantes = document.querySelector("#integrantes-container");
const $botonCalcular = document.querySelector("#calcular");
const $maxEdadTexto = document.querySelector("#max-edad");
const $minEdadTexto = document.querySelector("#min-edad");
const $promEdadTexto = document.querySelector("#prom-edad");
const $botonReiniciar = document.querySelector("#reiniciar");

let numIntegrantesFamilia;

$botonAgregarIntegrantes.onclick = function () {
  numIntegrantesFamilia = $integrantesFamiliaInput.value;
  crearInputs();

  return false;
};

function crearInputs() {
  let nuevoInput;
  let nuevoLabel;
  let numIntegrante;

  for (let i = 1; i <= numIntegrantesFamilia; i++) {
    numIntegrante = i;

    nuevoLabel = document.createElement("label");
    nuevoLabel.textContent = `Edad integrante #${numIntegrante}:`;
    nuevoInput = document.createElement("input");
    nuevoInput.type = "number";
    $containerIntegrantes.appendChild(nuevoLabel);
    $containerIntegrantes.appendChild(nuevoInput);
  }
}

$botonCalcular.onclick = function () {
  let edadesArray = [];
  let sumaEdades = 0;
  let edadesInput = $containerIntegrantes.querySelectorAll("input");

  for (let i = 0; i < edadesInput.length; i++) {
    edadesArray.push(Number(edadesInput[i].value));
    console.log();
  }

  let maxEdad = Math.max(...edadesArray);
  $maxEdadTexto.textContent = maxEdad;

  let minEdad = Math.min(...edadesArray);
  $minEdadTexto.textContent = minEdad;

  for (let i = 0; i < edadesArray.length; i++) {
    sumaEdades += edadesArray[i];
  }

  let promedioEdades = sumaEdades / edadesArray.length;
  $promEdadTexto.textContent = promedioEdades;

  return false;
};

$botonReiniciar.onclick = function () {
  location.reload;
};
