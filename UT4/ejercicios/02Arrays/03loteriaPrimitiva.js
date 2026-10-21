/*
    Crea una aplicación web que muestre cincuenta combinaciones para jugar a la lotería
    primitiva. Cada combinación está formada por seis números del 1 al 49, y dentro de una
    misma combinación los números no se pueden repetir.
    Para garantizar que no hay repeticiones y que todas las combinaciones son igual de
    probables, utiliza el algoritmo de Fisher-Yates:
         Crea un array con los números del 1 al 49.
         Para cada una de las seis posiciones de la combinación (índices 0 a 5), elige al
        azar un elemento entre esa posición y el final del array, e intercámbialo con el
        que ocupa esa posición.
         Los seis primeros elementos del array forman la combinación. 

*/
// Constantes: buena práctica para facilitar el mantenimiento del código
const N_COMBINACIONES = 50;
const RANGO_TOTAL = 49;
const RANGO_SOLUCION = 6;
// Array que contendrá los números de la primitiva
const primitiva = [];
// Relleno del array: el índice 0 contiene el 1, el índice 1 el 2,
// y así sucesivamente hasta el 49
for (let i = 0; i < RANGO_TOTAL; i++) {
 primitiva[i] = i + 1;
}
// Bucle principal: en cada vuelta se genera y muestra una combinación
for (let i = 1; i <= N_COMBINACIONES; i++) {
 // Algoritmo de Fisher-Yates aplicado a las seis primeras posiciones
 for (let j = 0; j < RANGO_SOLUCION; j++) {
 // k es un índice aleatorio entre j y el final del array
 let k = j + Math.floor(Math.random() * (primitiva.length - j));
 // Intercambiamos: el número elegido pasa a la posición j
 [primitiva[j], primitiva[k]] = [primitiva[k], primitiva[j]];
 }
 document.write(`<h2>Combinación número ${i}</h2>`);
 // Mostrar los seis primeros elementos del array
 document.write("<p>");
 for (let j = 0; j < RANGO_SOLUCION; j++) {
 document.write(`${primitiva[j]} `);
 }
 document.write("</p>");
}