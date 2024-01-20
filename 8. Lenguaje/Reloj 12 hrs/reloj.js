(() => {
  //constiables para extraer los datos del usuario
  const actualizarHora = () => {
    const fecha = new Date();
    const horas = fecha.getHours();
    let ampm;
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const diaSemana = fecha.getDay();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const year = fecha.getFullYear();
    //Seleccion de constiables a mostrar
    const pHoras = document.getElementById("horas");
    const pAMPM = document.getElementById("ampm");
    const pMinutos = document.getElementById("minutos");
    const pSegundos = document.getElementById("segundos");
    const pDiaSemana = document.getElementById("diaSemana");
    const pDia = document.getElementById("dia");
    const pMes = document.getElementById("mes");
    const pYear = document.getElementById("year");
    //constiable para los dias
    const semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    //constiable para los meses
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    pMes.textContent = meses[mes];
    pYear.textContent = year;
    //Condicional para que sea 12 hrs
    if (horas >= 12) {
      horas = horas - 12;
      //PM si pasa del meridiano
      ampm = "PM";
    } else {
      //AM si está antes del meridiano
      ampm = "AM";
    }
    if (horas == 0) {
      //No mostrar las cero horas, sino las 12 horas (En la madrugada)
      horas = 12;
    }
    pHoras.textContent = horas;
    pAMPM.textContent = ampm;
    //Agregar el cero antes en los minutos y segundos menores a dos digitos
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
  };

  actualizarHora();
  const intervalo = setInterval(actualizarHora, 1000);
})();
