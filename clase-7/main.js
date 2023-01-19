const $formulario = document.querySelector("#carta-a-santa");

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario["descripcion-regalo"].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  return ""
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Tenés que seleccionar una ciudad";
  }

  return ""
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length < 10) {
    return "Este campo debe tener al menos 10 caracteres";
  }

  if (descripcionRegalo.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }

  return ""
}
