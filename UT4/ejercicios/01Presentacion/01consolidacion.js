// Crear un Map
const modulosDaw = new Map([
    ["Desarrollo web entorno servidor", 8],
    ["Desarrollo web entorno cliente", 8],
    ["Despliegue de aplicaciones web", 3],
    ["Diseño de interfaces web", 6],
    ["IPE", 3],
    ["Inglés", 3]
]);

let totalHoras = 0;
let comprobarModulo = "IPE";

// Total de horas semanales
for (let horas of modulosDaw.values()) {
    totalHoras = totalHoras+horas;
}
console.log(`A la semana hay un total de horas de ${totalHoras}`);

// Comprobar si existe un módulo
if(modulosDaw.has(comprobarModulo)){
    console.log(`El módulo ${comprobarModulo} si que está`);
}else{
    console.log(`El módulo ${comprobarModulo} no está`);
}

// Eliminar módulo
modulosDaw.delete("Inglés");
modulosDaw.forEach((hora, indice) => {
    console.log(indice,hora);
});