// Hacer un algoritmo lea el nombre de un deportista, la distancia recorrida y el tiempo que demoró en hacer el recorrido y muestre la velocidad promedio.

const nombre = prompt("Ingrese el nombre");
const distancia = parseFloat(prompt("Ingrese la distancia que recorió"));
const tiempo = parseFloat(prompt("Ingrese el tiempo que demoró"));

const velocidad = distancia / tiempo;

alert(
  `la distancia recorrida de ${nombre} es ${distancia} y se demoró ${tiempo}, entonces la velodiad promedio es de ${velocidad}`
);
