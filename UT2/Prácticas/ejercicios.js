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
let edad = 20;
edad = 21;
console.log(edad); // -> 21

// b) Declara una constante "PI" con el valor 3.1416 y muÃ©strala.
//    DespuÃ©s, intenta reasignarle el valor 3 en una nueva lÃ­nea.
//    Ejecuta el archivo y anota en un comentario quÃ© error aparece.
let PI = 3.1416;
console.log(PI); // -> 3.1416


// ============================================================
// EJERCICIO 2 Â· var vs let: Ã¡mbito y hoisting
// ============================================================
console.log("\n--- Ejercicio 2 ---");

// a) Dentro de un bloque if (true) { ... }, declara "mensaje" con var
//    y asÃ­gnale un texto. Intenta usar console.log(mensaje) FUERA
//    del bloque. Â¿QuÃ© ocurre?
if(true){
  var mensaje = "Mensaje de texto con var";
}
console.log(mensaje)

// b) Repite el mismo experimento pero declarando "mensaje2" con let
//    dentro del bloque. Â¿QuÃ© diferencia observas al intentar
//    usarla fuera del bloque? (usa try/catch o comÃ©ntalo si da error)
if(true){
  let mensaje = "Mensaje de texto con var";
}
console.log(mensaje)


// ============================================================
// EJERCICIO 3 Â· Tipos primitivos y typeof
// ============================================================
console.log("\n--- Ejercicio 3 ---");

// Crea una variable para cada uno de estos tipos y muestra su
// typeof: string, number, boolean, undefined, null, symbol, bigint.
// Ejemplo ya resuelto:
let ejemploString = "hola";
console.log(typeof ejemploString); // â†’ "string"

let ejemploNumber = 40;
console.log(typeof ejemploNumber);

let ejemploBoolean = true;
console.log(typeof ejemploBoolean);

let ejemploUndefined;
console.log(typeof ejemploUndefined);

let ejemploNull = null;
console.log(typeof ejemploNull);

let ejemploSymbol = Symbol("id");
console.log(typeof ejemploSymbol);

let ejemploBigInt = BigInt("937635632781");
console.log(typeof ejemploBigInt);

// ============================================================
// EJERCICIO 4 Â· Autoboxing
// ============================================================
console.log("\n--- Ejercicio 4 ---");

// a) Declara una variable de texto en minÃºsculas y usa el mÃ©todo
//    .toUpperCase() sobre ella directamente (sin guardar el resultado
//    en una variable intermedia). Muestra el resultado.
let minuscula = "hola que tal";
console.log(minuscula.toUpperCase());

// b) En un comentario, explica con tus palabras por quÃ© esto
//    funciona si un string no es un objeto.

/* RESPUESTA:
Un string es un tipo primitivo, no un objeto y JavaScript 
utiliza un mecanismo llamado "autoboxing". Cuando intentamos llamar a un método 
(como .toUpperCase()) en un primitivo, JavaScript lo envuelve temporalmente en 
un objeto para que podamos usar sus métodos y luego 
lo desecha inmediatamente.
*/


// ============================================================
// EJERCICIO 5 Â· NotaciÃ³n cientÃ­fica
// ============================================================
console.log("\n--- Ejercicio 5 ---");

// a) Declara la distancia Tierra-Sol aproximada: 1.5e8 (km) y muÃ©strala.
let distanciaTierraSol = 1.5e8;
console.log(distanciaTierraSol);

// b) Declara un nÃºmero muy pequeÃ±o usando notaciÃ³n cientÃ­fica
//    (por ejemplo, el tamaÃ±o de un virus: 1.2e-7) y muÃ©stralo.
let num = 1.2e-7;
console.log(num);


// ============================================================
// EJERCICIO 6 Â· Sistemas numÃ©ricos: hexadecimal, octal y binario
// ============================================================
console.log("\n--- Ejercicio 6 ---");

// a) Declara un color en hexadecimal (0x...) y conviÃ©rtelo a decimal
//    mostrando el valor directamente con console.log.
let color = 0xfffff;
console.log(color);

// b) Declara un nÃºmero en binario (0b...) que represente el 13
//    y compruÃ©balo con console.log.
let numBinario = 0b1101;
console.log(numBinario);

// c) Declara un nÃºmero en octal (0o...) y muestra su valor decimal.
let numOctal = 0o16;
console.log(numOctal);

// ============================================================
// EJERCICIO 7 Â· NÃºmeros especiales
// ============================================================
console.log("\n--- Ejercicio 7 ---");

// a) Provoca un NaN dividiendo 0 entre 0 y muÃ©stralo.
let resultadoNaN = 0/0;
console.log(resultadoNaN);

// b) Provoca un Infinity dividiendo 1 entre 0 y muÃ©stralo.
let resultadoInfinity = 1/0;
console.log(resultadoInfinity);

// c) Comprueba con console.log si NaN === NaN. Â¿QuÃ© obtienes?
let res = NaN === NaN;
console.log(res);

// ============================================================
// EJERCICIO 8 Â· Strings: creaciÃ³n y propiedades
// ============================================================
console.log("\n--- Ejercicio 8 ---");

// a) Crea dos strings, uno con comillas simples y otro con dobles,
//    y concatÃ©nalos con el operador + dejando un espacio entre ambos.
let texto1 = "Mesaje";
let texto2 = 'concatenado';
console.log(texto1+" "+texto2);

