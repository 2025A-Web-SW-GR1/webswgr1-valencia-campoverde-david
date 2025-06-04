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

function leerArchivoPromesa(nombreArchivo) {
  return new Promise((res, rej) => {
    fs.readFile(nombreArchivo, "utf-8", (errorLectura, contenido) => {
      if (errorLectura) {
        rej("Error al leer el archivo: " + errorLectura);
      } else {
        res(contenido); // Resuelve la promesa con el contenido del archivo
      }
    });
  });
}

leerArchivoPromesa("a.txt")
  .then((contenidoArchivo) => {
    console.log("Contenido del archivo:", contenidoArchivo);
  })
  .catch((error) => {
    console.error("Error al leer el archivo:", error);
  });

//const correrLogicaPromesas2 = async () => {} // esto es lo mismo que lo de arriba
// ASYNC/AWAIT
//REGLAS:
// 1. Debe estar dentro de una función nombrada, anonima o fat arrow function
// 2.Agregar la palabra async antes de la declaración de la función
// 3. Agregar 'AWAIT' dentro de un bloque TRY/CATCH a nuestra promesa

async function correrLogicaPromesas() {
  try {
    const respuestaLeerArchivo = await leerArchivoPromesa("a.txt");
    console.log("1. Contenido del archivo:", respuestaLeerArchivo);
    await leerArchivoPromesa("b.txt");
  } catch (error) {
    console.error("2. Error:", error);
  }
}
correrLogicaPromesas().then().catch();
