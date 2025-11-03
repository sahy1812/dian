// Obtener el elemento span con el ID "fecha"
var fechaSpan = document.getElementById("fecha");

// Obtener el texto dentro del span
var fechaTexto = fechaSpan.textContent;

// Array de nombres de días de la semana y meses en español
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var meses = {
  "ENE": "Enero",
  "FEB": "Febrero",
  "MAR": "Marzo",
  "ABR": "Abril",
  "MAY": "Mayo",
  "JUN": "Junio",
  "JUL": "Julio",
  "AGO": "Agosto",
  "SEP": "Septiembre",
  "OCT": "Octubre",
  "NOV": "Noviembre",
  "DIC": "Diciembre"
};

// Convertir la fecha de texto al formato deseado
var fechaFormateada = fechaTexto.replace(/([0-9]{1,2}).(ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC).([0-9]{4})/, function(match, dia, mes, año) {
  return diasSemana[new Date(año, Object.keys(meses).indexOf(mes), dia).getDay()] + " " + parseInt(dia, 10) + " de " + meses[mes];
});

// Obtener el elemento span con el ID "fecha-refactor"
var fechaRefactorSpan = document.getElementById("fecha-refactor");

// Asignar la fecha formateada al texto del elemento span
fechaRefactorSpan.textContent = fechaFormateada;
