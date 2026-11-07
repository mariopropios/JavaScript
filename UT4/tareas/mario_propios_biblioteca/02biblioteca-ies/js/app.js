"use strict";

// ---------------------------------------------------------------------------
// FUNCIÓN DE APOYO (ya hecha, no la modifiques)
// Inserta un texto HTML dentro del elemento indicado por su selector CSS.
// Cómo funciona por dentro se estudiará en las unidades de objetos predefinidos
// y DOM. Por ahora, úsala como una "caja negra":
//   mostrar("#catalogo", "<p>Hola</p>");
// ---------------------------------------------------------------------------
function mostrar(selector, html){
  document.querySelector(selector).innerHTML = html;
}

// ---------------------------------------------------------------------------
// R1 a R7: funciones de cálculo (no deben usar mostrar ni console.log)
// ---------------------------------------------------------------------------

// R1
function valoracionMedia(libro){
  if (!libro || libro.valoraciones.length === 0){
    return null;
  }
  const suma = libro.valoraciones.reduce((acum, nota) => acum + nota, 0);
  const media = suma / libro.valoraciones.length;
  return Math.round(media * 10) / 10;
}

// R2
function librosDisponibles(libros){
  return libros.filter(libro => !libro.prestado);
}

// R3
function librosEntre(libros, desde, hasta){
  const anioDesde = Number(desde);
  const anioHasta = Number(hasta);
  if (Number.isNaN(anioDesde) || Number.isNaN(anioHasta) || anioDesde > anioHasta){
    return [];
  }
  return libros.filter(libro => libro.anio >= anioDesde && libro.anio <= anioHasta);
}

// R4
function generos(libros){
  const todosLosGeneros = libros.map(libro => libro.genero);
  return [...new Set(todosLosGeneros)].sort((a, b) => a.localeCompare(b));
}

// R5
function librosPorAutor(libros){
  const mapaAutores = new Map();
  libros.forEach(libro => {
    const cuentaActual = mapaAutores.get(libro.autor) ?? 0;
    mapaAutores.set(libro.autor, cuentaActual + 1);
  });
  return mapaAutores;
}

// R6
function ranking(libros, n = 3){
  if (n <= 0) return [];
  return libros
    .filter(libro => valoracionMedia(libro) !== null)
    .sort((a, b) => {
      const diferencia = valoracionMedia(b) - valoracionMedia(a);
      if (diferencia !== 0) {
        return diferencia;
      }
      return a.titulo.localeCompare(b.titulo);
    })
    .slice(0, n);
}


// R7
function resumen(libros){
  if (libros.length === 0) {
    return { total: 0, prestados: 0, disponibles: 0, mediaGlobal: null, masAntiguo: null };
  }
  const total = libros.length;
  const disponibles = librosDisponibles(libros).length;
  const prestados = total - disponibles;
  // Juntamos todas las valoraciones de todos los libros en un único array
  const todasLasNotas = libros.reduce((acum, libro) => acum.concat(libro.valoraciones), []);
  const sumaGlobal = todasLasNotas.reduce((acum, nota) => acum + nota, 0);
  const mediaGlobal = todasLasNotas.length > 0
    ? Math.round((sumaGlobal / todasLasNotas.length) * 10) / 10
    : null;
  // Buscamos el libro con el año más pequeño (más antiguo)
  const libroMasAntiguo = libros.reduce((masViejo, actual) =>
    actual.anio < masViejo.anio ? actual : masViejo
  );

  return {
    total,
    prestados,
    disponibles,
    mediaGlobal,
    masAntiguo: libroMasAntiguo.titulo
  };
}

// ---------------------------------------------------------------------------
// R8: funciones que generan HTML (devuelven un string)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Programa principal
// ---------------------------------------------------------------------------
// mostrar("#catalogo", tablaLibros(LIBROS));
// ...
