document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();


    var numero = parseInt(document.getElementById('numero').value);
    var multiplicador = parseInt(document.getElementById('multiplicador').value);


    var tablaHTML = '<table>';
    for (var i = 1; i <= multiplicador; i++) {
        tablaHTML += '<tr><td>' + numero + ' x ' + i + '</td><td>' + (numero * i) + '</td></tr>';
    }
    tablaHTML += '</table>';

    document.getElementById('tabla-multiplicar').innerHTML = tablaHTML;
});
