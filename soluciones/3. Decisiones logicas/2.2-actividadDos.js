// Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las bonificaciones de dos trabajadores, e imprima el nombre del que mas salario neto tiene.

let nombreUno = prompt(`Ingrese el primer nombre`);
let salarioBrutoUno = parseInt(
  prompt(`Ingrese el salario bruto de ${nombreUno}`)
);
let deduccionesUno = parseInt(
  prompt(`Ingrese las deducciones de ${nombreUno}`)
);
let bonificacionesUno = parseInt(
  prompt(`Ingrese las bonificaciones de ${nombreUno}`)
);
let netoUno = salarioBrutoUno - deduccionesUno + bonificacionesUno;

let nombreDos = prompt(`Ingrese el primer nombre`);
let salarioBrutoDos = parseInt(
  prompt(`Ingrese el salario bruto de ${nombreDos}`)
);
let deduccionesDos = parseInt(
  prompt(`Ingrese las deducciones de ${nombreDos}`)
);
let bonificacionesDos = parseInt(
  prompt(`Ingrese las bonificaciones de ${nombreDos}`)
);
let netoDos = salarioBrutoDos - deduccionesDos + bonificacionesDos;

if (netoUno > netoDos) {
  alert(`${nombreUno} tiene mejor salario neto`);
} else {
  alert(`${nombreDos} tiene mejor salario neto`);
}
