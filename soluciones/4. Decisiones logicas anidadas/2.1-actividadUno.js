// Elaborar Un algoritmo que le permita al usuario Escribir 3 número y el computador le imprima el menor de ellos.

let numeroUno = parseFloat(prompt("numeroUno"));
let numeroDos = parseFloat(prompt("numeroDos"));
let numeroTres = parseFloat(prompt("numeroTres"));

if (numeroUno > numeroDos && numeroUno > numeroTres) {
  alert(numeroUno);
} else if (numeroDos > numeroUno && numeroDos > numeroTres) {
  alert(numeroDos);
} else {
  alert(numeroTres);
}
