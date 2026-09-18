// Aparecera en la pagina pulsando F12 y en la seccion consola
console.log("Hola Mundo desde consola");

// En el ID salida (de html) añade el texto.
document.getElementById("salida").textContent = "Hola mundo desde JS";

window.alert("Alerta")
window.confirm("Confirmacion");
window.prompt("Prompt");

alert("Alerta 2");

let nombre = window.prompt("Escribe tu nombre");

alert(`Hola, ${nombre}. Bienvenido/a `);

console.log("Esto se ejecuta");