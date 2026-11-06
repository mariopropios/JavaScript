// A6. Depuración

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