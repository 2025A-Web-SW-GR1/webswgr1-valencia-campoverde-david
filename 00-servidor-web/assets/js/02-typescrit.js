console.log("Hola Mundo desde TypeScript");
// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
var nombres = "Adrian";
nombres = "A";
nombres = "C";
// nombres = 1;
var nombreTS = "";
console.log(typeof nombres, "nombres");
var numeros = 1;
var numerosTS = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
var booleanos = true;
var booleanosTS = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
var nulos = null;
var nulosTS = null;
console.log(typeof nulos, "nulos");
var arreglos = [];
var arreglosTS = [];
var arreglosTS2 = [];
console.log(typeof arreglos, "arreglos");
var objetos = {};
var objetosTS = {};
console.log(typeof objetos, "objetos");
var undefineds = undefined;
var undefinedsTS = undefined;
console.log(typeof undefineds, "undefineds");
//Truty y falsy
var trutyFalsy;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = "";
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = "a";
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = 1;
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = -1;
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = 0;
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = null;
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = {};
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = [];
console.log(trutyFalsy);
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
var adrian = {
    nombre: "Adrian",
    edad: 30,
    casado: false,
    hijos: null,
    mascotas: ["perro", "gato"],
    direccion: {
        calle: "Calle falsa",
        numero: 123,
    },
};
console.log(adrian);
console.log(adrian.nombre);
console.log(adrian["nombre"]);
adrian.trabajo = "Programador";
console.log(adrian);
//eliminar propiedades
adrian.trabajo = undefined;
delete adrian.trabajo;
console.log(adrian);
//Variables por valor o por referencia
// Variables por valor
//Primitivas: number, string, boolean
//Varaiables por referencia
// como clonar
var notas = {
    total: 10,
};
var notas2doBim = notas; // por referencia
notas2doBim.total = notas2doBim.total + 1;
console.log(notas2doBim);
console.log(notas);
// let notasClonadasUno = Object.assign({}, notas);
// let arregloACopiar = [1, 2, 3];
// let arregloClonado = Object.assign([], arregloACopiar);
// notasClonadasUno.total = notasClonadasUno.total + 1;
// console.log(notasClonadasUno);
