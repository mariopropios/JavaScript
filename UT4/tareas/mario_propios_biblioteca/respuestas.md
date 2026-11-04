## A1. Conversiones de tipos

| Expresión | Mi predicción | Resultado real | Tipo (`typeof`) | Explicación (una línea) |
| :--- | :--- | :--- | :--- | :--- |
| `"5" + 3` | `"53"` | `"53"` | `string` | El operador `+` con un texto concatena y convierte el `3` a string. |
| `"5" * 3` | `15` | `15` | `number` | El operador `*` convierte automáticamente el string `"5"` a número. |
| `"5" - "2"` | `3` | `3` | `number` | El operador `-` solo resta números, convirtiendo ambos textos a `number`. |
| `Number("")` | `NaN` | `0` | `number` | Una cadena vacía se convierte numéricamente en `0`. |
| `Number("12px")` | `12` | `NaN` | `number` | `Number()` exige que todo el texto sea un número; al tener `"px"` da `NaN`. |
| `parseInt("12px")` | `12` | `12` | `number` | `parseInt` lee los dígitos desde la izquierda hasta encontrar una letra (`p`). |
| `parseFloat("3.75€")` | `3.75` | `3.75` | `number` | `parseFloat` extrae el número decimal inicial e ignora el símbolo `€` del final. |
| `"10" == 10` | `true` | `true` | `boolean` | Igualdad débil (`==`): convierte `"10"` a número antes de comparar el valor. |
| `"10" === 10` | `false` | `false` | `boolean` | Igualdad estricta (`===`): compara valor y tipo sin convertir (`string` ≠ `number`). |
| `null + 1` | `1` | `1` | `number` | En operaciones matemáticas, `null` se convierte en `0` (`0 + 1 = 1`). |
| `undefined + 1` | `NaN` | `NaN` | `number` | `undefined` convertido a número es `NaN`, por lo que la suma da `NaN`. |
| `typeof NaN` | `"NaN"` | `"number"` | `string` | En JavaScript `NaN` pertenece al tipo numérico (`number`). |
| `Boolean("0")` | `false` | `true` | `boolean` | Cualquier texto que no esté vacío (`""`) es `true`, aunque contenga un `"0"`. |
| `0 \|\| "valor por defecto"` | `"valor por defecto"` | `"valor por defecto"` | `string` | El operador `\|\|` considera el `0` como falso (*falsy*) y devuelve el lado derecho. |
| `0 ?? "valor por defecto"` | `0` | `0` | `number` | El operador `??` solo salta a la derecha si a la izquierda hay `null` o `undefined`. |

### Preguntas A1:
- **¿Por qué `NaN === NaN` devuelve `false`?**
  Porque `NaN` significa que una operación matemática no ha podido dar un número válido (es un valor indeterminado), y un resultado indeterminado nunca es igual a otro indeterminado (por ejemplo, `Number("hola")` y `0 / 0` dan ambos `NaN`, pero no son lo mismo).
- **¿Cómo compruebas correctamente si un valor es `NaN`?**
  Usando la función **`Number.isNaN(valor)`**.

### Preguntas A2: Ámbito de las variables
1. **¿Qué muestra cada `console.log`? Ejecútalo después y compara.**
   - El primero muestra: `Dentro: 55`
   - El segundo muestra: `Fuera: 0`
   - El tercero (`console.log(descuento)`) lanza un error: `Uncaught ReferenceError: descuento is not defined`.
2. **¿Por qué `total` vale distinto dentro y fuera de la función?**
   Porque dentro de `calcularTotal` se vuelve a declarar con `let total = ...`. Esto crea una variable local a la función independiente de la variable global `total = 0` declarada fuera.
3. **¿Qué error produce la última línea y por qué?**
   Produce `Uncaught ReferenceError: descuento is not defined` porque `const descuento = 10` está declarada dentro del bloque `if { ... }`, y las variables declaradas con `const` o `let` tienen ámbito de bloque (no existen fuera de esas llaves).
4. **¿Qué cambia si dentro de la función sustituyes `let total = …` por `total = …`?**
   Ya no se crea una variable local nueva dentro de la función, sino que se modifica directamente la variable global `total`. En ese caso, el segundo `console.log` mostraría `Fuera: 55` en lugar de `Fuera: 0`.
5. **¿Qué ocurre si añades `gastosEnvio = 7;` al final del programa?**
   Lanza un error `Uncaught TypeError: Assignment to constant variable`, porque `gastosEnvio` se declaró con `const` y no se puede reasignar su valor.
---

