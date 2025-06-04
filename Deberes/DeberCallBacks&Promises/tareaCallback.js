const fs = require("fs"); //importar libreria fs

const dirArchivo = "../../01 - NODEJS/a.txt"; // Ruta del archivo

function leerArchivoCallback(nombreArchivo, callback) {
  fs.readFile(nombreArchivo, "utf-8", (errorLectura, contenido) => {
    if (errorLectura) {
      callback("Error al leer el archivo: " + errorLectura);
    } else {
      console.log("Contenido del archivo:", contenido);
      callback(null, contenido); // Llama al callback con el contenido del archivo
    }
  });
}

function añadirContenidoArchivo(nombreArchivo, contenido) {
  fs.writeFile(
    nombreArchivo,
    contenido + ": -" + new Date().toString(),
    (errorEscritura) => {
      if (errorEscritura) {
        callback("Error al escribir en el archivo: " + errorEscritura);
      } else {
        console.log("Contenido añadido al archivo correctamente.");
      }
    }
  );
}

leerArchivoCallback(dirArchivo, (error, contenido) => {
  if (error) {
    console.error(error); // Manejo de errores al leer el archivo
    return;
  } else {
    añadirContenidoArchivo(dirArchivo, contenido); // Añadir contenido al archivo
  }
});
