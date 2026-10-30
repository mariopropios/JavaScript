// 1. CATÁLOGO
const catalogo = [
    {id: 1, nombre: "teclado", precio: 25.25, categoria: "periféricos",stock:10},
    {id: 2, nombre: "ratón", precio: 12.00, categoria: "periféricos",stock:0},
    {id: 3, nombre: 'monitor 24"', precio: 139.9, categoria: "pantallas",stock:4},
    {id: 4, nombre: "cable hdmi", precio: 7.95, categoria: "cables",stock:25},
];

// 2. OBJETO CARRITO
const carrito = {
    cliente: "Lucía",
    lineas: [],

    // Métodos de carrito ->
    // 3. Añadir producto al carrito
    agregar(idProducto, unidades = 1){
        //1º Buscamos producto en array
        const producto = catalogo.find(p => p.id === idProducto);
        //2º Si el producto no existe
        if(producto === undefined){
            console.warm(`El producto con el id ${idProducto} no existe`);
            return false;
        }
        //3º Si no hay stock suficiente para satisfacer la solicitud
        if(unidades>stock){
            console.warm(`No hay stock suficiente de ${nombre}`);
            return false;
        }
        //4º Si el producto ya está en el carrito
    }

}