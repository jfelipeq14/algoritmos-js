// Para la materia de Destrezas se determinó con los estudiantes que, si la nota del primer quiz era menor que la del segundo, se sustituía la primera nota por la segunda. Elabore un algoritmo que le permita al profesor ingresar las 4 notas que obtuvo un alumno y el computador le muestre la nota definitiva y la calificación cualitativa que es: "E" si es mayor o igual a 4.5, "S" si es mayor o igual a 4.0 y menor de 4.5, "B" si es mayor o igual a 3.5 y menor de 4.0, "A" si es mayor o igual a 3.0 y menor de 3.5, "D" si es mayor o igual a 2.0 y menor de 3.0 e "I" si es menor de 2.0

let notaUno = parseFloat(prompt("notaUno"));
let notaDos = parseFloat(prompt("notaDos"));
let notaTres = parseFloat(prompt("notaTres"));
let notaCuatro = parseFloat(prompt("notaCuatro"));
let cualitativa;

if (notaUno < notaDos) {
  notaUno = notaDos;
}

let definitiva = (notaUno + notaDos + notaTres + notaCuatro) / 4;

if (definitiva >= 4.5) {
  cualitativa = "E";
} else if (definitiva >= 4.0) {
  cualitativa = "S";
} else if (definitiva >= 3.5 && definitiva < 4.0) {
  cualitativa = "B";
} else if (definitiva >= 3.0 && definitiva < 3.5) {
  cualitativa = "A";
} else if (definitiva >= 2.0 && definitiva < 3.0) {
  cualitativa = "D";
} else {
  cualitativa = "I";
}

alert(
  `La nota definitiva fue ${definitiva} por ende, la cualitativa es ${cualitativa}`
);
