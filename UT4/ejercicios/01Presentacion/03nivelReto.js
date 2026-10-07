const agenda = new Map();
 
// ---------- ALTA 
let nombre = "Marta";
let telefono = "611 222 333";
 
if (agenda.has(nombre)) {
  console.log(`"${nombre}" ya existe en la agenda.`);
} else {
  agenda.set(nombre, telefono);
  console.log(`Añadido: ${nombre}`);
}
 
// Añadimos más contactos repitiendo el mismo bloque
nombre = "Alvaro";
telefono = "600 123 456";
if (agenda.has(nombre)) {
  console.log(`"${nombre}" ya existe en la agenda.`);
} else {
  agenda.set(nombre, telefono);
  console.log(`Añadido: ${nombre}`);
}
 
nombre = "Zoe";
telefono = "622 333 444";
if (agenda.has(nombre)) {
  console.log(`"${nombre}" ya existe en la agenda.`);
} else {
  agenda.set(nombre, telefono);
  console.log(`Añadido: ${nombre}`);
}
 
nombre = "Carlos";
telefono = "633 444 555";
if (agenda.has(nombre)) {
  console.log(`"${nombre}" ya existe en la agenda.`);
} else {
  agenda.set(nombre, telefono);
  console.log(`Añadido: ${nombre}`);
}
 
// Intento repetido: debe avisar
nombre = "Marta";
telefono = "000 000 000";
if (agenda.has(nombre)) {
  console.log(`"${nombre}" ya existe en la agenda.`);
} else {
  agenda.set(nombre, telefono);
  console.log(`Añadido: ${nombre}`);
}
 
// ---------- LISTADO ALFABÉTICO ----------
console.log("\n--- Listado alfabético ---");
const nombres = [...agenda.keys()];   // 1. los nombres pasan a un array
nombres.sort();                       // 2. se ordenan de A a Z
for (const n of nombres) {            // 3. se muestran uno a uno
  console.log(`${n} - ${agenda.get(n)}`);
}
 
// ---------- BÚSQUEDA ----------
console.log("\n--- Búsqueda ---");
let buscado = "Zoe";
if (agenda.has(buscado)) {
  console.log(`${buscado}: ${agenda.get(buscado)}`);
} else {
  console.log(`"${buscado}" no está en la agenda.`);
}
 
buscado = "Pedro";
if (agenda.has(buscado)) {
  console.log(`${buscado}: ${agenda.get(buscado)}`);
} else {
  console.log(`"${buscado}" no está en la agenda.`);
}
 
// ---------- BAJA ----------
console.log("\n--- Baja ---");
let borrar = "Carlos";
if (agenda.delete(borrar)) {
  console.log(`Eliminado: ${borrar}`);
} else {
  console.log(`"${borrar}" no está en la agenda.`);
}
 
borrar = "Pedro";
if (agenda.delete(borrar)) {
  console.log(`Eliminado: ${borrar}`);
} else {
  console.log(`"${borrar}" no está en la agenda.`);
}
 
// ---------- LISTADO FINAL ----------
console.log("\n--- Listado final ---");
const nombresFinal = [...agenda.keys()];
nombresFinal.sort();
for (const n of nombresFinal) {
  console.log(`${n} - ${agenda.get(n)}`);
}
console.log(`Total de contactos: ${agenda.size}`);