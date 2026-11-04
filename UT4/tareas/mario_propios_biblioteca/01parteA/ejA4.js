// A4. Set y Map: lista de inscripciones

const inscripciones = [
  "ana@ies.es", "luis@ies.es", "ANA@ies.es", "marta@ies.es",
  "luis@ies.es", "pablo@ies.es", "Marta@ies.es"
];

// 1. Usar un Set para obtener los correos sin repetir
const sinRepetir = new Set(inscripciones);
console.log("1. Set sin normalizar:", sinRepetir);
console.log("Total sin normalizar:", sinRepetir.size); // Salen 6

// 2. Normalizar antes cada correo a minúsculas y meterlo en un Set
const enMinusculas = inscripciones.map(correo => correo.toLowerCase());
const normalizadosSinRepetir = new Set(enMinusculas);
console.log("2. Set normalizado:", normalizadosSinRepetir);
console.log("Total normalizado:", normalizadosSinRepetir.size); // Salen 4

// 3. Usar un Map para contar cuántas veces aparece cada correo normalizado
const conteo = new Map();

for (const correo of enMinusculas) {
  const veces = conteo.get(correo) ?? 0;
  conteo.set(correo, veces + 1);
}

console.log("3. Frecuencia de cada correo:");
for (const [correo, cantidad] of conteo) {
  console.log(`${correo} → ${cantidad}`);
}

// 4. Convertir el Set del apartado 2 en un array ordenado alfabéticamente
const arrayOrdenado = [...normalizadosSinRepetir].sort();
console.log("4. Array ordenado:", arrayOrdenado);