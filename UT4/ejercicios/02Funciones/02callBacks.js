// Función flecha con callbacks
// 1. Recibe array y devuelve nombre de aprobados

const alumnos =[
    {nombre: 'Ana', nota: 7.5},
    {nombre: 'Bruno', nota: 4.2},
    {nombre: 'Carla', nota: 9.1},
    {nombre: 'David', nota: 5.0},
    {nombre: 'Elena', nota: 3.8},
];

const estaAprobadoConFlecha = (nota) => nota>= 5;

const extraerNombreAprobados = (lista,callbackAprobado) =>{
    let aprobado = lista.filter(alumno => callbackAprobado(alumno.nota));
    let nombre = aprobado.map(alumno => alumno.nombre);
    return nombre;
}

// VISUALIZAR
const nombreAprobados = extraerNombreAprobados(alumnos,estaAprobadoConFlecha);
console.log(nombreAprobados);
