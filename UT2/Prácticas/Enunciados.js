/*
  BATERÃA DE EJERCICIOS Â· JavaScript en entorno cliente (0612)
  2Âº DAW Â· IES Leonardo da Vinci

  CÃ³mo usar este archivo en Visual Studio Code:
    1. Abre esta carpeta en VS Code.
    2. Completa cada ejercicio donde pone // TODO.
    3. Guarda el archivo (Ctrl + S).
    4. Abre la terminal integrada (Ctrl + Ã±  o  Ctrl + `).
    5. Ejecuta:   node ejercicios.js
    6. Comprueba que lo que aparece en la consola coincide con el
       resultado indicado en el comentario "// â†’ " de cada ejercicio.

  No hace falta ningÃºn archivo HTML: todo se ejecuta con Node.js
  directamente desde la terminal.
*/

// ============================================================
// EJERCICIO 1 Â· DeclaraciÃ³n de variables: let vs const
// ============================================================
console.log("--- Ejercicio 1 ---");

// a) Declara una variable "edad" con let, inicializada a 20.
//    ReasÃ­gnale el valor 21 y muestra el resultado con console.log.
// TODO

// b) Declara una constante "PI" con el valor 3.1416 y muÃ©strala.
//    DespuÃ©s, intenta reasignarle el valor 3 en una nueva lÃ­nea.
//    Ejecuta el archivo y anota en un comentario quÃ© error aparece.
// TODO


// ============================================================
// EJERCICIO 2 Â· var vs let: Ã¡mbito y hoisting
// ============================================================
console.log("\n--- Ejercicio 2 ---");

// a) Dentro de un bloque if (true) { ... }, declara "mensaje" con var
//    y asÃ­gnale un texto. Intenta usar console.log(mensaje) FUERA
//    del bloque. Â¿QuÃ© ocurre?
// TODO

// b) Repite el mismo experimento pero declarando "mensaje2" con let
//    dentro del bloque. Â¿QuÃ© diferencia observas al intentar
//    usarla fuera del bloque? (usa try/catch o comÃ©ntalo si da error)
// TODO


// ============================================================
// EJERCICIO 3 Â· Tipos primitivos y typeof
// ============================================================
console.log("\n--- Ejercicio 3 ---");

// Crea una variable para cada uno de estos tipos y muestra su
// typeof: string, number, boolean, undefined, null, symbol, bigint.
// Ejemplo ya resuelto:
let ejemploString = "hola";
console.log(typeof ejemploString); // â†’ "string"

// TODO: number
// TODO: boolean
// TODO: undefined
// TODO: null   (recuerda: typeof null â†’ "object", es un caso especial)
// TODO: symbol
// TODO: bigint


// ============================================================
// EJERCICIO 4 Â· Autoboxing
// ============================================================
console.log("\n--- Ejercicio 4 ---");

// a) Declara una variable de texto en minÃºsculas y usa el mÃ©todo
//    .toUpperCase() sobre ella directamente (sin guardar el resultado
//    en una variable intermedia). Muestra el resultado.
// TODO

// b) En un comentario, explica con tus palabras por quÃ© esto
//    funciona si un string no es un objeto.
// TODO (comentario explicativo)


// ============================================================
// EJERCICIO 5 Â· NotaciÃ³n cientÃ­fica
// ============================================================
console.log("\n--- Ejercicio 5 ---");

// a) Declara la distancia Tierra-Sol aproximada: 1.5e8 (km) y muÃ©strala.
// TODO

// b) Declara un nÃºmero muy pequeÃ±o usando notaciÃ³n cientÃ­fica
//    (por ejemplo, el tamaÃ±o de un virus: 1.2e-7) y muÃ©stralo.
// TODO


// ============================================================
// EJERCICIO 6 Â· Sistemas numÃ©ricos: hexadecimal, octal y binario
// ============================================================
console.log("\n--- Ejercicio 6 ---");

// a) Declara un color en hexadecimal (0x...) y conviÃ©rtelo a decimal
//    mostrando el valor directamente con console.log.
// TODO

// b) Declara un nÃºmero en binario (0b...) que represente el 13
//    y compruÃ©balo con console.log.
// TODO

// c) Declara un nÃºmero en octal (0o...) y muestra su valor decimal.
// TODO


// ============================================================
// EJERCICIO 7 Â· NÃºmeros especiales
// ============================================================
console.log("\n--- Ejercicio 7 ---");

// a) Provoca un NaN dividiendo 0 entre 0 y muÃ©stralo.
// TODO

