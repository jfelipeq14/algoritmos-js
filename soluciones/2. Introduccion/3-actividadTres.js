// Hacer un algoritmo que lea el nombre de un estudiante, la cantidad de materias que cursa en el semestre, la cantidad de materias perdidas y muestre el nombre y el porcentaje de materias ganadas.

const nombre = prompt("Ingrese el nombre");
const cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias"));
const cantidadMateriasPerdidas = parseInt(prompt("Cuantas materias perdió"));

const porcentajePerdidas = (cantidadMateriasPerdidas * 100) / cantidadMaterias;

const porcentajeGanadas = 100 - porcentajePerdidas;

alert(
  `${nombre} tiene ${cantidadMaterias} materias y perdio ${cantidadMateriasPerdidas} entoces gano el ${porcentajeGanadas}%`
);
