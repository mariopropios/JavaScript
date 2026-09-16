// ==========================================
// 1. VARIABLES Y TIPOS DE DATOS
// ==========================================
let nombre = "Mario";          // Variable que puede cambiar de valor
const anioNacimiento = 2005;   // Constante (su valor no puede cambiar)
let esEstudiante = true;       // Booleano (true o false)

console.log("--- 1. Variables ---");
console.log("Nombre:", nombre);
console.log("Año:", anioNacimiento);


// ==========================================
// 2. OPERACIONES NUMÉRICAS
// ==========================================
let a = 10;
let b = 3;

let suma = a + b;           // 13
let multiplicacion = a * b; // 30
let resto = a % b;          // 1 (el residuo de dividir 10 entre 3)

console.log("\n--- 2. Operaciones Numéricas ---");
console.log("Suma (10 + 3):", suma);
console.log("Multiplicación (10 * 3):", multiplicacion);
console.log("Resto de la división (10 % 3):", resto);


// ==========================================
// 3. CONDICIONALES (if / else)
// ==========================================
let edad = 20;

console.log("\n--- 3. Condicionales ---");
if (edad >= 18) {
    console.log("Resultado: Eres mayor de edad.");
} else {
    console.log("Resultado: Eres menor de edad.");
}


// ==========================================
// 4. BUCLES (Loops)
// ==========================================
console.log("\n--- 4. Bucle For (contar del 1 al 3) ---");
// El bucle se repite mientras la condición (i <= 3) sea verdadera
for (let i = 1; i <= 3; i++) {
    console.log("Vuelta número:", i);
}