// Elabore un algoritmo que permita averiguar cuál es el nombre del mayor de 2 hermanos no gemelos. Como datos de entrada se tiene el nombre y la edad de las 2 personas.

let nombreUno = prompt("Ingrese el primer nombre");
let edadUno = parseInt(prompt(`Ingrese la edad de ${nombreUno}`));

let nombreDos = prompt("Ingrese el segundo nombre");
let edadDos = parseInt(prompt(`Ingrese la edad de ${nombreDos}`));

if (edadUno > edadDos) {
  alert(`${nombreUno} es el hermano mayor`);
} else {
  alert(`${nombreDos} es el hermano mayor`);
}
