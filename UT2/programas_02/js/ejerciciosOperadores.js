//Ejercicio 1 — Precedencia aritmética

let resultado = 2 + 3 * 4 - (6 / 2);
console.log(resultado);

//¿Qué valor se muestra? Justifica el orden de evaluación de los operadores.

/*
Se muestra el 11.El orden seria parentesis, multiplicación, resta, suma
*/

//Ejercicio 2 — Incremento/decremento

let x = 5;
console.log(x++);
console.log(x);
console.log(++x);

//Explica la diferencia entre x++ y ++x, indicando qué imprime cada línea.
/*
x++ -> primero devuelve el valor de x y luego lo incrementa 1
++x -> primero suma 1 al valor y luego devuelve el valor
*/

//Ejercicio 3 — Asignación compuesta

let saldo = 100;
saldo += 50;
saldo -= 30;
saldo *= 2;
console.log(saldo);

//Calcula el valor final sin ejecutar el código, después verifica el resultado.
/*

*/

//Ejercicio 4 — Operador módulo (resto)

let n = 7;
let esPar = n % 2 === 0;
console.log(esPar);

let m = -4;
let esParM = m % 2 === 0;
console.log(esParM);

/*¿Qué se muestra en cada console.log? ¿Por qué es útil el operador % en
programación? Propón un caso de uso distinto al de comprobar paridad.*/


//Ejercicio 5 — Igualdad débil vs estricta

console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);

/*Predice cada resultado y explica por qué == produce coerción de tipo
mientras que === no lo hace.*/


//Ejercicio 6 — Operadores lógicos y cortocircuito

let usuario = null;
let nombre = usuario && "Ana";
console.log(nombre);

let mensaje = "" || "Bienvenido";
console.log(mensaje);

/*¿Qué imprime cada línea? Explica el concepto de "cortocircuito"
(short-circuit evaluation) en los operadores && y ||.*/


//Ejercicio 7 — Combinando comparación y lógicos

let edad = 17;
let tieneConsentimiento = true;

let puedeRegistrarse = edad >= 18 || (edad >= 14 && tieneConsentimiento);
console.log(puedeRegistrarse);

/*Calcula el resultado paso a paso, indicando qué subexpresión se evalúa
primero y por qué.*/


//Ejercicio 8 — Ternario anidado

let nota = 6;

let calificacion = nota >= 9 ? "Sobresaliente"
                  : nota >= 7 ? "Notable"
                  : nota >= 5 ? "Aprobado"
                  : "Suspenso";

console.log(calificacion);

/*Cambia el valor de "nota" a 9, a 6 y a 3, y anota el resultado en cada
caso. Después, reescribe el mismo bloque usando if / else if y compara
la legibilidad de ambas versiones.*/


//Ejercicio 9 — || frente a ?? (coalescencia nula)

let porcentaje = 0;

let valor = porcentaje || 10;
let valorSeguro = porcentaje ?? 10;

console.log(valor);
console.log(valorSeguro);

/*Explica por qué "valor" y "valorSeguro" son distintos aunque
"porcentaje" vale lo mismo en ambos casos. ¿Cuál de los dos operadores
sería correcto usar si 0 es un descuento válido?*/


//Ejercicio 10 — Truthy / falsy con distintos tipos de dato

let valores = [0, "", null, undefined, NaN, "0", [], {}, " ", -0];

/*Para cada elemento de la lista anterior, indica (sin ejecutar nada
todavía) si se comportaría como truthy o falsy dentro de un if.
Después, comprueba tu respuesta escribiendo:*/

if (valores[0]) { console.log("truthy"); } else { console.log("falsy"); }

/*y repitiendo el proceso cambiando el índice para cada valor de la
lista. ¿Hay algún resultado que no esperabas?*/