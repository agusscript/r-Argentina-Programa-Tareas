function saludar() {
  let nombreUsuario = document.querySelector("#nombre");
  let segundoNombreUsuario = document.querySelector("#segundo-nombre");
  let apellidoUsuario = document.querySelector("#apellido");
  let edadUsuario = document.querySelector("#edad");
  let saludoTexto = document.querySelector("#saludo");
  let botonSaludar = document.querySelector("#btn-saludar");

  botonSaludar.onclick = function () {
    let nombreCompleto = `${nombreUsuario.value} ${segundoNombreUsuario.value} ${apellidoUsuario.value}`;
    saludoTexto.textContent = `Bienvenido! ${nombreCompleto}, tu edad es ${edadUsuario.value} años`;

    return false;
  };
}
saludar();
