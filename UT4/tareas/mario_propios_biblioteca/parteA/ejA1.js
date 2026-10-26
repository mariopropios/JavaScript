/*
 * Ejercicio A1: Comprobación de conversiones de tipos en consola
 */

const expresiones = [
  { texto: '"5" + 3',                 valor: "5" + 3 },
  { texto: '"5" * 3',                 valor: "5" * 3 },
  { texto: '"5" - "2"',               valor: "5" - "2" },
  { texto: 'Number("")',              valor: Number("") },
  { texto: 'Number("12px")',          valor: Number("12px") },
  { texto: 'parseInt("12px")',        valor: parseInt("12px") },
  { texto: 'parseFloat("3.75€")',     valor: parseFloat("3.75€") },
  { texto: '"10" == 10',              valor: "10" == 10 },
  { texto: '"10" === 10',             valor: "10" === 10 },
  { texto: 'null + 1',                valor: null + 1 },
  { texto: 'undefined + 1',           valor: undefined + 1 },
  { texto: 'typeof NaN',              valor: typeof NaN },
  { texto: 'Boolean("0")',            valor: Boolean("0") },
  { texto: '0 || "valor por defecto"', valor: 0 || "valor por defecto" },
  { texto: '0 ?? "valor por defecto"', valor: 0 ?? "valor por defecto" }
];

// Mostramos cada resultado y su tipo
for (const item of expresiones) {
  console.log(`${item.texto} → Resultado:`, item.valor, `| Tipo: ${typeof item.valor}`);
}

// Comprobación correcta de NaN
console.log("¿NaN === NaN?:", NaN === NaN);           // false
console.log("¿Number.isNaN(NaN)?:", Number.isNaN(NaN)); // true