// Elaborar un programa que le permita a un usuario ingresar el nombre de un trabajador, y el número de horas trabajadas, se pide que el programa le imprima el salario bruto, las bonificaciones, las deducciones y el salario neto; teniendo en cuenta que las bonificaciones serán de $20.000.00 si trabajó como máximo 48 horas, de $50.000.00 si trabajo entre 49 y 58 horas y de $100.000 si trabajó más de 58 horas. Las deducciones son de $10.000 si el salario básico hora es menor de $5.000, de $20.000 si el salario básico hora es mayor de $5.000 y menor de $8.000 y de $ 50.000 si su salario básico hora es de $8.000 o mas.

let nombre = prompt("nombre");
let horasTrabajadas = prompt("horasTrabajadas");
let salarioHora = prompt("salarioHora");
let bruto = salarioHora * horasTrabajadas;
let bonificaciones;
let deducciones;

if (horasTrabajadas <= 48) {
  bonificaciones = 20000;
} else if (horasTrabajadas >= 49 && horasTrabajadas <= 58) {
  bonificaciones = 50000;
} else {
  bonificaciones = 100000;
}

if (salarioHora < 5000) {
  deducciones = 10000;
} else if (salarioHora > 5000 && salarioHora < 8000) {
  deducciones = 20000;
} else if (salarioHora >= 8000) {
  deducciones = 50000;
}

let neto = bruto + bonificaciones - deducciones;

alert(
  `${nombre} tiene un salario bruto de $${bruto}, unas bonificaciones de $${bonificaciones}, unas deducciones de $${deducciones} y un salario neto de $${neto}`
);
