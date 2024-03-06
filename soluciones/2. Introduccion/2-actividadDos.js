// Hacer un algoritmo que lea el nombre de una persona, el número de horas que estudia en la semana y muestre el porcentaje de tiempo que dedica a estudiar y la cantidad de minutos que dedica a estudiar.

const nombre = prompt("Ingrese el nombre");
const horasSemana = parseInt(
  prompt("Ingrese la cantidad de horas que estudia (semana)")
);
const horasTotalesSemana = 168;

const porcentaje = (horasSemana * 100) / horasTotalesSemana;
const minutos = horasSemana * 60;

alert(
  `${nombre} estudia ${horasSemana} que equivale a un ${porcentaje}% a la semana y los minutos estudiados fueron ${minutos}`
);