### Preguntas A4: Set y Map: lista de inscripciones
1. **Usa un `Set` para obtener los correos sin repetir. ¿Cuántos salen? ¿Por qué no es el resultado que esperabas?**
   Salen **6 correos** en lugar de 4. No es el resultado esperado porque JavaScript distingue entre mayúsculas y minúsculas, por lo que trata `"ana@ies.es"` y `"ANA@ies.es"` (igual que `"marta@ies.es"` y `"Marta@ies.es"`) como textos distintos.
2. **Repite el apartado normalizando antes cada correo a minúsculas (`correo.toLowerCase()`). ¿Cuántos salen ahora?**
   Ahora salen **4 correos** únicos (`ana@ies.es`, `luis@ies.es`, `marta@ies.es` y `pablo@ies.es`).
---

### Preguntas A5: Funciones y callbacks
4. **Explica en dos líneas qué tienen en común tus funciones (`transformar` y `quedarse`) y los métodos de los arrays (`map` y `filter`).**
   Tanto nuestras funciones como `map` y `filter` reciben una función (*callback*) como parámetro y la ejecutan sobre cada elemento del array original sin llegar a modificarlo. En ambos casos devuelven siempre un array nuevo con los elementos transformados o filtrados.
---

### Preguntas A6: Depuración
| Línea | Error | Cómo lo detectaste | Corrección |
| :--- | :--- | :--- | :--- |
| `for (let i = 0; i <= notas.length; i++)` | La condición `i <= notas.length` hace una iteración de más fuera del array. | En el depurador, cuando `i` llega a `5`, `notas[i]` vale `undefined`. | Cambiar `<=` por `<` (`i < notas.length`). |
| `if (notas[i] > 5)` | Usa `> 5` en lugar de `>= 5`, dejando fuera el `5` como aprobado. | Al evaluar `notas[2]` (valor `5`), no entraba en el `if` ni sumaba `contador`. | Cambiar `> 5` por `>= 5`. |
| `suma += notas[i]` | El primer valor `"7"` es un texto (`string`) y se concatena en vez de sumarse. | En el depurador, `suma` pasaba de `0` a `"07"` y `typeof suma` cambiaba a `"string"`. | Convertir cada elemento a número con `Number(notas[i])`. |
| `return suma / notas.length` | Divide entre el total de elementos del array (`5`) y no entre los aprobados (`3`). | El resultado devuelto era inferior a la media real de los aprobados (`7`, `5` y `9.5`). | Dividir entre `contador` (`return suma / contador`). |
---

## Parte B — Investigación previa: carga de scripts
1. **Consulta en MDN la página del elemento `<script>` y explica con tus palabras qué hacen los atributos `defer` y `async`. Indica en qué se diferencian.**
   Ambos atributos hacen que el navegador descargue el archivo JavaScript en segundo plano mientras sigue leyendo el HTML. La diferencia es que **`async`** ejecuta el script nada más terminar de descargarse (pausando el HTML y sin garantizar el orden si hay varios scripts), mientras que **`defer`** espera a que todo el HTML se haya leído y construido por completo antes de ejecutarlo, respetando siempre el orden en que aparecen las etiquetas `<script>`.
2. **Haz la prueba: quita `defer` de los dos `<script>` de `index.html`, recarga la página y copia el error que aparece en la consola. ¿Por qué se produce?**
   - **Error:** `Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')`
   - **Por qué se produce:** Al no tener `defer`, `app.js` se ejecuta en el `<head>` antes de que el navegador haya leído el `<body>`. Cuando `mostrar()` busca los elementos del HTML con `document.querySelector(selector)`, todavía no existen y devuelve `null`.
3. **Vuelve a poner `defer` y cambia el orden de los scripts, de modo que `app.js` se cargue antes que `datos.js`. ¿Qué error aparece ahora y por qué?**
   - **Error:** `Uncaught ReferenceError: LIBROS is not defined`
   - **Por qué se produce:** Como `defer` respeta el orden en que están escritos los `<script>`, se ejecuta primero `app.js` e intenta usar el array `LIBROS` cuando `datos.js` aún no se ha ejecutado.
4. **¿Por qué `defer` es más adecuado que `async` en este proyecto?**
   Porque en este proyecto necesitamos dos cosas que `defer` garantiza y `async` no: primero, que el HTML esté totalmente cargado antes de que `app.js` intente insertar contenido con `mostrar()`; y segundo, que se respete estrictamente el orden de ejecución (`datos.js` primero, luego `app.js` y por último `pruebas.js`), ya que cada archivo depende del anterior.