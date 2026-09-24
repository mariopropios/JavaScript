const nums = [1,2,3,4,5,6,7,8,9,10];

//Imprime el array completo
console.log(nums);

//Imprime desde el inicio(primer número) incluyendolo hasta el final sin incluirlo
console.log(nums.slice(1,7));

//Imprime de derecha a izquierda las posiciones que introduzcas 
console.log(nums.slice(-2));

//Así copiariamos el array completo
const copia = nums.slice();
copia.push(50)
console.log(copia);

//Así también copiariamos el array completo
const copia2 = [...nums];
console.log(copia2);

//Apunta a la referencia de la memoria del array (afecta al original y a la copia)
const alias = nums;
alias.push(11); //añade elemento a la última posición del array
console.log(alias);

console.log(nums);
