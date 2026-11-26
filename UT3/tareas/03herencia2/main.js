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
    .sort(Ordenador.compararPrecio);
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

// G) Suma gb de ram a los equipos de esa clase
function ampliarRam(lista, clase, gb) {
  lista
    .filter((equipo) => equipo instanceof clase)
    .forEach((equipo) => {
      equipo.ram += gb;
    });
}

// --- PRUEBAS

mostrarInventario(inventario);

console.log("Portátiles (con tablets):", contarPortatiles(inventario)); // 4

console.log("Solo Portatil:", contarSoloPortatiles(inventario));       // 2

const caro = masCaro(inventario);

console.log("Más caro:", caro.toString(), "→", caro.precio().toFixed(2), "€");

const baratos = dentroDePresupuesto(inventario, 700);

console.log("Dentro de 700 €:", baratos.length);

mostrarInventario(baratos);

const totales = totalPorMarca(inventario);

console.log("--- Totales por marca ---");

for (const marca in totales) {
  console.log(`${marca}: ${totales[marca].toFixed(2)} €`);
}

describir(inventario[4]); // el iPad

ampliarRam(inventario, Portatil, 8);

console.log("Tras ampliarRam(Portatil, 8):");

mostrarInventario(inventario);

// --- PREGUNTAS (Parte 7) --
/*
1) contarPortatiles usa instanceof Portatil, así que también cuenta las Tablet
   (una Tablet es un Portatil por herencia). contarSoloPortatiles mira
   constructor.name === "Portatil" y excluye las Tablet. Por eso 4 frente a 2.

2) Se llama polimorfismo: cada objeto ejecuta su propia versión de precio().
   Para una Tablet se ejecuta Tablet.precio() (que usa super.precio() del Portatil).

3) Tablet reutiliza el del padre con super.precio() y solo suma el lápiz.
   Servidor sustituye el cálculo por completo (no usa super). Conviene super
   cuando el precio base sigue valiendo; conviene sustituir cuando la fórmula
   es distinta (como el servidor).

4) describir recorre solo las propiedades propias del objeto (for...in).
   precio y toString son métodos del prototipo, no propiedades enumerables.

5) Sí cambia el inventario original: los objetos se pasan por referencia.
   ampliarRam modifica equipo.ram de esos mismos objetos.

6) ampliarRam(inventario, Ordenador, 8) sumaría 8 GB a TODOS, porque Portatil,
   Tablet, Servidor y Gaming también son instanceof Ordenador.
*/