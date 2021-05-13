
var seleccionandoPiso=false;
var seleccionandoDpto=false;


function seleccionePiso()
{
    document.getElementById("mensajePiso").value = "Ingrese piso entre 00 y 42";
    piso=-1;    
    seleccionandoPiso=true;
    seleccionandoDpto=false;
    
}

function seleccioneDpto()
{
    seleccionandoDpto=true;
    seleccionandoPiso=false;
    document.getElementById("mensajeDpto").value = "Ingrese dpto entre 1 y 8";
    dpto=-1;
}


function presionarNumero(numero)
{
    
    if(seleccionandoDpto==false && seleccionandoPiso==false)
        document.getElementById("msjBootstrap").innerHTML = "Seleccione piso o dpto primero.";                           

    if(seleccionandoPiso==true)
    {
        var texto=document.getElementById("mensajePiso").value;
        
        if(texto=="Ingrese piso entre 00 y 42")
        {
            texto="";        
            texto=texto+ numero;
            document.getElementById("mensajePiso").value = texto;               
        }
        else
        {
            texto=texto+ numero;
            document.getElementById("mensajePiso").value = texto;               
        }
    }
    
    if(seleccionandoDpto==true)
    {
        var texto=document.getElementById("mensajeDpto").value;
        
        if(texto=="Ingrese dpto entre 1 y 8")
        {
            texto="";        
            texto=texto+ numero;
            document.getElementById("mensajeDpto").value = texto;               
        }
        else
        {
            texto=texto+ numero;
            document.getElementById("mensajeDpto").value = texto;               
        }
    }
}


function mostrarMensaje(id)
{
    var texto=document.getElementById(id).value;
    
	if (isNaN(texto)==true)  //sino es un nro)     
    {
        alert("v");
        texto="";        
        texto=texto+ numero;        
        document.getElementById(id).value = texto;               
    }
    else
    {
        alert("f");
        texto=texto+ numero;
        document.getElementById(id).value = texto;               
    }

}

function llamar()
{
    var nroPiso=document.getElementById("mensajePiso").value;  
    var nroDpto=document.getElementById("mensajeDpto").value;  

    var continuar=true;
    var texto="";
    
    if( (isNaN(nroPiso) || nroPiso=="") && (isNaN(nroDpto) || nroDpto=="") )
    {
        texto="Seleccione Piso y Dpto válidos.";
        continuar=false;
    }
    else
    {
        if(isNaN(nroPiso) || nroPiso=="")
        {
            texto="Seleccione Piso.";
            continuar=false;
        }
        else
        {
            if(nroPiso<0 || nroPiso>48)
            {
                texto="Seleccione un piso válido.";
                continuar=false;
            }
        }

        if(isNaN(nroDpto) || nroDpto=="")
        {
            texto="Seleccione Dpto.";
            continuar=false;
        }
        else
        {
            if(nroDpto<1 || nroDpto>8)
            {
                texto="Seleccione un dpto válido.";
                continuar=false;
            }
        }
    }

    if(continuar==false)         
    {
        document.getElementById("msjBootstrap").innerHTML = texto;                           
        document.getElementById("msjBootstrapContenedor").setAttribute("class","alert alert-danger d-flex align-items-center alert-dismissible fade show");
        document.getElementById("svgMsj").innerHTML ='<use xlink:href="#exclamation-triangle-fill"/>'; 
        
    }
    else
    {
        document.getElementById("msjBootstrap").innerHTML = "Llamando Piso:"+nroPiso+ " Dpto:"+ nroDpto;
        document.getElementById("msjBootstrapContenedor").setAttribute("class","alert alert-success d-flex align-items-center alert-dismissible fade show");
        document.getElementById("svgMsj").innerHTML ='<use xlink:href="#check-circle-fill"/>';
    }

    
}

function borrar()
{
    seleccionandoPiso=false;
    seleccionandoDpto=false;

    document.getElementById("mensajePiso").value = "";  
    document.getElementById("mensajeDpto").value = "";  

    document.getElementById("msjBootstrap").innerHTML = "Seleccione Piso y luego Dpto."
    document.getElementById("msjBootstrapContenedor").setAttribute("class","alert alert-primary d-flex align-items-center alert-dismissible fade show");
    document.getElementById("svgMsj").innerHTML ='<use xlink:href="#info-fill"/>';
    
}

