//Prueba 3
let numMin = parseInt(prompt("Introduce el valor mínimo"));
let numMax = parseInt(prompt("Introduce el valor máximo"));

if(isNaN(numMin) || isNaN(numMax)){
    alert("Error. Deben de ser números enteros");
}else if(numMin>=numMax){
    alert("Error. El número mínimo debe de ser menor al numero máximo");
}else{
    let enteroAleatorio = Math.floor(Math.random() * (numMax-numMin +1)) +numMin;
    alert("El resultado es: "+enteroAleatorio);
}