// INVENTARIO
const inventario=[
    new Ordenador("HP","EliteDesk",16,1024,24),
    new Ordenador("Acer", "Aspire"),
    new Portatil("Apple", "MacBook Air"),
    new Portatil("Lenovo", "Yoga", 16, 1024, 14, 10),
    new Tablet("Apple", "iPad", 8, 256, 11, 10, true),
    new Tablet("Samsung", "Galaxy Tab"),
    new Servidor("Dell", "PowerEdge", 16, 64, 4000),
    new Gaming("Asus", "ROG", "RTX 4070", 32, 2000),
    new Gaming("HP", "Omen", "RX 7800")
];

// Comprobar error gaming sin gráfica
try{
    new Gaming("Prueba","Sin grafica");
}catch(error){
    console.log("Error por crear un ordenador gaming sin gráfica: ", error.message);
}

// --- FUNCIONES DE RECORRIDO