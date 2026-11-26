// INVENTARIO
const inventario=[
    new Ordenador("HP","EliteDesk",16,1024,24),
    new Ordenador("Acer", "Aspire"),
    new Portatil("Apple", "MacBook Air"),
    new Portatil("Lenovo", "Yoga", 16, 1024, 14, 10),
    new Tablet("Apple", "iPad", 8, 256, 11, 10, true),
    new Tablet("Samsung", "Galaxy Tab"),
    new Servidor("Dell", "PowerEdge", 16, 64, 4000),
    new Gaming("Asus", "ROG", "RTX 4070", 32, 2000),
    new Gaming("HP", "Omen", "RX 7800")
];

// Comprobar error de gaming sin gráfica
try{
    new Gaming("Prueba","Sin grafica");
}catch(error){
    console.log("Error por crear un ordenador gaming sin gráfica: ", error.message);
}

// --- FUNCIONES DE RECORRIDO

// A) Muestra cada equipo numerado con su tipo, toString() y precio. 
function mostrarInventario(lista) {
  console.log("--- Inventario ---");
  lista.forEach((equipo, indice) => {
    console.log(
      `${indice + 1}. [${equipo.constructor.name}] ${equipo.toString()} → ${equipo.precio().toFixed(2)} €`
    );
  });
}

// B) Muestra cada propiedad del equipo como propiedad: valor
function describir(equipo) {
  console.log(`--- Descripción de ${equipo.constructor.name} ---`);
  for (const propiedad in equipo) {
    console.log(`${propiedad}: ${equipo[propiedad]}`);
  }
}

// C1) Cuántos equipos son portátiles (incluye tablets por instanceof)
function contarPortatiles(lista) {
  return lista.filter((equipo) => equipo instanceof Portatil).length;
}

// C2) Solo Portatil, sin contar tablets
function contarSoloPortatiles(lista) {
  return lista.filter((equipo) => equipo.constructor.name === "Portatil").length;
}

// D) Equipo más caro
function masCaro(lista) {
  return lista.reduce((mejor, actual) =>
    actual.precio() > mejor.precio() ? actual : mejor
  );
}

//E) Equipos que no superan maximo €, del más barato al más caro
function dentroDePresupuesto(lista, maximo) {
  return lista
    .filter((equipo) => equipo.precio() <= maximo)
    .sort(Ordenador.compararPorPrecio);
}

// F) importe total por marcas
function totalPorMarca(lista){
    const totales = {};

    lista.forEach((equipo) => {
        if (!totales[equipo.marca]) {
            totales[equipo.marca] = 0;
        }

        totales[equipo.marca] += equipo.precio();
    });

  return totales;
}