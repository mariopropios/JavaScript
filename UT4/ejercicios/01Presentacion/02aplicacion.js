// Array de los pedidos
const pedidos = [
  { cliente: "Ana", importe: 50 },
  { cliente: "Luis", importe: 30 },
  { cliente: "Ana", importe: 20 },
  { cliente: "Carlos", importe: 120 },
  { cliente: "Luis", importe: 45 },
  { cliente: "Ana", importe: 15 }
];
// Creamos Map
const gastoClientes = new Map();

// Variables
let pedidoActual;
let nombreCliente;
let dinero;
let gastoAnterior;
let mayorGasto = 0;
let importeCliente;


//Recorremos array pedidos e introducimos a gasto clientes
for (let index = 0; index < pedidos.length; index++) {
    //Recorremos cada pedido 1 a uno
    pedidoActual = pedidos[index];
    nombreCliente = pedidoActual.cliente;
    dinero = pedidoActual.importe;

    //Actualizamos Map
    if(gastoClientes.has(nombreCliente)){
        gastoAnterior = gastoClientes.get(nombreCliente);
        gastoClientes.set(nombreCliente, gastoAnterior+dinero);
    }else{
        gastoClientes.set(nombreCliente, dinero);
    }
    
}
console.log(gastoClientes);

// Quien ha gastado más
gastoClientes.forEach((gasto, indice) =>{
    importeCliente = (gasto);
    if(importeCliente>mayorGasto){
        mayorGasto = importeCliente;
        nombreCliente = (indice);
    }
});

console.log(nombreCliente,mayorGasto);