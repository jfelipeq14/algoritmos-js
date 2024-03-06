// Hacer un algoritmo que lea el nombre de un animal, la comida preferida, el número de porciones que come al día, el valor de la porción y muestre el nombre del animal y el costo de alimentarlo en el día.

const nombre = prompt("Ingrese el nombre del animal");
const comida = prompt("Ingrese la comida preferida");
const porciones = parseInt(prompt("Ingrese las porciones que come al dia"));
const valorPorcion = parseInt(prompt("Ingrese el valor de la porcion"));

const costoDiario = porciones * valorPorcion;

alert(
  `la comida favorita de ${nombre} es ${comida} y se come al dia ${porciones} porciones. Si el valor de la porcion es $${valorPorcion}, entonces en el dia cuesta $${costoDiario}`
);
