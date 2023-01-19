function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Tenés que seleccionar una ciudad",
    "validar ciudad no validó que la ciudad no esté vacía"
  );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("123456789") === "Este campo debe tener al menos 10 caracteres",
    "Validar descripcion regalo no validó que la descripcion sea mayor a 10 caracteres"
  );

  console.assert(
    validarDescripcionRegalo(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "Este campo debe tener menos de 100 caracteres",
    "Validar descripcion regalo no validó que la descripcion sea menor a 100 caracteres"
  );
}

probarValidarDescripcionRegalo();