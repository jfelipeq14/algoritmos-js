// Se necesita un programa que diga si una persona es apta para un equipo de baloncesto o no, para que sea apto debe cumplir que si es hombre sea mayor de edad, que mida mas de 1.70 mts., que pese menos de 75 kg., o si es mujer que tenga más de 16 años, que mida como mínimo 1.70 y que pese como máximo 60 kg. Se debe leer el nombre, el sexo (F = femenino, M = masculino), la edad, la estatura y el peso.

let nombre = prompt("nombre");
let sexo = prompt("sexo (H - M)").toUpperCase();
let edad = parseInt(prompt("edad"));
let estatura = parseInt(prompt("estatura"));
let peso = parseInt(prompt("peso"));

if (sexo === "H") {
  if (edad >= 18 && estatura > 170 && peso < 75) {
    alert(`${nombre} es apto`);
  } else {
    alert(`${nombre} no es apto`);
  }
} else {
  if (edad >= 16 && estatura >= 170 && peso <= 60) {
    alert(`${nombre} es apta`);
  } else {
    alert(`${nombre} no es apta`);
  }
}
