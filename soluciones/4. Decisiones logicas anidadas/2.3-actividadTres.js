// Crear un algoritmo que le permita al usuario ingresar 3 números y el computador se los muestre en orden ascendente

const numeros = [];
let numeroUno = parseFloat(prompt("numeroUno"));
numeros.push(numeroUno);
let numeroDos = parseFloat(prompt("numeroDos"));
numeros.push(numeroDos);
let numeroTres = parseFloat(prompt("numeroTres"));
numeros.push(numeroTres);

numeros.sort(function (a, b) {
  return a - b;
});

alert(numeros);
