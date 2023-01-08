// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function compararNombres() {
    let nombreUsuario = prompt("Ingresa tu nombre").toLowerCase();
    let miNombre = "agustin";
    let nombrePariente = "daniel";
    let saludo;

    if (nombreUsuario === miNombre) {
        saludo = "Hola, Tocayo! Yo también me llamo " + miNombre;
    } else if (nombreUsuario === nombrePariente) {
        saludo = "Hola " + nombreUsuario + ", te llamas igual que mi papá";
    } else {
        saludo = "Hola " + nombreUsuario;
    }

    return saludo
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function comparaEdades() {
    let edadUsuario = Number(prompt("Cuántos años tenés?"));
    let miEdad = 22;
    let comparacion;

    if (edadUsuario > miEdad) {
        comparacion = "Sos más grande que yo";
    } else if (edadUsuario < miEdad) {
        comparacion = "Sos más chico que yo";
    } else {
        comparacion = "Tenemos la misma edad";
    }

    return comparacion
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function verificarEdad() {
    let documentoUsuario = prompt("Tenés documento?").toLowerCase();
    let edadUsuario;
    let respuesta;

    if (documentoUsuario === "no") {
        respuesta = "No podés entrar al bar";
    } else if (documentoUsuario === "si") {
        edadUsuario = prompt("Qué edad tenés?");
    }
    
    if (edadUsuario >= 18) {
        respuesta = "Podés entrar al bar";
    } else {
        respuesta = "No podés entrar al bar";
    }

    return respuesta
}


