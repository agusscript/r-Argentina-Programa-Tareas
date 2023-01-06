let botonSaludar = document.querySelector("#saludar");

botonSaludar.onclick = function(){
    let nombreUsuario = document.querySelector("#nombre").value;
    let segundoNombreUsuario = document.querySelector("#segundo-nombre").value;
    let apellidoUsuario = document.querySelector("#apellido").value;
    let saludoUsuario = saludarUsuario(nombreUsuario, segundoNombreUsuario, apellidoUsuario);

    return false
}

function saludarUsuario(nombreUsuario, segundoNombreUsuario, apellidoUsuario) {
    let saludoText = document.querySelector("#saludo");
    saludo.innerText = "Bienvenido " + " " + nombreUsuario + " " + segundoNombreUsuario + " " + apellidoUsuario;
}