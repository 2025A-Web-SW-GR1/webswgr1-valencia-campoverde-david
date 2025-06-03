const fs = require("fs");

function promesaEsPar(numero) {
  const miPrimeraPromesa = new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve(numero); // Resuelve la promesa con el número si es par
    } else {
      reject("No es par!"); // Rechaza la promesa si no es par
    }
  });
  return miPrimeraPromesa;
}

function promesaElevarAlCuadrado(numero) {
  return new Promise((res) => res(numero * numero));
}

promesaEsPar(3)
  .then((respuestaEsPar) => {
    console.log("Es par:", respuestaEsPar); // "4 es par"
    return promesaElevarAlCuadrado(respuestaEsPar); // Devuelve una nueva promesa
  })
  .then((respuestaElevarCuadrado) => {
    console.log("Elevado: ", respuestaElevarCuadrado); // 4
  })
  .catch((respuestaError) => {
    console.log("No es Par ", respuestaError); // Manejo de errores
  });
/*min 45:44*/
