let numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let esCorrecto = false;
let numeroUsuario;
let intentos = 0;
let salir = false;

do {
    let entrada = prompt("Introduce un número de 1-100"); 

    // 1. Si la entrada es null salimos del programa
    if (entrada == null) {

        let quiereSalir = confirm("¿Seguro que quieres dejar de jugar?");

        if (quiereSalir) {
            alert("Saliendo del juego....");
            salir = true;
        }

    // 2. Validamos si no es un número
    } else if (isNaN(entrada) || entrada.trim() === "") {
        alert("Error. Debes de introducir un número válido");
        
    // 3. Si es un número válido, ejecutamos toda la lógica dentro de estas llaves {}
    } else {
        numeroUsuario = parseInt(entrada);
        intentos++;
            
        if (numeroAleatorio == numeroUsuario) {
            esCorrecto = true;
            alert("CORRECTO!! El número era: " + numeroAleatorio + " acertaste en " + intentos + " intentos");
        } else if (numeroAleatorio > numeroUsuario) {
            alert("El número secreto es mayor");
        } else {
            alert("El número secreto es menor");
        }
    }

} while (esCorrecto === false && !salir);