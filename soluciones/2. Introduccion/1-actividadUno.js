// Hacer un algoritmo que lea el nombre de un trabajador, la cantidad de meses que trabajo en el año y muestre el nombre y el porcentaje de meses trabajados.

const nombre = prompt("Ingrese su nombre");
const cantidadMeses = parseInt(
  prompt("Ingrese la cantidad de meses que trabajo en el año")
);

const porcentaje = (cantidadMeses * 100) / 12;

alert(
  `${nombre} trabajo ${cantidadMeses} meses en el año, entonces trabajo un ${porcentaje}% al año`
);
