// Hacer un algoritmo que lea el nombre de una persona, la comida preferida con su precio, la cantidad de dinero que posee y muestre la cantidad de comidas que puede comprar con el dinero que posee.

const nombre = prompt("Ingrese el nombre");
const comida = prompt("Ingrese la comida favorita");
const precio = parseInt(prompt("Ingrese el precio de la comida"));
const dinero = parseInt(prompt("Ingrese el dinero que posee"));

const cantidadComida = dinero / precio;

alert(
  `la comida favorita de ${nombre} es ${comida} y el precio es $${precio}. ${nombre} tiene $${dinero}, entonces se puede comprar ${cantidadComida} porciones de ${comida}`
);
