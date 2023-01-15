const $listaItems = document.querySelectorAll("li");
const $promedioNumTexto = document.querySelector("#prom-num");
const $minNumTexto = document.querySelector("#min-num");
const $maxNumTexto = document.querySelector("#max-num");
const $frecNumTexto = document.querySelector("#frec-num");

let arrayNumeros = [];

for (let i = 0; i < $listaItems.length; i++) {
  arrayNumeros.push(Number($listaItems[i].innerText));
}

let sumaNumerosArray = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
  sumaNumerosArray += arrayNumeros[i];
}

$promedioNumTexto.textContent = "El promedio es " + sumaNumerosArray / arrayNumeros.length;

let minNum = Math.min(...arrayNumeros);
let maxNum = Math.max(...arrayNumeros);

$minNumTexto.textContent = "El número más pequeño es " + minNum;
$maxNumTexto.textContent = "El número más grande es " + maxNum;

let numeroMasRepetido; 

for(let i = 0; i < arrayNumeros.length; i++) {
  for(let j = i + 1; j < arrayNumeros.length; j++) {
    if(arrayNumeros[i] === arrayNumeros[j]) {
      numeroMasRepetido = arrayNumeros[j];
    }
  }
}

$frecNumTexto.textContent = "El número más frecuente es " + numeroMasRepetido;


