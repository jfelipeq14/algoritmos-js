// Escribir un algoritmo donde el usuario pueda ingresar el nombre de un estudiante y las 4 notas que obtuvo en una materia, y el computador le muestre el nombre, la nota definitiva (suponga que todas tienen un mismo porcentaje) y un mensaje que diga si gana o pierde la materia.

const nombre = prompt("Ingrese el nombre");
const notaUno = parseFloat(prompt("Ingrese la nota 1"));
const notaDos = parseFloat(prompt("Ingrese la nota 2"));
const notaTres = parseFloat(prompt("Ingrese la nota 3"));
const notaCuatro = parseFloat(prompt("Ingrese la nota 4"));

const definitiva = (notaUno + notaDos + notaTres + notaCuatro) / 4;

if (definitiva >= 3.5) {
  alert(`${nombre} Ganó! con una nota de ${definitiva}`);
} else {
  alert(`${nombre} Perdió! con una nota de ${definitiva}`);
}
