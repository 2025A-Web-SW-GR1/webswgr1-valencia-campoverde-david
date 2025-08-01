const fs = require("fs"); //importar libreria fs

const dirArchivo = "../../01 - NODEJS/a.txt"; // Ruta del archivo

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

function añadirContenidoArchivo(nombreArchivo, contenido) {
  return new Promise((res, rej) => {
    fs.writeFile(
      nombreArchivo,
      contenido + ": -" + new Date().toString(),
      (errorEscritura) => {
        if (errorEscritura) {
          rej("Error al escribir en el archivo: " + errorEscritura);
        } else {
          res("Contenido añadido al archivo correctamente.");
        }
      }
    );
  });
}

leerArchivoPromesa(dirArchivo)
  .then((contenido) => {
    console.log("Contenido del archivo:", contenido);
    return añadirContenidoArchivo(dirArchivo, contenido); // Añadir contenido al archivo
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error("Error:", error); // Manejo de errores
  });
