let nombre = prompt("Introduce tu nombre: ");
let apellidos = prompt("Introduce tus apellidos: ");
let salario = parseFloat(prompt("Introduce tu salario (con decimales):"));
let edad = parseInt(prompt("Introduce tu edad:"));

if(salario>2000){
    salario = salario;
}else if(salario>=1000 && salario<=2000){
    if(edad>45){
        salario += (salario * 0.03);
    }else{
        salario += (salario * 0.10);
    }
}else if(salario<1000){
    if(edad<30){
        salario = 1100;
    }else if(edad>=30 && edad<=45){
        salario += (salario * 0.03);
    }else{
        salario += (salario * 0.15);
    }
}
/*
alert("Nombre: "+nombre);
alert("Apellidos: "+apellidos);
alert("Salario: "+salario);
alert("Edad: "+edad);
*/

//Para imprimir dentro del html:
document.getElementById("nombre").textContent = nombre;
document.getElementById("apellidos").textContent = apellidos;
document.getElementById("edad").textContent = edad;
document.getElementById("salario").textContent = salario;