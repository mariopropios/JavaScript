"use strict";

// R10. Pruebas con console.assert y console.table

// R1: valoracionMedia
console.assert(valoracionMedia(LIBROS[0]) === 4.7, "Error R1: Don Quijote debe tener media 4.7");
console.assert(valoracionMedia(LIBROS[2]) === null, "Error R1 (caso límite): Novelas ejemplares debe devolver null");

// R2: librosDisponibles
console.assert(librosDisponibles(LIBROS).length === 8, "Error R2: Debe haber 8 libros disponibles");
console.assert(librosDisponibles([]).length === 0, "Error R2 (caso límite): Array vacío debe dar 0");

// Mostrar librosDisponibles con console.table
console.table(librosDisponibles(LIBROS));

// R3: librosEntre
console.assert(librosEntre(LIBROS, "1950", "1960").length === 4, "Error R3: Entre 1950 y 1960 hay 4 libros");
console.assert(librosEntre(LIBROS, "abc", 2000).length === 0, "Error R3 (caso límite): Año inválido debe devolver []");
console.assert(librosEntre(LIBROS, 2000, 1950).length === 0, "Error R3 (caso límite): desde > hasta debe devolver []");

// R4: generos
const gen = generos(LIBROS);
console.assert(gen.length === 5 && gen[0] === "Ciencia ficción", "Error R4: 5 géneros empezando por Ciencia ficción");
console.assert(generos([]).length === 0, "Error R4 (caso límite): Array vacío debe devolver []");

// R5: librosPorAutor
console.assert(librosPorAutor(LIBROS).get("Isaac Asimov") === 2, "Error R5: Isaac Asimov tiene 2 libros");
console.assert(librosPorAutor([]).size === 0, "Error R5 (caso límite): Array vacío debe devolver Map vacío");

// R6: ranking (usamos topLibros porque "top" es una palabra reservada de window en el navegador)
const topLibros = ranking(LIBROS);
console.assert(topLibros.length === 3 && topLibros[0].titulo === "Matilda" && valoracionMedia(topLibros[0]) === 4.8, "Error R6: 1º Matilda (4.8)");
console.assert(ranking(LIBROS, 100).length === 12, "Error R6 (caso límite): n mayor que el total de libros");

// R7: resumen
const res = resumen(LIBROS);
console.assert(res.total === 13 && res.prestados === 5 && res.disponibles === 8 && res.masAntiguo === "La Celestina", "Error R7: Resumen incorrecto");
console.assert(resumen([]).total === 0, "Error R7 (caso límite): Array vacío debe dar total 0");