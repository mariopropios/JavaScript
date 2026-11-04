// A1 Conversiones de tipos

console.log("5" + 3, typeof ("5" + 3));
console.log("5" * 3, typeof ("5" * 3));
console.log("5" - "2", typeof ("5" - "2"));
console.log(Number(""), typeof Number(""));
console.log(Number("12px"), typeof Number("12px"));
console.log(parseInt("12px"), typeof parseInt("12px"));
console.log(parseFloat("3.75€"), typeof parseFloat("3.75€"));
console.log("10" == 10, typeof ("10" == 10));
console.log("10" === 10, typeof ("10" === 10));
console.log(null + 1, typeof (null + 1));
console.log(undefined + 1, typeof (undefined + 1));
console.log(typeof NaN, typeof (typeof NaN));
console.log(Boolean("0"), typeof Boolean("0"));
console.log(0 || "valor por defecto", typeof (0 || "valor por defecto"));
console.log(0 ?? "valor por defecto", typeof (0 ?? "valor por defecto"));

// Comprobación de NaN
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));