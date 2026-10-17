function dibujarTabla(filas = 10,columnas = 4,color="black"){

    // Creamos tabla
    const tabla = document.createElement("table");

    // Características de la tabla
    tabla.style.width = "100";
    tabla.style.borderCollapse ="collaplse";
    tabla.style.border = `3px solid ${color}`;
    tabla.style.marginBottom = "20px"; // separación entre tablas

    // Creamos las tablas
    for (let index = 0; index < filas; index++) {
        const fila = tabla.insertRow();
        for (let j = 0; j < columnas; j++) {
            const celda = fila.insertCell();
            celda.style.border = `1px solid ${color}`;
            celda.textContent = `F${index +1} - C${j+1}`;
        }
    }

    // Pintar la tabla
    document.body.appendChild(tabla);
}

// VISUALIZAR
dibujarTabla(10,4,"black");
dibujarTabla(20,10,"black");

for (let i = 0; i < 10; i++) {
    dibujarTabla(5,2,"green");
    
}
