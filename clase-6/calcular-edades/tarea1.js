// TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
// Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

const $integrantesFamiliaInput = document.querySelector("#integrantes-familia");
const $botonAgregarIntegrantes = document.querySelector("#agregar");
const $containerIntegrantes = document.querySelector("#integrantes-container");
const $botonCalcular = document.querySelector("#calcular");
const $maximaEdadTexto = document.querySelector("#maxima-edad");
const $minimaEdadTexto = document.querySelector("#minima-edad");
const $promedioEdadTexto = document.querySelector("#promedio-edad");
const $botonReiniciar = document.querySelector("#reiniciar");

$botonAgregarIntegrantes.onclick = function () {
  crearInputs();

  return false;
};

function crearInputs() {
  const cantidadIntegrantes = $integrantesFamiliaInput.value;

  for (let i = 1; i <= cantidadIntegrantes; i++) {
    let nuevoInput;
    let nuevoLabel;
    let numIntegrante;
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
  }

  let mayorEdad = edadesArray[0];
  for (let i = 0; i < edadesArray.length; i++) {
    if (edadesArray[i] > mayorEdad) {
      mayorEdad = edadesArray[i];
    }
  }
  $maximaEdadTexto.textContent = mayorEdad;

  let menorEdad = edadesArray[0];
  for (let i = 0; i < edadesArray.length; i++) {
    if (edadesArray[i] < menorEdad) {
      menorEdad = edadesArray[i];
    }
  }
  $minimaEdadTexto.textContent = menorEdad;

  for (let i = 0; i < edadesArray.length; i++) {
    sumaEdades += edadesArray[i];
  }
  let promedioEdades = sumaEdades / edadesArray.length;
  $promedioEdadTexto.textContent = promedioEdades;

  return false;
};

$botonReiniciar.onclick = function () {
  location.reload;
};
