$(document).ready(function () {
    $("h1").hide(100);
    $("h1").show(1000);

    $('#cambiar').on({
        click: function() {   
            
            var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
            $('h1').css("background-color", randomColor);
            //$('h1').css("background-color", "rgb(0, 0, 255)");
            //$('h1').css("color", "white");
        }
    });

    $('#ocultar').on({
        click: function() {            
            const boton=$("#ocultar").attr("value");
           
            if(boton== "Ocultar primer Section")
            {   
                $("#primerSeccion").hide();             
                $("#ocultar").attr("value" , "Mostrar primer Section"); //versions older than 1.6 
                //$("#ocultar").prop('value', 'Save'); //versions newer than 1.6
            }
            else
            {               
                $("#primerSeccion").show();              
                $("#ocultar").attr("value" , "Ocultar primer Section"); //versions older than 1.6 
            }
           
        }
    });

    $("#agregarElemento").on({
        click: function(){
            const elemento= $("#elemento").val();
            $("#listaNombres").append(`<option value=" ${elemento} ">${elemento}</option>`);
            
        }
        
    });

    

    for(let i=0;i<=9;i++)
    {                
        //$("#cuartaSeccion").append(`<button id="btn-${i}">${i}</button>`); //append agrega luego del elemento
        $("#botones").before(`<button  id="btn-${i}">${i}</button>`); //agrega antes del elemento
        $(`#btn-${i}`).on({
            click: function() {   
                        
                const clase=$(`#btn-${i}`).attr("class");
                                
                if(clase!= 'botonActivo')
                {                    
                    $(`#btn-${i}`).addClass('botonActivo');
                    $("#botones").val( $(this).text());
                }
                else
                {                    
                    $(`#btn-${i}`).removeAttr("class");
                    //$(this).removeClass('botonActivo');   //tambien funciona
                    $(`#btn-${i}`).removeAttr("color");
                    
                    $("#botones").val("");
                    
                }  
                                              
            }
        });
        
    }
    

    let starElegida=-1;
    for(let j=1;j<=5;j++)
    {                        
        $("#estrellitas").append(`<img id="star-${j}" style="width:50px;height:50px;" src="IMAGE/star_des.png" alt="id="star-${j}">`); //append agrega luego del elemento
        
        $(`#star-${j}`).hover(
                
                function() {
                    let hasta= $(this).attr("id").substr(5);                    
                    
                    for(let b=1;b<=hasta;b++)
                    {                        
                        $(`#star-${b}`).attr("src","IMAGE/star.png");
                    }
                    
                }, 
                function() {
                    let hasta;
                    
                    hasta= $(this).attr("id").substr(5);                    
                        for(let b=1;b<=5;b++)
                        {                            
                            $(`#star-${b}`).attr("src","IMAGE/star_des.png");
                        }  
                                                                                                                                                                                                        
                }
        );   
        
        
        $(`#star-${j}`).on({
            click: function() {   
                        
                
                    starElegida= $(this).attr("id").substr(5);                    
                    
                    for(let b=1;b<=5;b++)
                        {           
                            if(b<=starElegida)                 
                                $(`#star-${b}`).attr("src","IMAGE/star.png");
                            else
                                $(`#star-${b}`).attr("src","IMAGE/star_des.png");
                        }
                    
                        $("#alert").remove();//remuevo el componente alert en caso que ya le haya valorado y no cerrado el alert
                        
                        //creo un componente alert para mostrar el msj
                        $("#msj").after(`
                        <div id="alert" class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Gracias!</strong> por valorar nuestra página! :)
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        `); 
                        
                       //muestro el componente alert creado en html
                       //https://www.w3schools.com/bootstrap4/bootstrap_ref_js_modal.asp //guie con bootstrap 4 
                        $("#exampleModal").modal("show");
                        
            }
        });

        $("#estrellitas").mouseleave(function() {
        //$(`#star-${j}`).mouseleave(function() {
            if(starElegida!=-1)
                    {
                        for(let b=1;b<=5;b++)
                        {           
                            if(b<=starElegida)                 
                                $(`#star-${b}`).attr("src","IMAGE/star.png");
                            else
                                $(`#star-${b}`).attr("src","IMAGE/star_des.png");
                        }
                    }  
          });
    }
    
    /*
    en el css intente cambiar el color de la cruz del alert modal de bootstrap que aparece negro pero no pude cambiarlo y no me di cuenta porque.. 
    si podes iluminarme jaja aunque no es algo fundamental 
    */

});
