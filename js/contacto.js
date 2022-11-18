const formularioContacto = document.getElementById("formularioContacto")
const enviarMensaje = document.getElementById("enviarMensaje");
const nombre = document.getElementById("nombre")



formularioContacto.addEventListener("submit", enviarFormulario);

function enviarFormulario(e){
    e.preventDefault();
    console.log(e.target.children[0].value);
    console.log(e.target.children[1].value);
    console.log(e.target.children[2].value);
}