// b) Provoca un Infinity dividiendo 1 entre 0 y muÃ©stralo.
// TODO

// c) Comprueba con console.log si NaN === NaN. Â¿QuÃ© obtienes?
// TODO


// ============================================================
// EJERCICIO 8 Â· Strings: creaciÃ³n y propiedades
// ============================================================
console.log("\n--- Ejercicio 8 ---");

// a) Crea dos strings, uno con comillas simples y otro con dobles,
//    y concatÃ©nalos con el operador + dejando un espacio entre ambos.
// TODO

// b) Muestra la longitud (.length) del string resultante.
// TODO


// ============================================================
// EJERCICIO 9 Â· Plantillas de string (template literals)
// ============================================================
console.log("\n--- Ejercicio 9 ---");

// a) Declara "nombre" y "cursoActual" (nÃºmero), y construye con una
//    plantilla de string un mensaje: "Hola <nombre>, estÃ¡s en 2Âº de <curso>"
// TODO

// b) Dentro de otra plantilla, incluye una expresiÃ³n matemÃ¡tica,
//    por ejemplo el curso siguiente (cursoActual + 1).
// TODO


// ============================================================
// EJERCICIO 10 Â· Secuencias de escape
// ============================================================
console.log("\n--- Ejercicio 10 ---");

// a) Muestra un texto que ocupe dos lÃ­neas usando \n dentro de un
//    string normal (con comillas, sin plantilla).
// TODO

// b) Muestra un texto que contenga una comilla doble dentro de un
//    string delimitado tambiÃ©n por comillas dobles, usando \".
// TODO


// ============================================================
// EJERCICIO 11 Â· Booleanos: truthy y falsy
// ============================================================
console.log("\n--- Ejercicio 11 ---");

// a) Declara "mayorDeEdad" como el resultado de comparar una edad
//    con 18 usando >=, y muÃ©stralo.
// TODO

// b) Usa Boolean(...) para comprobar si estos valores son truthy o
//    falsy: 0, "", "hola", null, undefined, 42
// TODO (6 console.log, uno por valor)


// ============================================================
// EJERCICIO 12 Â· Operadores aritmÃ©ticos
// ============================================================
console.log("\n--- Ejercicio 12 ---");

// a) Declara dos nÃºmeros y muestra el resultado de sumarlos,
//    restarlos, multiplicarlos, dividirlos y el resto (%) entre ellos.
// TODO

// b) Calcula 2 elevado a 10 usando el operador **.
// TODO

// c) Declara un contador en 0 e incremÃ©ntalo dos veces con ++,
//    mostrando su valor final.
// TODO


// ============================================================
// EJERCICIO 13 Â· Relacionales, coerciÃ³n y comparaciÃ³n estricta
// ============================================================
console.log("\n--- Ejercicio 13 ---");

// a) Compara el nÃºmero 5 con el string "5" usando == y luego ===.
//    Muestra ambos resultados y comenta la diferencia.
// TODO

// b) Compara null == undefined y null === undefined. Comenta el resultado.
// TODO

// c) Comprueba si "10" > "9" (ambos strings). Â¿El resultado te
//    sorprende? ComÃ©ntalo (pista: se comparan alfabÃ©ticamente).
// TODO


// ============================================================
// EJERCICIO 14 Â· Operadores lÃ³gicos y cortocircuito
// ============================================================
console.log("\n--- Ejercicio 14 ---");

// a) Declara "usuario" con el valor null, y usa || para asignar
//    "nombreMostrado" con "usuario" si existe o "Invitado" si no.
// TODO

// b) Usa && para mostrar un texto SOLO si una variable booleana
//    "sesionIniciada" es true.
// TODO

// c) Usa ! para invertir el valor de una variable booleana y muÃ©stralo.
// TODO


// ============================================================
// EJERCICIO 15 Â· Objetos: mutabilidad y comparaciÃ³n por referencia
// ============================================================
console.log("\n--- Ejercicio 15 ---");

// a) Crea un objeto "persona1" con const y con las propiedades
//    nombre y edad. Modifica despuÃ©s el valor de "edad" directamente
//    (Â¿te deja hacerlo aunque sea const?). Muestra el objeto final.
// TODO

// b) Crea "persona2" con el MISMO contenido que persona1 (otro objeto
//    distinto) y compara persona1 === persona2. Comenta el resultado.
// TODO

// c) Crea "persona3 = persona1" (misma referencia) y compara
//    persona1 === persona3. Comenta la diferencia con el apartado b).
// TODO