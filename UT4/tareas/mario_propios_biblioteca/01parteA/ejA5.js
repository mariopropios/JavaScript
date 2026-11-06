// A5. Funciones y callbacks

// 1. transformar (con bucle, sin map)
function transformar(array, fn) {
  const resultado = [];

  for (const elemento of array) {
    resultado.push(fn(elemento));
  }

  return resultado;
}

// 2. Quedarse (con bucle, sin filter)
function quedarse(array, condicion) {
  const resultado = [];

  for (const elemento of array) {
    if (condicion(elemento)) {
      resultado.push(elemento);
    }
  }

  return resultado;
}

// 3. prueba con funciones flecha
const numeros = [3, 8, 1, 6];

console.log("Doblados:", transformar(numeros, n => n * 2));
console.log("Pares:", quedarse(numeros, n => n % 2 === 0));
console.log("Pares y luego doblados:",transformar(quedarse(numeros, n => n % 2 === 0), n => n * 2));

// 4. lo mismo con map y filter
console.log("Doblados:", numeros.map(n => n * 2));
console.log("Pares:", numeros.filter(n => n % 2 === 0));
console.log("Pares y luego doblados:", numeros.filter(n => n % 2 === 0).map(n => n * 2));

// 5. Total con iva
const precios = [12, 45, 8, 99, 30];

const totalConIva = precios
  .filter(precio => precio > 10)
  .map(precio => precio * 1.21)
  .reduce((suma, precio) => suma + precio, 0);
 
console.log("Total con IVA:", Math.round(totalConIva * 100) / 100);