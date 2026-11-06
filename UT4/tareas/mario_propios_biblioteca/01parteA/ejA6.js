// A6. Depuración
/*
function mediaAprobados(notas) {
  let suma = 0;
  let contador = 0;
  for (let i = 0; i <= notas.length; i++) {
    if (notas[i] > 5) {
      suma += notas[i];
      contador++;
    }
  }
  return suma / notas.length;
}
 
console.log(mediaAprobados(["7", 4, 5, 9.5, 3]));
*/

// Ejercicio 6 corregido

function mediaAprobados(notas) {
  let suma = 0;
  let contador = 0;
 
  for (let i = 0; i < notas.length; i++) {
    const nota = Number(notas[i]);
    if (nota >= 5) {
      suma += nota;
      contador++;
    }
  }
 
  if (contador === 0) {
    return null;
  }
  return suma / contador;
}
 
console.log(mediaAprobados(["7", 4, 5, 9.5, 3])); 
console.log(mediaAprobados([3, 4, 2]));
console.log(mediaAprobados([]));