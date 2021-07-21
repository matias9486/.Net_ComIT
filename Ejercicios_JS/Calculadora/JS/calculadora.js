

function presionarNumero(boton)
{                
    var texto=document.getElementById("visor").value;                           
            
    texto=texto+ boton;
    
    document.getElementById("visor").value = texto;               
        
}


function calcular()
{
    var texto=document.getElementById("visor").value;    
    var resultado=eval(texto.toString());

	if(isNaN(resultado))
    {
        texto="Ingrese operación válida";
        
    }
    else
    {
        
        texto=texto+ "="+resultado;            
                       
    }
    document.getElementById("visor").value = texto;

    
}

function limpiarVisor()
{    
    document.getElementById("visor").value = "";                           
}

