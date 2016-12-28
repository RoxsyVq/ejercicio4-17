function evaluar(){
    var numeroEntero = document.getElementById("numero_entero").value;
    var doble = (parseFloat(numeroEntero)-21)*2;
    var resta = 21-parseFloat(numeroEntero);
    
    var salida = document.getElementById("salida");
    
    if(numeroEntero > 21){
        salida.innerHTML = doble;
    }
    else {
        salida.innerHTML = resta;
    }
}