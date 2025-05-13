console.log("Hola Mundo desde TypeScript");

// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
let nombres = "Adrian";
nombres = "A";
nombres = "C";
// nombres = 1;
let nombreTS: string = "";
console.log(typeof nombres, "nombres");
let numeros = 1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds");

//Truty y falsy

let trutyFalsy: any;

if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = "";

console.log(trutyFalsy);

if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = "a";

console.log(trutyFalsy);

if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = 1;
console.log(trutyFalsy);
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = -1;
console.log(trutyFalsy);

if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = 0;
console.log(trutyFalsy);
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = null;
console.log(trutyFalsy);
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = {};
console.log(trutyFalsy);
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = [];
console.log(trutyFalsy);
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}
