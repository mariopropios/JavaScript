const frutas = ["manzana", "pera", "kiwi", "plátano"];

// Generamos un número aleatorio entre 0 y 3 (el tamaño del array es 4)
let posicionAleatoria = Math.int(Math.random() * frutas.length);

// Mostramos la fruta que está en esa posición secreta
console.log("Fruta elegida: " + frutas[posicionAleatoria]);