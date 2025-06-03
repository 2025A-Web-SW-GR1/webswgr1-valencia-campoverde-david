// estamos en el lado del servidor
const fs = require("fs"); //importar libreria fs
// fs es una libreria que nos permite trabajar con el sistema de archivos
// fs nos permite leer y escribir archivos de forma asincrona
console.log("Primero");
fs.readFile(
  "./a.txt", //ruta del archivo
  "utf-8", //codificacion del archivo
  (err, data) => {
    //funcion de callback
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    } else {
      console.log("Archivo leído correctamente" + data);
    }
  }
);
/*
fs.readFile(
  "./a.txt", //ruta del archivo
  "utf-8", //codificacion del archivo
  (err, data) => {
    //funcion de callback
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    } else {
      console.log("Archivo leído correctamente v2");
    }
  }
);

fs.readFile(
  "./a.txt", //ruta del archivo
  "utf-8", //codificacion del archivo
  (err, data) => {
    //funcion de callback
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    } else {
      console.log("Archivo leído correctamente v3");
    }
  }
);
*/
fs.writeFile(
  "./a.txt", //ruta del archivo
  "Hola mundo" + new Date().toString(), //contenido del archivo
  (err) => {
    //funcion de callback
    if (err) {
      console.error("Error al escribir el archivo:", err);
      return;
    } else {
      console.log("Archivo escrito correctamente");
    }
  }
);

fs.readFile(
  "./a.txt", //ruta del archivo
  "utf-8", //codificacion del archivo
  (err, data) => {
    //funcion de callback
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    } else {
      console.log("Archivo leído correctamente" + data);
    }
  }
);

console.log("Segundo");
