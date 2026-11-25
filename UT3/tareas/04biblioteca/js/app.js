import { catalogo } from "./biblioteca.js";

const TEXTO_BUSQUEDA = "de";

function pintarSeccion(titulo, lista, idSeccion) {

  const contenedor = document.querySelector("#contenido");

  let cuerpo = "";

  if (lista.length === 0) {
    cuerpo = `<p class="vacio">No hay libros en esta sección</p>`;
  } else {
    const tarjetas = lista.map(function (libro) {
      const clase = libro.disponible ? "disponible" : "prestado";
      const estado = libro.disponible ? "Disponible" : "Prestado";

      return `
        <article class="tarjeta ${clase}">
          <span class="etiqueta-estado">${estado}</span>
          <h3 class="tarjeta-titulo">${libro.titulo}</h3>
          <p class="tarjeta-autor">${libro.autor}</p>
          <ul class="tarjeta-datos">
            <li>Año: ${libro.annio}</li>
            <li>Páginas: ${libro.paginas}</li>
            <li>Género: ${libro.genero}</li>
            <li>Antigüedad: ${libro.antiguedad()} años</li>
          </ul>
        </article>
      `;
    }).join("");

    cuerpo = `<div class="rejilla-tarjetas">${tarjetas}</div>`;
  }

  contenedor.innerHTML += `
    <section id="${idSeccion}">
      <h2>${titulo}</h2>
      ${cuerpo}
    </section>
  `;
}

function pintarIndice(secciones) {
  const nav = document.querySelector("#indice");
  nav.innerHTML = secciones.map(function (s) {
    return `<a href="#${s.id}">${s.titulo}</a>`;
  }).join("");
}

function pintarEstadisticas() {
  const caja = document.querySelector("#panel-estadisticas");
  const e = catalogo.estadisticas();

  const generosHtml = [...e.porGenero].map(function (par) {
    const genero = par[0];
    const n = par[1];
    return `<li>${genero}: ${n}</li>`;
  }).join("");

  caja.innerHTML = `
    <h2>Estadísticas</h2>
    <ul>
      <li>Total de libros: <strong>${e.total}</strong></li>
      <li>Disponibles: <strong>${e.disponibles}</strong></li>
      <li>Prestados: <strong>${e.prestados}</strong></li>
      <li>Media de páginas: <strong>${e.mediaPaginas}</strong></li>
      <li>Libro más antiguo: <strong>${e.masAntiguo}</strong></li>
    </ul>
    <h3>Libros por género</h3>
    <ul>${generosHtml}</ul>
  `;
}

function simularPrestamos() {
  console.log("--- Simulación de préstamos ---");

  console.log("Prestar El Quijote:", catalogo.libros[0].prestar());
  console.log("Prestar Niebla:", catalogo.libros[2].prestar());
  console.log("Prestar Campos de Castilla:", catalogo.libros[4].prestar());

  console.log("Devolver La casa de Bernarda Alba:", catalogo.libros[1].devolver());

  console.log("Intentar prestar otra vez El Quijote:", catalogo.libros[0].prestar());
}


// Programa principal

console.table(catalogo.libros.map(function (l) {
  return {
    titulo: l.titulo,
    autor: l.autor,
    anio: l.annio,
    paginas: l.paginas,
    genero: l.genero,
    disponible: l.disponible
  };
}));

simularPrestamos();

const seccionesIndice = [];

// 1) Catálogo completo ordenado por título
seccionesIndice.push({ id: "catalogo-completo", titulo: "Catálogo completo" });
pintarSeccion(
  "Catálogo completo (ordenado por título)",
  catalogo.ordenarPor("titulo"),
  "catalogo-completo"
);

// 2) Disponibles y prestados
seccionesIndice.push({ id: "disponibles", titulo: "Disponibles" });
pintarSeccion(
  "Libros disponibles",
  catalogo.filtrarPorDisponibilidad(true),
  "disponibles"
);

seccionesIndice.push({ id: "prestados", titulo: "Prestados" });
pintarSeccion(
  "Libros prestados",
  catalogo.filtrarPorDisponibilidad(false),
  "prestados"
);

// 3) Una sección por género
const listaGeneros = catalogo.generos();
for (const genero of listaGeneros) {
  const id = "genero-" + genero;
  seccionesIndice.push({ id: id, titulo: "Género: " + genero });
  pintarSeccion("Género: " + genero, catalogo.filtrarPorGenero(genero), id);
}

// 4) Los 5 más antiguos
const cincoAntiguos = catalogo.ordenarPor("annio", true).slice(0, 5);
seccionesIndice.push({ id: "mas-antiguos", titulo: "Más antiguos" });
pintarSeccion("Los 5 libros más antiguos", cincoAntiguos, "mas-antiguos");

// 5) Novelas disponibles ordenadas por páginas
const novelasDisponibles = catalogo
  .filtrarPorGenero("novela")
  .filter(function (l) {
    return l.disponible;
  })
  .slice()
  .sort(function (a, b) {
    return a.paginas - b.paginas;
  });

seccionesIndice.push({ id: "novelas-disponibles", titulo: "Novelas disponibles" });
pintarSeccion(
  "Novelas disponibles ordenadas por páginas",
  novelasDisponibles,
  "novelas-disponibles"
);

// 6) Búsqueda
const resultados = catalogo.buscar(TEXTO_BUSQUEDA);
seccionesIndice.push({ id: "busqueda", titulo: "Búsqueda" });
pintarSeccion(
  'Resultados de la búsqueda: "' + TEXTO_BUSQUEDA + '"',
  resultados,
  "busqueda"
);

pintarIndice(seccionesIndice);
pintarEstadisticas();