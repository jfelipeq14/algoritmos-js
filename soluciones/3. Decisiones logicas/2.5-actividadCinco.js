// Crear un algoritmo que le permita al usuario ingresar el tipo de trabajador (FIJO O TEMPORAL) y con base en esto pueda imprimir el nombre y el salario neto, sabiendo que si es FIJO debe leer el nombre, el número de horas trabajadas, el salario básico hora, el total de deducciones y el total de bonificaciones y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; estos trabajadores tienen un salario básico hora fijo de $6.000 y no tienen deducciones ni bonificaciones.

let tipoTrabajador = prompt(
  `Ingrese el tipo de trabajador (FIJO o TEMPORAL)`
).toUpperCase();

if (tipoTrabajador === "FIJO") {
  let nombre = prompt(`Ingrese el nombre`);
  let horas = parseInt(prompt(`Ingrese el numero de horas que trabajo`));
  let salarioHora = parseInt(prompt(`Ingrese el salario por hora`));
  let deducciones = parseInt(prompt(`Ingrese las deducciones`));
  let bonificaciones = parseInt(prompt(`Ingrese las bonificaciones`));
  alert(
    `${nombre} trabajó ${horas} horas y tiene un salario neto de ${
      salarioHora * horas + bonificaciones - deducciones
    }`
  );
} else {
  let nombre = prompt(`Ingrese el nombre`);
  let horas = prompt(`Ingrese el nombre`);
  alert(`${nombre} tiene un salario de ${horas * 6000}`);
}
