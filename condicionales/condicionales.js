// es mi archivo de utilitarios para solo llamar a la funcion
recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}
recuperarEntero=function(idComponente){
    let valor;
    let valorEntero;
    valor=recuperarTexto(idComponente);
    valorEntero=parseInt(valor);
    return valorEntero;
}
recuperarFlotante=function(idComponente){
    let valor;
    let valorFloat;
    valor=recuperarTexto(idComponente);
    valorFloat=parseFloat(valor);
    return valorFloat;
}
//funciones de acuerdo a las condiciones 
calcularTasaInteres = function (ingresos,) {
    let ingresos;
    if (ingresos < 300000) {
        let mensaje1;
        mensaje1 = document.getElementById('lblMensaje');
        mensaje1.innerHTML = "16%";

    } else if (ingresos >= 300000 && interes < 500000) {
        let mensaje2;

        mensaje2 = document.getElementById('lblMensaje');
        mensaje2.innerHTML = "15%";

    } else if (ingresos => 500000 && interes < 10000000) {
        let mensaje3;

        mensaje3 = document.getElementById('lblMensaje');
        mensaje3.innerHTML = "14%";


    } else if (ingresos => 1000000 && interes <= 2000000) {
        let mensaje4;

        mensaje4 = document.getElementById('lblMensaje');
        mensaje4.innerHTML = "13%";


    } else if (interes => 2000000) {
        let mensaje5;

        mensaje5 = document.getElementById('lblMensaje');
        mensaje5.innerHTML = "12%";


    }

}

calcularCapacidadPago = function (edad, ingreso, egresos) {
    let edad;
    let ingreso;
    let egresos;
    let resultado;
    let cmpCaja;
    let cmpCaja2;
    let ingresos1;
    let egresos2;
    let cmpResultado;
    let ingresoEntero;
    let egresosEntero;
    let cmpCaja3;
    let edad;

    cmpCaja = document.getElementById("txtingresos");
    ingresos1 = cmpCaja.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2 = document.getElementById("txtegresos");
    egresos2 = cmpCaja2.value;
    cmpCaja3 = document.getElementById("txtedad");
    edad = cmpCaja3.value;

    edadEntero = parseInt(edad);

    ingresoEntero = parseFloat(ingresos1);
    //transformar valor2 en entero
    egresosEntero = parseFloat(egresos2);

    resultado = ingresos1 - egresos2;

    cmpResultado = document.getElementById("lblResultado");
    cmpResultado.innerText = "Resultado " + resultado + edad;

    if (edad > 50) {
        capacidad = resultado * 30 / 100;


    } else if (edad <= 50 && resultado == resultado * 40 / 100) {

        capacidad = resultado * 40 / 100;
    }

}

calcularDescuento = function (precio, cantidad) {
    let precio;
    let cantidad;
    let descuento;
    let producto;
    let precioFinal;
   
    if (producto < 3) {
        descuento = cantidad;
        descuento = document.getElementById('lblMensaje');
        descuento.innerHTML = "16%";

      
    }else if(producto>=3 && producto<=5){
        descuento = cantidad*2/100;
        precioFinal=descuento;
    }else if (producto>=6 && producto<=11){
        descuento = cantidad*3/100;
        precioFinal=descuento;
    }else if(producto>12){
        descuento = cantidad*4/100;
        precioFinal=descuento;
    }
    return precioFinal;
    
}
 determinarColesterolLDL=function(nivelColestreol){
let colestreol;

if(colestreol<100){
    return "òptimo";
}else if (colesterol>=100 && colesterol<=129){
    return"Casi Óptimo";

}else if (colesterol>=130 && colesterol<=159){
    return "Limite superior del rango normal";
}else if (colesterol>=160 && colesterol<=189){
    return "Alto";
 
}else if(colesterol>=190 ){
    return "Muy alto";  
}
}
 validarClave=function(clave){
 if(clave >100){
    return true;
 }else if(clave<100){
    return false;
 }
 }
 //obtener el codigo acsii
