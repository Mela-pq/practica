calcularPromedioo=function(){
    let cmpCaja1;
    let valor1;
    let cmpCaja2;
    let valor2;
    let cmpCaja3;
    let valor3;
    let valor1Entero;
    let valor2Entero;
    let valor3Entero;
    let cmpResultado;
    let resultado;
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById(" Valor1");
    valor1=cmpCaja1.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("Valor2");
    valor2=cmpCaja2.value;
    cmpCaja3=document.getElementById("Valor3");
    valor3=cmpCaja3.value;

    cmpResultado=calcularPromedio("lblResultado");
    return cmpResultado;
}

