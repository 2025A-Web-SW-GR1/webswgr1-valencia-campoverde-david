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

const adrian: any = {
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
let notas = {
  total: 10,
};

let notas2doBim = notas; // por referencia
notas2doBim.total = notas2doBim.total + 1;
console.log(notas2doBim);
console.log(notas);

// let notasClonadasUno = Object.assign({}, notas);
// let arregloACopiar = [1, 2, 3];
// let arregloClonado = Object.assign([], arregloACopiar);

// notasClonadasUno.total = notasClonadasUno.total + 1;
// console.log(notasClonadasUno);
