// Ejercicio 1 — Precedencia aritmética

let resultado = 2 + 3 * 4 - (6 / 2);
console.log(resultado);

// ¿Qué valor se muestra? Justifica el orden de evaluación de los operadores.
/*
Se muestra el 11. 
Orden de evaluación:
1. Paréntesis: (6 / 2) = 3
2. Multiplicación: 3 * 4 = 12
3. Suma y resta de izquierda a derecha: 2 + 12 - 3 = 11
*/


// Ejercicio 2 — Incremento/decremento

let x = 5;
console.log(x++);
console.log(x);
console.log(++x);

// Explica la diferencia entre x++ y ++x, indicando qué imprime cada línea.
/*
- console.log(x++): Imprime 5. (Devuelve el valor actual y luego incrementa x en 1).
- console.log(x): Imprime 6. (Muestra el valor actualizado de la variable).
- console.log(++x): Imprime 7. (Incrementa x en 1 primero, y luego devuelve el nuevo valor).
*/


// Ejercicio 3 — Asignación compuesta

let saldo = 100;
saldo += 50;
saldo -= 30;
saldo *= 2;
console.log(saldo);

// Calcula el valor final sin ejecutar el código, después verifica el resultado.
/*
Resultado final: 240
- saldo = 100
- saldo += 50  -> 150
- saldo -= 30  -> 120
- saldo *= 2   -> 240
*/


// Ejercicio 4 — Operador módulo (resto)

let n = 7;
let esPar = n % 2 === 0;
console.log(esPar);

let m = -4;
let esParM = m % 2 === 0;
console.log(esParM);

/*¿Qué se muestra en cada console.log? ¿Por qué es útil el operador % en
programación? Propón un caso de uso distinto al de comprobar paridad.*/
/*
- Primer console.log muestra: false (7 no es divisible exactamente por 2, sobra 1).
- Segundo console.log muestra: true (-4 es divisible exactamente por 2, sobra 0).
- Utilidad del %: Es muy útil para ciclos, carruseles de imágenes o alternar colores 
  en filas de tablas (patrón cebra).
*/


// Ejercicio 5 — Igualdad débil vs estricta

console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);

/*Predice cada resultado y explica por qué == coerción de tipo mientras que === no.*/
/*
- 5 == "5" -> true (El operador == realiza coerción de tipo, convirtiendo el string a número).
- 5 === "5" -> false (El operador === es estricto; compara tanto el valor como el tipo de dato).
- null == undefined -> true (Son considerados equivalentes de forma flexible por ==).
- null === undefined -> false (Tienen tipos de datos diferentes).
*/


// Ejercicio 6 — Operadores lógicos y cortocircuito

let usuario = null;
let nombre = usuario && "Ana";
console.log(nombre);

let mensaje = "" || "Bienvenido";
console.log(mensaje);

/*¿Qué imprime cada línea? Explica el concepto de "cortocircuito" (short-circuit).*/
/*
- Primera línea imprime: null. (El operador && se detiene en el primer valor "falsy", que es null).
- Segunda línea imprime: "Bienvenidos". (El operador || busca el primer valor "truthy", saltando el string vacío "").
*/


// Ejercicio 7 — Combinando comparación y lógicos

let edad = 17;
let tieneConsentimiento = true;

let puedeRegistrarse = edad >= 18 || (edad >= 14 && tieneConsentimiento);
console.log(puedeRegistrarse);

/*Calcula el resultado paso a paso, indicando qué subexpresión se evalúa primero.*/
/*
Resultado: true.
Paso a paso:
1. Se evalúa el paréntesis (edad >= 14 && tieneConsentimiento) -> (17 >= 14) es true, y true && true da true.
2. Queda: 17 >= 18 || true -> false || true.
3. El resultado final del OR es true.
*/


// Ejercicio 8 — Ternario anidado

let nota = 6;

let calificacion = nota >= 9 ? "Sobresaliente"
                  : nota >= 7 ? "Notable"
                  : nota >= 5 ? "Aprobado"
                  : "Suspenso";

console.log(calificacion);

/*Cambia el valor de "nota" a 9, a 6 y a 3, y anota el resultado. Reescribe con if / else if.*/
/*
Resultados:
- Nota 9 -> "Sobresaliente"
- Nota 6 -> "Aprobado"
- Nota 3 -> "Suspenso"

Versión con if / else if:*/
let calificacion2 = 9;
if (nota >= 9) {
    calificacion = "Sobresaliente";
} else if (nota >= 7) {
    calificacion = "Notable";
} else if (nota >= 5) {
    calificacion = "Aprobado";
} else {
    calificacion = "Suspenso";
}
console.log(calificacion2);



// Ejercicio 9 — || frente a ?? (coalescencia nula)

let porcentaje = 0;

let valor = porcentaje || 10;
let valorSeguro = porcentaje ?? 10;

console.log(valor);
console.log(valorSeguro);

/*Explica por qué "valor" y "valorSeguro" son distintos aunque "porcentaje" vale lo mismo.*/
/*
- valor muestra 10 porque || interpreta el 0 como "falsy" y aplica el valor por defecto.
- valorSeguro muestra 0 porque ?? solo reemplaza el valor si este es null o undefined, respetando el 0.
- Si 0 es un descuento válido, el operador correcto a usar es ?? (coalescencia nula).
*/


// Ejercicio 10 — Truthy / falsy con distintos tipos de dato

let valores = [0, "", null, undefined, NaN, "0", [], {}, " ", -0];

/*Para cada elemento indica si se comportaría como truthy o falsy dentro de un if.*/
/*
- Falsy (falsos): 0, "", null, undefined, NaN, -0.
- Truthy (verdaderos): "0", [], {}, " ".
(Nota: sorprendentemente, los arrays vacíos [] y objetos vacíos {} son truthy).
*/