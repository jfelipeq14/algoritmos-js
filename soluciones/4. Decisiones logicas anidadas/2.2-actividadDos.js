// Crear un algoritmo que le permita al usuario ingresar el nombre de un estudiante y las 4 notas que obtuvo en una materia y el computador le imprima el nombre, la nota definitiva y un mensaje que le indique si "GANA", "HABILITA" O "PIERDE".

let nombre = prompt("nombre");
let notaUno = parseFLoat(prompt("notaUno"));
let notaDos = parseFLoat(prompt("notaDos"));
let notaTres = parseFLoat(prompt("notaTres"));
let notaCuatro = parseFLoat(prompt("notaCuatro"));
let definitiva = (notaUno + notaDos + notaTres + notaCuatro) / 4;

if (definitiva < 3) {
  alert(`Pierde con ${definitiva}`);
} else if (definitiva >= 3 && definitiva <= 3.5) {
  alert(`Habilita con ${definitiva}`);
} else {
  alert(`Gana con ${definitiva}`);
}
