// Elaborar un algoritmo donde el usuario ingrese la placa de un bus, el número de pasajeros transportados y la ruta donde prestó el servicio (A o B) el computador le debe mostrar el dinero que recolectó sabiendo que en la ruta A el pasaje es a $1.200 y en la B a $1.000

let placa = prompt("Ingrese la placa");
let pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));
let ruta = prompt("Ingrese la ruta (A o B)").toUpperCase();

if (ruta === "A") {
  alert(`El dinero recolectado fue ${pasajeros * 1200}`);
} else {
  alert(`El dinero recolectado fue ${pasajeros * 1000}`);
}
