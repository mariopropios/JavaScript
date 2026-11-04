// 1. CATÁLOGO
const catalogo = [
    {id: 1, nombre: "teclado", precio: 25.50, categoria: "periféricos",stock:10},
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

        //2)º Buscamos producto en array
        const producto = catalogo.find(p => p.id === idProducto);

        //3º Si el producto no existe
        if(producto === undefined){
            console.warn(`El producto con el id ${idProducto} no existe`);
            return false;
        }

        //DESESTRUCTURACIÓN
        const { id, nombre, precio, stock} = producto;

        //4º Si no hay stock suficiente para satisfacer la solicitud
        if(unidades>stock){
            console.warn(`No hay stock suficiente de ${nombre}`);
            return false;
        }

        //5º Si el producto ya está en el carrito
        const lineaCompra = this.lineas.find(l => l.id === idProducto);

        if(lineaCompra !== undefined){
            // Si está en el carrito
            lineaCompra.unidades += unidades;
        }else{
            // Si no está en el carrito
            this.lineas.push({id, nombre, precio, unidades});
        }

        return true;
    },

    // 4. Calcular total del carrito
    total(){
        return this.lineas.reduce((acumulador, l) => acumulador + (l.precio * l.unidades), 0);
    },

    // 5. Generar Resumen
    resumen(){
        return this.lineas
            .map(l => `${l.unidades} x ${l.nombre} = ${(l.precio * l.unidades).toFixed(2)} €`)
            .join("\n");
        }       
};

// PRUEBAS PROGRAMA
carrito.agregar(1);       // 1. Añadir un teclado
carrito.agregar(3);       // 2. Añadir un monitor
carrito.agregar(1, 2);    // 3. Añadir dos teclados adicionales
carrito.agregar(2);       // 4. Intentar añadir un ratón (sin stock)
carrito.agregar(99);      // 5. Intentar añadir el producto con id 99 (no existe)

// 6. Mostrar el resumen del carrito con console.log
console.log(carrito.resumen());
// 7. Mostrar el importe total con dos decimales y el símbolo del euro
console.log(`${carrito.total().toFixed(2)} €`);
// 8. Mostrar las líneas del carrito mediante console.table()
console.table(carrito.lineas);
