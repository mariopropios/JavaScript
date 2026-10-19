/*
Queremos una aplicación que nos permita comprobar hasta qué punto la función
Math.random es realmente aleatoria. Para ello, generaremos 10 000 números aleatorios
del 1 al 10 y mostraremos en una página web cuántas veces ha salido cada número.
Ejemplo de resultado (figura 4.2):
Frecuencias
     Número 1: 1016
     Número 2: 1019
     Número 3: 1059
     Número 4: 992
     Número 5: 995
     Número 6: 969
     Número 7: 977
     Número 8: 1003
     Número 9: 977
     Número 10: 993 
*/
const N_REPETICIONES = 10000;
// Preparación del mapa inicial con todas las frecuencias a cero
let mapa = new Map();
for (let i = 1; i <= 10; i++) {
 mapa.set(i, 0);
}
// Generamos 10 000 números aleatorios del 1 al 10
for (let i = 1; i <= N_REPETICIONES; i++) {
 let n = Math.floor(Math.random() * 10) + 1;
 let frecActual = mapa.get(n);
 mapa.set(n, frecActual + 1);
}
// Mostramos los resultados
document.write("<h1>Frecuencias</h1>");
document.write("<ul>");
for (let i = 1; i <= 10; i++) {
 document.write(
 `<li><strong>Número ${i}:</strong> ${mapa.get(i)}</li>`
 );
}
document.write("</ul>");