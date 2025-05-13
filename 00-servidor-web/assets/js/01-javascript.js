console.log("Hola Mundo desde JavaScript");

//tipos de variables
//Mutables: let, var
let nombre = "Juan";
nombre = "Pedro";
console.log(nombre);
nombre = 1; // Cambia el tipo de dato de string a number
console.log(nombre);

nombre = function () {
  console.log("Hola desde la función");
}; // Cambia el tipo de dato de string a function
console.log(nombre); // Muestra la función

// Inmutables: const
const nombreConstante = "Juan";
console.log(nombreConstante);
