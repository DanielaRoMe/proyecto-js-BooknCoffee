const formularioContacto = document.getElementById("formularioContacto");

let msjInput1= document.getElementById("msjInput1");
let msjInput2= document.getElementById("msjInput2");

//Evento de validacion de formulario
formularioContacto.addEventListener("submit", validarFormulario);

//Funcion que se ejecuta para validar el formulario y "enviarlo"
function validarFormulario(e){
    e.preventDefault();
    let alfabeticos = /^[a-zA-Z]+$/;  
    
    //chequeo de nombre que contenga solo letras
    if(!e.target.children[0].value.match(alfabeticos)){
        e.target.children[0].value="";
        let input1 = document.createElement("p");
        input1.innerHTML= "";
        input1.innerHTML= "Ingrese un nombre valido";
        msjInput1.className = "error";
        msjInput1.append(input1);

    } else if (!e.target.children[2].value.includes(".")){ //chequeo de que el mail sea ".algo"

        e.target.children[2].value=""
        let input2 = document.createElement("p");
        input2.innerHTML= "";
        input2.innerHTML= "Falto un punto";
        msjInput2.className = "error";
        msjInput2.append(input2);

    } else {

        //si lo anterior esta ok, se ejecuta el "envio" i limpieza del mismo
        Swal.fire({
            title: 'Gracias por sus comentarios',
            text: 'Responderemos a la brevedad',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
    
        e.target.children[0].value="";
        e.target.children[2].value="";
        e.target.children[4].value="";

        location.reload();
        
    }

    

}

