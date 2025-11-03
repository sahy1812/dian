var fechaElement = document.getElementById("fecha");
var horaElement = document.getElementById("hora");

// Obtener el valor de la fecha del elemento HTML
var fechaString = fechaElement.innerHTML;

// Mapeo de meses abreviados a nombres completos
var monthsMapping = {
    'ENE': 'January',
    'FEB': 'February',
    'MAR': 'March',
    'ABR': 'April',
    'MAY': 'May',
    'JUN': 'June',
    'JUL': 'July',
    'AGO': 'August',
    'SEP': 'September',
    'OCT': 'October',
    'NOV': 'November',
    'DIC': 'December'
};

// Convertir la cadena de fecha al formato esperado para la creaciÃƒÂ³n del objeto Date
var fechaParts = fechaString.split('.');
var horaString = horaElement.innerHTML;
var formattedDate = monthsMapping[fechaParts[1]] + ' ' + fechaParts[0] + ', ' + fechaParts[2] + ' ' + horaString;

// Crear el objeto Date con la fecha y hora formateadas
var countDownDate = new Date(formattedDate).getTime();

var countdownInterval = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = countDownDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);