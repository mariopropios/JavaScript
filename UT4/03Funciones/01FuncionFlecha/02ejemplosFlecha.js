/*
 * ============================================================
 *  UT4 · Funciones flecha — EJERCICIO PARA EL ALUMNO
 * ============================================================
 */

// Utilidad de comprobación (no hace falta modificarla)
const comprobar = (apartado, obtenido, esperado) => {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  console.log(`${ok ? 'OK   ' : 'FALLO'} ${apartado}`, ok ? '' : `→ obtenido: ${JSON.stringify(obtenido)} | esperado: ${JSON.stringify(esperado)}`);
};

// Datos de partida: notas de un grupo de 2º DAW
const alumnos = [
  { nombre: 'Ana',    nota: 7.5 },
  { nombre: 'Bruno',  nota: 4.2 },
  { nombre: 'Carla',  nota: 9.1 },
  { nombre: 'David',  nota: 5.0 },
  { nombre: 'Elena',  nota: 3.8 },
];


// ------------------------------------------------------------
// NIVEL 1 · CONSOLIDACIÓN: convertir a función flecha
// ------------------------------------------------------------

// 1.1 Reescribe esta función como flecha con retorno implícito.
// Como solo hay 1 parámetro (nota), no hacen falta paréntesis.
const estaAprobadoFlecha = nota => nota >= 5;

// 1.2 Reescribe como flecha. Pista: hay parámetro por defecto.
// Al haber 2 parámetros, los paréntesis (numero, decimales = 1) son obligatorios.
const redondearFlecha = (numero, decimales = 1) => Math.round(numero * 10 ** decimales) / 10 ** decimales;

// 1.3 Esta flecha devuelve undefined. Encuentra el error y corrígelo.
// Ponemos paréntesis ({ ... }) para que JS sepa que devolvemos un objeto y no que abrimos función.
const ficha = (nombre, nota) => ({ nombre: nombre, nota: nota });


// ------------------------------------------------------------
// NIVEL 2 · APLICACIÓN: flechas como callbacks
// ------------------------------------------------------------

// 2.1 Crea "nombresAprobados": filtra aprobados y luego saca solo sus nombres.
const nombresAprobados = listaAlumnos =>
  listaAlumnos
    .filter(alumno => estaAprobadoFlecha(alumno.nota)) // 1º Nos quedamos con los objetos de alumnos aprobados
    .map(alumno => alumno.nombre);                     // 2º De cada aprobado, extraemos solo su nombre

// 2.2 Crea "notaMedia": suma las notas con for...of y divide entre el total.
const notaMedia = listaAlumnos => {
  if (listaAlumnos.length === 0) return 0;

  let suma = 0;
  for (const alumno of listaAlumnos) {
    suma = suma + alumno.nota;
  }

  const media = suma / listaAlumnos.length;
  return redondearFlecha(media);
};

// 2.3 Crea "subirNotas": devuelve un nuevo array subiendo la nota sin pasar de 10.
// Nota: puedes usar { nombre: alumno.nombre, nota: ... } o { ...alumno, nota: ... }
const subirNotas = (listaAlumnos, cantidad) =>
  listaAlumnos.map(alumno => ({
    ...alumno, // Copia todas las propiedades del alumno original (nombre, etc.)
    nota: Math.min(alumno.nota + cantidad, 10) // Machaca la nota con la nueva (máximo 10)
  }));


// ------------------------------------------------------------
// NIVEL 3 · RETO
// ------------------------------------------------------------

// 3.1 Crea "crearFiltro": recibe notaMinima y devuelve OTRA función flecha que filtra alumnos.
const crearFiltro = notaMinima => {
  // Devolvemos la función flecha que espera recibir la lista de alumnos
  return listaAlumnos => listaAlumnos.filter(alumno => alumno.nota >= notaMinima);
};

// (O en versión corta de una sola línea como tenías tú, ambas dan OK):
// const crearFiltro = notaMinima => listaAlumnos => listaAlumnos.filter(alumno => alumno.nota >= notaMinima);


// 3.2 (Explica con un comentario, sin código)
//     ¿Por qué el siguiente método no funciona? ¿Cómo lo arreglarías?
const grupo = {
  nombre: '2º DAW',
  describir: () => `Grupo ${this.nombre}`,
};
// TU RESPUESTA:
/*
 * ¿Por qué no funciona?:
 * Porque las funciones flecha NO tienen su propio "this". En lugar de apuntar
 * al objeto "grupo", el "this" busca en el ámbito exterior (global), donde
 * "nombre" no existe, por lo que this.nombre devuelve undefined ("Grupo undefined").
 *
 * ¿Cómo lo arreglarías?:
 * Cambiando la función flecha por un método tradicional de objeto:
 * describir() { return `Grupo ${this.nombre}`; }
 * Así "this" sí apunta al objeto "grupo".
 */


// ============================================================
// COMPROBACIONES (no modificar)
// ============================================================
const probar = (apartado, prueba) => {
  try { prueba(); }
  catch (error) { console.log(`PENDIENTE ${apartado} → ${error.message}`); }
};

probar('1.1', () => comprobar('1.1', [estaAprobadoFlecha(4.9), estaAprobadoFlecha(5)], [false, true]));
probar('1.2', () => comprobar('1.2', [redondearFlecha(6.666), redondearFlecha(6.666, 2)], [6.7, 6.67]));
probar('1.3', () => comprobar('1.3', ficha('Ana', 7.5), { nombre: 'Ana', nota: 7.5 }));
probar('2.1', () => comprobar('2.1', nombresAprobados(alumnos), ['Ana', 'Carla', 'David']));
probar('2.2', () => comprobar('2.2', [notaMedia(alumnos), notaMedia([])], [5.9, 0]));
probar('2.3', () => {
  comprobar('2.3', subirNotas(alumnos, 1.5).map(a => a.nota), [9, 5.7, 10, 6.5, 5.3]);
  comprobar('2.3 (original intacto)', alumnos[2].nota, 9.1);
});
probar('3.1', () => comprobar('3.1', crearFiltro(7)(alumnos).map(a => a.nombre), ['Ana', 'Carla']));