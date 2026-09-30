let sumaTiradas = 0;

for (let i = 1; i <= 10; i++) {
    // 1. Tiramos el dado (número del 1 al 6)
    let tirada = Math.floor(Math.random() * 6) + 1;
    
    // 2. Mostramos lo que ha salido en esta tirada
    console.log("Tirada " + i + ": " + tirada);
    
    // 3. Metemos el valor en la hucha (sumaTiradas = sumaTiradas + tirada)
    sumaTiradas += tirada;
}

// Al terminar el bucle, mostramos el total acumulado
console.log("Suma total de las 10 tiradas: " + sumaTiradas);