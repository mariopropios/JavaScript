// A3. Decisiones y bucles: boletín de notas

const notas = [7.5, 4.9, 10, 5, 6.25, 3, 8.8, 11, 9];

// 1. mostrar posición y calificación de cada nota
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  let calificacion;

  if (nota < 0 || nota > 10) {
    calificacion = "Nota no válida";
  } else if (nota < 5) {
    calificacion = "Insuficiente";
  } else if (nota < 6) {
    calificacion = "Suficiente";
  } else if (nota < 7) {
    calificacion = "Bien";
  } else if (nota < 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  console.log(`Alumno ${i + 1}: ${nota} → ${calificacion}`);
}

// 2. aprobados, media de notas válidas y nota más alta (sin Math.max)
let aprobados = 0;
let sumaValidas = 0;
let totalValidas = 0;
let notaMasAlta = 0;

for (const nota of notas) {
  // Solo contamos las notas válidas (entre 0 y 10)
  if (nota >= 0 && nota <= 10) {
    sumaValidas += nota;
    totalValidas++;

    if (nota >= 5) {
      aprobados++;
    }

    if (nota > notaMasAlta) {
      notaMasAlta = nota;
    }
  }
}

const media = sumaValidas / totalValidas;

console.log(`Aprobados: ${aprobados}`);
console.log(`Media de notas válidas: ${media.toFixed(2)}`);
console.log(`Nota más alta: ${notaMasAlta}`);