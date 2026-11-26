// CLASE PADRE: ORDENADOR
class Ordenador{
    constructor(marca,modelo,ram = 4,disco = 512,pulgadas = 17)
    {
        // Marca y modelo obligatorios
        if(!marca || !modelo){
            console.warn("La marca y el modelo son obligatorios");
        }
        // 1. Construimos el constructor
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.disco = disco;
        this.pulgadas = pulgadas;
        
    }
    // Metodo precio
    precio()
    {
        return 200 + this.ram * 10 + this.disco * 0.1 + this.pulgadas * 5;
    }
    // Metodo visualizar ordenador
    toString()
    {
        return `${this.marca} ${this.modelo} - RAM: ${this.ram} GB, Disco: ${this.disco} GB y Pantalla: ${this.pulgadas}"`;
    }

}

// ORDENADOR -> PORTATIL
class Portatil extends Ordenador{
    constructor(marca,modelo,ram = 4,disco = 256,pulgadas = 12, autonomia = 4)
    {
        super(marca,modelo,ram,disco,pulgadas);
        this.autonomia = autonomia;
    }

    precio(){
        return super.precio() + 100 + this.autonomia * 15;
    }

    // Visualiza los datos del ordenador
    toString()
    {
        return `${super.toString()}, Autonomía: ${this.autonomia} h`;
    }
}

// PORTATIL -> TABLET
class Tablet extends Portatil{
    constructor(marca,modelo,ram = 4,disco = 128,pulgadas = 10, autonomia = 10, lapiz = false)
    {
        super(marca,modelo,ram,disco,pulgadas,autonomia);
        this.lapiz = lapiz;
    }

    // Metodo precio
    precio()
    {
        return super.precio() + (this.lapiz ? 50 : 0);
    }

    // Visualiza los datos de la tablet
    toString()
    {
        return `${super.toString()}, Lapiz: ${this.lapiz ? "si" : "no"} `;
    }
}

// ORDENADOR -> SERVIDOR (sin pantalla)
class Servidor extends Ordenador{
    constructor(marca,modelo,nucleos = 8,ram = 32,disco = 2000)
    {
        super(marca,modelo,ram,disco,0); // Las pulgadas de un servidor van a ser siempre 0
        this.nucleos = nucleos;
    }

    // Metodo precio
    precio()
    {
        return 500 + this.nucleos * 60 + this.ram * 12 + this.disco * 0.15;
    }

    // Visualiza los datos del servidor (no uso super por lo de la pantalla)
    toString()
    {
        return `${this.marca} ${this.modelo} — ${this.nucleos} núcleos, RAM: ${this.ram} GB, Disco: ${this.disco} GB, sin pantalla`;
    }
}

// ORDENADOR -> GAMING
class Gaming extends Ordenador{
    constructor(marca, modelo, grafica, ram = 16, disco = 1024, pulgadas = 27)
    {
        if(!grafica){
            console.warn("La tarjeta gráfica es obligatoria");
        }

        super(marca, modelo, ram, disco, pulgadas);
        this.grafica = grafica;
    }

    // Metodo precio
    precio()
    {
        return super.precio() + 400;
    }

    // Visualiza los datos del ordenador gaming
    toString()
    {
        return `${super.toString()}, Gráfica: ${this.grafica}`;
    }

}


