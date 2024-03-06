// Crear un algoritmo que le permita al usuario ingresar los datos de dos buses así: Placa, El número de pasajeros transportado y el valor del pasaje, y el computador le muestre la placa del bus que más dinero recogió.

let placaUno = prompt(`Ingrese la placa del primer bus`);
let pasajerosUno = parseInt(
  prompt(`Ingrese ingrese los pasajeros de ${placaUno}`)
);
let valorPasajeUno = parseInt(
  prompt(`Ingrese ingrese el valor del pasaje de ${placaUno}`)
);

let dineroUno = pasajerosUno * valorPasajeUno;

let placaDos = prompt(`Ingrese la placa del segundo bus`);
let pasajerosDos = parseInt(
  prompt(`Ingrese ingrese los pasajeros de ${placaDos}`)
);
let valorPasajeDos = parseInt(
  prompt(`Ingrese ingrese el valor del pasaje de ${placaDos}`)
);

let dineroDos = pasajerosDos * valorPasajeDos;

if (dineroUno > dineroDos) {
  alert(`${placaUno} recogio más dinero`);
} else {
  alert(`${placaDos} recogio más dinero`);
}
