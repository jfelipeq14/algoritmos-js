// Escribir un algoritmo donde el usuario pueda ingresar el nombre de un estudiante y las 4 notas que obtuvo en una materia, y el computador le muestre el nombre, la nota definitiva (suponga que todas tienen un mismo porcentaje) y un mensaje que diga si gana(+3.5), puede habilitar(3 a 3.5) o pierde la materia (-3).

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
