//-----Función que recibe un cuadrado y devuelva un número

function cuadrado1(n){
    return n*n;
}

// 1. guardar la función en una constante
const cuadrado2 = function cuadrado1(n){
    return n*n;
}

// 2. eliminar function
const cuadrado3 = (n) => {
    return n*n;
}

// 2.1 si es solo una expresion se pueden quitar {} y return
const cuadrado4 = (n) => n*n;

// 2.2 con un solo parámetro le puedo quitar paréntesis
const cuadrado5 = (n) => n*n;

console.log(cuadrado1(4),cuadrado2(4),cuadrado3(4),cuadrado4(4),cuadrado5(4));

// cuerpo con varias sentencias: llaves y return obligatorio
const calificar = nota =>{
    if(nota<5) return "suspenso";
    if(nota>=5) return "aprobado";
}
console.log(calificar(4));

// con llaves siempre hay que usar un return para devolver un valor
const resta = (a,b) => {return a-b};
console.log(resta(4,2));

//------- Ejemplo:

const alumnos =[
    {nombre: 'Ana', nota: 7.5},
    {nombre: 'Bruno', nota: 4.2},
    {nombre: 'Carla', nota: 9.1},
    {nombre: 'David', nota: 5.0},
    {nombre: 'Elena', nota: 3.8},
];

function estaAprobado(nota){
    return nota>=5;
}

const estaAprobadoConFlecha = (nota) => nota>=5;

//------- Ejemplo:

function redondear(numero,decimales = 1){
    return Math.round(numero * 10 ** decimales) / 10 ** decimales;
}

const redondearFlecha = (numero,decimales = 1) => Math.round(numero * 10 ** decimales) / 10 ** decimales;

//------- Ejemplo: ¿undefined?

const ficha = (nombre,nota) =>({nombre,nota});