function calcularPromedio() {
    // Retrieve input values and convert them to numbers
    const valor1 = parseFloat(document.getElementById('Valor1').value);
    const valor2 = parseFloat(document.getElementById('Valor2').value);
    const valor3 = parseFloat(document.getElementById('Valor3').value);
    
    // Check if the values are valid numbers
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert('Por favor, ingrese valores válidos en todos los campos.');
        return;
    }

    // Calculate the average
    const sumar = valor1 + valor2 + valor3;
    const promedio = sumar / 3;
    

    // Display the result
    document.getElementById('lblResultado').innerText = promedio.toFixed(2);

    if(promedio>0 && promedio<5){
        let mensaje1;
        mensaje1=document.getElementById('lblMensaje');
        mensaje1.innerHTML="Super mal";
    }else if (promedio>5 && promedio<7){
        let mensaje2;
        mensaje2=document.getElementById('lblMensaje');
        mensaje2.innerHTML="Regular";
    }else if (promedio>7 && promedio<10){
        let mensaje3;
        mensaje3=document.getElementById('lblMensaje');
        mensaje3.innerHTML="Exelente";
        
    }
}