//tabla de acsii
for(let i=65 ; i=90 ; i++)
  esMayuscula=function(caracter){
    let caracter;
    if(letra=>65 && letra<=90){
        return true ,"caracter valido";
    }else if(letra=>91 && letra<=64){
        return false,"caracter incorrecto";
 }


}
for(let i=97 ; i=122; i++)
    esMayuscula=function(caracter){
      let caracter;
      for(let i=65 ; i=90 ; i++)
  esMayuscula=function(caracter){
    let caracter;
    if(letra=>65 && letra<=90){
        return true ,"caracter valido";
    }else if(letra=>91 && letra<=64){
        return false,"caracter incorrecto";
 }
}
for(let i=1 ; i=255 ; i++)
    
esDigito=function(caracter){
    let caracter;
    if(caracter=>1 &&  caracter<=255){
        return true ,"caracter valido";
    }else if(caracter>256 ){
        return false,"caracter incorrecto";
    }
}
}
darPermiso=function(notMatematica,notaFisica,notaGeometria){
    let notMatematica;
    let notaFisica;
    let notaGeometria;
    let cmpCaja;
    let cmpCaja2;
    let notMatematica1;
    let notaFisica2;
    let notaGeometria3;
    let cmpCaja3;


    cmpCaja = document.getElementById("txtnotaMate");
    ingresos1 = cmpCaja.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2 = document.getElementById("txtnotaFisica");
    egresos2 = cmpCaja2.value;
    cmpCaja3 = document.getElementById("txtnotaGeometria");
    edad = cmpCaja3.value;

    notMatematica1= parseFloat(notMatematica);

    notaFisica2 = parseFloat(notaFisica);
    //transformar valor2 en entero
    notaGeometria3 = parseFloat(notaGeometria);


    if (notMatematica,notaFisica,notaGeometria>=90 ) {
        permoso=true,"tiene permiso";
    } else if (notMatematica,notaFisica,notaGeometria<=89) {
        permiso=false,"no tiene permiso";
    }

}
otorgarPermiso=function(notMatematica,notaFisica,notaGeometria){
    let notMatematica;
    let notaFisica;
    let notaGeometria;
    let cmpCaja;
    let cmpCaja2;
    let notMatematica1;
    let notaFisica2;
    let notaGeometria3;
    let cmpCaja3;
    
    
        cmpCaja = document.getElementById("txtnotaMate");
        ingresos1 = cmpCaja.value;
        //2.Recuperar el valor de la segunda caja de texto
        cmpCaja2 = document.getElementById("txtnotaFisica");
        egresos2 = cmpCaja2.value;
        cmpCaja3 = document.getElementById("txtnotaGeometria");
        edad = cmpCaja3.value;
    
        notMatematica1= parseFloat(notMatematica);
    
        notaFisica2 = parseFloat(notaFisica);
        //transformar valor2 en entero
        notaGeometria3 = parseFloat(notaGeometria);
    
    
        if (notMatematica,notaFisica>=90 && notaGeometria>=80 ) {
            permoso=true,"tiene permiso";
        } else if (notMatematica,notaFisica>=89 && notaGeometria<=79) {
            permiso=false,"no tiene permiso";
        }
    
    }
    dejarSalir=function(notMatematica,notaFisica,notaGeometria){
        let notMatematica;
        let notaFisica;
        let notaGeometria;
        let cmpCaja;
        let cmpCaja2;
        let notMatematica1;
        let notaFisica2;
        let notaGeometria3;
        let cmpCaja3;
        
        
            cmpCaja = document.getElementById("txtnotaMate");
            ingresos1 = cmpCaja.value;
            //2.Recuperar el valor de la segunda caja de texto
            cmpCaja2 = document.getElementById("txtnotaFisica");
            egresos2 = cmpCaja2.value;
            cmpCaja3 = document.getElementById("txtnotaGeometria");
            edad = cmpCaja3.value;
        
            notMatematica1= parseFloat(notMatematica);
        
            notaFisica2 = parseFloat(notaFisica);
            //transformar valor2 en entero
            notaGeometria3 = parseFloat(notaGeometria);
        
        
            if (notMatematica,notaFisica,notaGeometria>=90 && notafisica>=notMatematica ) {
                permoso=true,"tiene permiso";
            } else if (notMatematica,notaFisica, notaGeometria>=89 && notaFisica>=notMatematica) {
                permiso=false,"no tiene permiso";
            }
        
        }
        

