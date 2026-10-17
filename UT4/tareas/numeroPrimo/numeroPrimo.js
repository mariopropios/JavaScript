// BOOLEAN ES PRIMO

function esPrimo(numero){

    //---- NEGACIÓN 

    // 0 y 1 y negativos no son primos
    if(numero<2){
        return false;
    }

    // buscamos dividsores
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;   // si sencontramos un divisor: no es primo
        }
    }
    
    //------ AFIRMACIÓN
    return true;
}

// LÓGICA VISUALIZADO
const primos = [];

for (let n = 1; n <= 1000; n++) {
    if (esPrimo(n)) {
        primos.push(n);
    }
}

// VISUALIZAR
document.getElementById("resultado").textContent = primos.join(", ");
document.getElementById("total").textContent = `Hay ${primos.length} números primos entre 1 y 1000.`;