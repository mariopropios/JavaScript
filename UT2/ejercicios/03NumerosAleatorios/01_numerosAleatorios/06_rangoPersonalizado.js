// 1. Pedimos los números (el navegador los guarda como texto)
let minStr = prompt("Introduce el número mínimo:");
let maxStr = prompt("Introduce el número máximo:");

// 2. Convertimos el texto a números de verdad
let min = Number(minStr);
let max = Number(maxStr);

// 3. Validamos si hay errores
if (isNaN(min) || isNaN(max)) {
    alert("¡Error! Debes escribir números.");
} else if (min >= max) {
    alert("¡Error! El mínimo tiene que ser menor que el máximo.");
} else {
    // 4. Si todo está bien, generamos el número aleatorio en ese rango
    let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("Tu número aleatorio es: " + aleatorio);
}