// b) Muestra la longitud (.length) del string resultante.
let fraseCompleta = texto1+" "+texto2;
console.log(fraseCompleta.length);


// ============================================================
// EJERCICIO 9 Â· Plantillas de string (template literals)
// ============================================================
console.log("\n--- Ejercicio 9 ---");

// a) Declara "nombre" y "cursoActual" (nÃºmero), y construye con una
//    plantilla de string un mensaje: "Hola <nombre>, estÃ¡s en 2Âº de <curso>"
let nombre = "Mario";
let cursoActual = 2;
console.log("Hola "+nombre+", estás en "+cursoActual+"º de desarrollo de aplicaciones web");

// b) Dentro de otra plantilla, incluye una expresiÃ³n matemÃ¡tica,
//    por ejemplo el curso siguiente (cursoActual + 1).
console.log("Hola "+nombre+", estás en "+(cursoActual+1)+"º de desarrollo de aplicaciones web");


// ============================================================
// EJERCICIO 10 Â· Secuencias de escape
// ============================================================
console.log("\n--- Ejercicio 10 ---");

// a) Muestra un texto que ocupe dos lÃ­neas usando \n dentro de un
//    string normal (con comillas, sin plantilla).
console.log("Primera línea\nSegunda línea");

// b) Muestra un texto que contenga una comilla doble dentro de un
//    string delimitado tambiÃ©n por comillas dobles, usando \".
console.log("Esto es un texto con dobles \"comillas\"");


// ============================================================
// EJERCICIO 11 Â· Booleanos: truthy y falsy
// ============================================================
console.log("\n--- Ejercicio 11 ---");

// a) Declara "mayorDeEdad" como el resultado de comparar una edad
//    con 18 usando >=, y muÃ©stralo.
let n = 20;
let mayorEdad = n >= 18;
console.log(mayorEdad);

// b) Usa Boolean(...) para comprobar si estos valores son truthy o
//    falsy: 0, "", "hola", null, undefined, 42
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hola"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(42));

// ============================================================
// EJERCICIO 12 Â· Operadores aritmÃ©ticos
// ============================================================
console.log("\n--- Ejercicio 12 ---");

// a) Declara dos nÃºmeros y muestra el resultado de sumarlos,
//    restarlos, multiplicarlos, dividirlos y el resto (%) entre ellos.
let num1= 5;
let num2 = 5;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num2%num1);

// b) Calcula 2 elevado a 10 usando el operador **.
let exponente = 2**10;
console.log(exponente);

// c) Declara un contador en 0 e incremÃ©ntalo dos veces con ++,
//    mostrando su valor final.
let contador = 0;
contador++;
console.log(contador);


// ============================================================
// EJERCICIO 13 Â· Relacionales, coerciÃ³n y comparaciÃ³n estricta
// ============================================================
console.log("\n--- Ejercicio 13 ---");

// a) Compara el nÃºmero 5 con el string "5" usando == y luego ===.
//    Muestra ambos resultados y comenta la diferencia.
let nume = 5;
let numeStr = "5";
console.log(nume==numeStr);
console.log(nume===numeStr);

// b) Compara null == undefined y null === undefined. Comenta el resultado.
console.log(null==undefined);
console.log(null===undefined);

// c) Comprueba si "10" > "9" (ambos strings). Â¿El resultado te
//    sorprende? ComÃ©ntalo (pista: se comparan alfabÃ©ticamente).
console.log("10"=="9");

// ============================================================
// EJERCICIO 14 Â· Operadores lÃ³gicos y cortocircuito
// ============================================================
console.log("\n--- Ejercicio 14 ---");

// a) Declara "usuario" con el valor null, y usa || para asignar
//    "nombreMostrado" con "usuario" si existe o "Invitado" si no.
let usuario = null;
let nombreMostrado = usuario || "Invitado";
console.log(nombreMostrado);

// b) Usa && para mostrar un texto SOLO si una variable booleana
//    "sesionIniciada" es true.
let sesionIniciada = true;
sesionIniciada && console.log("Ha iniciado sesión correctamente")

// c) Usa ! para invertir el valor de una variable booleana y muÃ©stralo.
let variabBol = true;
console.log(!variabBol);


// ============================================================
// EJERCICIO 15 Â· Objetos: mutabilidad y comparaciÃ³n por referencia
// ============================================================
console.log("\n--- Ejercicio 15 ---");

// a) Crea un objeto "persona1" con const y con las propiedades
//    nombre y edad. Modifica despuÃ©s el valor de "edad" directamente
//    (Â¿te deja hacerlo aunque sea const?). Muestra el objeto final.
const persona1 = {nombre: "Mario", edad:24};
persona1.edad = 25;
console.log(persona1);

// b) Crea "persona2" con el MISMO contenido que persona1 (otro objeto
//    distinto) y compara persona1 === persona2. Comenta el resultado.
const persona2 = {nombre: "Mario", edad:25};
console.log(persona1===persona2);

// c) Crea "persona3 = persona1" (misma referencia) y compara
//    persona1 === persona3. Comenta la diferencia con el apartado b).
const persona3 = persona1;
console.log(persona1===persona3);
