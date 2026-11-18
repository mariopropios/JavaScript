// Clase padre: ORDENADOR
class Ordenador{
    constructor(marca,modelo,ram = 4,disco = 512,pulgadas = 17)
    {
        // Marca y modelo obligatorios
        if(!marca || !modelo){
            console.warn("La marca y el modelo son abligatorios");
        }
        // 1. Construimos el constructor
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.disco = disco;
        this.pulgadas = pulgadas;
        
    }

    // Visualiza los datos del ordenador
    toString()
    {
        return `${this.marca} ${this.modelo} - RAM: ${this.ram} GB, Disco: ${this.disco} GB y Pantalla: ${this.pulgadas}"`;
    }

}

// Vamos a crear una subclase portatil dentro de la clase Ordenador
class Portatil extends Ordenador{
    constructor(marca,modelo,ram = 4,disco = 512,pulgadas = 17, autonomia = 4)
    {
        // 1. Para que sepa cuales son los atributos que hereda
        super(marca,modelo,ram,disco,pulgadas);
        // 2. Construimos el constructor
        this.autonomia = autonomia;
    }

    // Visualiza los datos del ordenador
    toString()
    {
        return `${super.toString()}, Autonomía: ${this.autonomia} h`;
    }
}

// ----- PRUEBAS DEL PROGRAMA

// 1. Creamos diferentes objetos ordenador
const ordenador1 = new Ordenador("HP", "EliteBook");
const ordenador2 = new Ordenador("Dell", "OptiPlex", 16, 1000, 24);
const portatil1 = new Portatil("Lenovo", "ThinkPad");
const portatil2 = new Portatil("Apple", "MacBook Air", 16, 1000, 13, 18);

// Visualizamos
console.log("Ordenador básico:   ", ordenador1.toString());
console.log("Ordenador completo: ", ordenador2.toString());
console.log("Portátil básico:    ", portatil1.toString());
console.log("Portátil completo:  ", portatil2.toString());