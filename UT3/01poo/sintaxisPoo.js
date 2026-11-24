// 1. Definición de la clase principal (Superclase)
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad o atributo
    this.edad = edad;
  }

  // Método de la clase
  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// 2. Herencia: Creación de una subclase
class Empleado extends Persona {
  constructor(nombre, edad, puesto, sueldo) {
    super(nombre, edad); // Llama al constructor de la clase padre (Persona)
    this.puesto = puesto;
    this.sueldo = sueldo;
  }

  // Sobrescribir o añadir un nuevo método
  mostrarSueldo() {
    return `${this.nombre} trabaja como ${this.puesto} y gana $${this.sueldo}.`;
  }
}

// 3. Creación de instancias (Objetos)
const persona1 = new Persona("Lucía", 28);
console.log(persona1.saludar()); 
// Salida: "Hola, mi nombre es Lucía y tengo 28 años."

const empleado1 = new Empleado("Carlos", 35, "Desarrollador Web", 2500);
console.log(empleado1.saludar()); 
// Salida: "Hola, mi nombre es Carlos y tengo 35 años." (heredado de Persona)
console.log(empleado1.mostrarSueldo()); 
// Salida: "Carlos trabaja como Desarrollador Web y gana $2500."