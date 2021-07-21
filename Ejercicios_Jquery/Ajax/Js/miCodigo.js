$(function () {
    $("#boton-usuarios").on("click", getUsers);
});

/*  obtener usuarios SIN usar AJAX
 const getUsers = () => {
     $.get('https://reqres.in/api/users', (respuesta) => {
         $.each(respuesta.data, (indice, elemento) => {
             $("#divUsuarios").append(
                 `<div>
                     <p>${elemento.first_name} ${elemento.last_name}</p>
                     <img src=${elemento.avatar}></img>
                  </div>`
             );
         });
     });
 }
 */

 //si usas AJAX... sapeeeeeee :V
//usando metodo GET usando AJAX. creo una funcion para obtener los usuarios 
const getUsers = () => {
    /*creo objeto(config) de configuracion con los valores necesarios            
    type, url, dataType, data ,success, error
    data : datos a enviar al servidor(en caso que sea POST).        
    Hay muchas otras opciones que pueden ser pasadas como parámetro del objeto. Puedes encontrar la lista completa en la documentación oficial de jQuery. 
    https://api.jquery.com/jQuery.ajax/
    */
    let config = {
        type: 'get',    //type : tipo de la petición, GET(obtener) o POST(enviar) (GET por defecto).
        url: 'https://reqres.in/api/users',     //url : dirección a la que se envía la petición.
        dataType: 'json',   //dataType : tipo de datos que esperas obtener del servidor (si no se especifica, jQuery intenta averiguar de qué tipo se trata).    

        //success : función que se ejecuta cuando se obtiene una respuesta con éxito.
        success: (respuesta) => {
                //obtengo el componente con el id indicado para luego agregarle nuevos componentes mediante codigo
                const controlDiv = $("#divUsuarios");

                /*la peticion en caso de exito genera una respuesta. 
                respuesta puede tener varios atributos pero en este caso quiero usar lo que trae el atributo data.
                el atributo data es un arreglo que a su vez contiene otros objetos con sus respectivos atributos(firstName, last name y avatar en este caso)
                por eso lo recorro con un each*/
                
                $.each(respuesta.data, (indice, elemento) => {
                    //agrego por cada elemento de respuesta.data, los siguientes elementos html
                    controlDiv.append(
                        `<div class="miClase">                            
                            <p class="enNegrita">#${elemento.id} ${elemento.first_name} ${elemento.last_name}</p>
                            <p>${elemento.email}</p>
                            <img style="border-radius:5px;" src=${elemento.avatar}></img>
                        </div>`
                    );
                });            
        },
        //error : función que se llama si la petición no tiene éxito.
        error: () => {
            alert("Error al ejecutar la api");
        }
    };
    //llamo al metodo ajax y le paso el objeto configuracion como parametro
    $.ajax(config);
}

//funcion para agregar un usuario usando POST con AJAX
const agregarUsuario = () => {
    //creo un objeto usuario con sus atributos
    const usuario = {
        first_name: "Tony",
        last_name: "Stark",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924_960_720.png",
        email: "tony.stark@gmail.com"
    };
    //llamo al metodo ajax y le paso los parametos de configuracion
    $.ajax({
        type: 'post',
        url: 'https://reqres.in/api/users',
        dataType: 'json',
        data: usuario,  //data : datos a enviar al servidor(en caso que sea POST).        
        success: (respuesta) => {
            console.log(respuesta);
            $("#divUsuarios").append(
                `<div>
                    <p>${respuesta.first_name} ${respuesta.last_name}</p>
                    <img src=${respuesta.avatar}></img>
                 </div>`
            );
        }
    });
}

var myvar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("timer").value = d.toLocaleTimeString();
}


//
$(function () {
    $("#boton-segundoGrupo").on("click", getSegundoGrupo);
});
//metodo para consultar el segundo grupo de usuarios y otros atributos ademas de data
const getSegundoGrupo = () => {
    
    let config = {
        type: 'get',
        url: 'https://reqres.in/api/users?page=2',
        dataType: 'json',
        
        success: (respuesta) => {
                
                const controlDiv = $("#divSegundoGrupo");
                
                controlDiv.append(  //primer append
                    `<div class="miDiv">
                        <p>Página ${respuesta.page}</p>
                        <p>Soporte URL: ${respuesta.support.url}</p>
                        <p>Soporte Text: ${respuesta.support.text}</p>
                     `
                );
                
                $.each(respuesta.data, (indice, elemento) => {
                    //agrego por cada elemento de respuesta.data, los siguientes elementos html
                    controlDiv.append(
                        `<div class="miClase">                            
                            <p class="enNegrita">#${elemento.id} ${elemento.first_name} ${elemento.last_name}</p>
                            <p>${elemento.email}</p>
                            <img style="border-radius:5px;" src=${elemento.avatar}></img>
                         </div>
                    </div>` //cierre div del primer append
                    );
                });            
        },
        //error : función que se llama si la petición no tiene éxito.
        error: () => {
            alert("Error al ejecutar la api");
        }
    };
    //llamo al metodo ajax y le paso el objeto configuracion como parametro
    $.ajax(config);
}

/*
en la ultima funcion para llamar el segundo grupo.. mi idea es meter los usuarios dentro del div(.miDiv)
por eso hago primero el append y dejo sin cerrar el div ahi.. y lo cierro luego en el segundo append.. luego de crear los div(miClase)
la duda es.. porque no incluye los usuarios dentro del primer div?? 
se puede hacer como hice? hacer un append sin cerrar una etiqueta.. y cerrarla en otro append luego?
*/