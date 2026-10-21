const mixto = ["Hola",3,false];

const a = new Array(3);
console.log(a.length);

const b = new Array(3,4);
console.log(b);

const dias =["L","M","X","J"];
dias.length;
dias[dias.length] = "V";
console.log(dias);

const notas = [7,4,5,7,3,9,10];

for (let index = 0; index < notas.length; index++) {
    console.log(index,notas[index]);
}

for(const nota of notas){
    console.log(nota);
}

notas.forEach((nota, indice) => {
    console.log(indice,nota);
});