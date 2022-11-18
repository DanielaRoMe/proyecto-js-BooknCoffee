//Arreglo vacio para luego pushear los objetos traidos de JSON
const libros = [];

const contenedorLibros = document.getElementById("contenedorLibros");

//Funcion para mostrar libros y evento del boton que muestra la descripcion
function mostrarLibros() {
    fetch("./json/libros.json")
        .then(response => response.json())
        .then(datosLibros => {

            for (let libro of datosLibros) {
                contenedorLibros.innerHTML += `
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="service-img">
                                <img src="${libro.img}" alt="${libro.nombre}">
                            </div>
                            <h3>
                                ${libro.nombre}
                            </h3>
                            <p>
                                ${libro.autor}
                            </p>
                            <button class="btn" id="desc${libro.id}"> 
                                Descripcion 
                            </button>
                        </div>
                    </div>
                `;
            };

            datosLibros.forEach((libro) => {

                libros.push(libro);

                document.getElementById(`desc${libro.id}`).addEventListener("click", () => {
                    verDescripcion(libro);
                });

            });

        });
};

mostrarLibros();

//BUSCADOR 
//const btnBuscador = document.getElementById("buscador");
//const busquedaUsuario = document.getElementById("busquedaUsuario");
const formulario = document.getElementById("formularioBusqueda");

formulario.addEventListener("submit", buscarLibro);

//Buscador de libro 
function buscarLibro(e) {

    e.preventDefault();

    let busquedaUsuario = e.target[0].value;

    //Filtro por titulo del libro o autor
    let resultado = libros.filter(libro => libro.nombre.toLowerCase().includes(busquedaUsuario.toLowerCase()) || libro.autor.toLowerCase().includes(busquedaUsuario.toLowerCase()))

    //condicional de la busqueda por si encuentra coincidencias o no
    if (resultado.length == 0) {
        contenedorLibros.innerHTML = `<p> Lo sentimos, no contamos con el libro que busca </p>`
    } else {
        //necesitaba vaciar el innerHTML para que solo me mostrara la busqueda
        contenedorLibros.innerHTML = "";

        resultado.forEach((elemento) => {
            contenedorLibros.innerHTML += `
                <div class="col-lg-4 col-md-6">
                    <div class="service-item">
                        <div class="service-img">
                            <img src="${elemento.img}" alt="${elemento.nombre}">
                        </div>
                        <h3>
                            ${elemento.nombre}
                        </h3>
                        <p>
                            ${elemento.autor}
                        </p>
                        <button class="btn" id="desc${elemento.id}"> 
                            Descripcion 
                        </button>
                    </div>
                </div>
            `;
        });

        //Evento boton de descripcion
        resultado.forEach((elemento) => {
            document.getElementById(`desc${elemento.id}`).addEventListener("click", () => {
                verDescripcion(elemento);
            });
        });

    };
};

//Funcion para mostrar la descripcion del libro
function verDescripcion(libro) {

    Swal.fire({
        title: `${libro.nombre}`,
        text: `${libro.descripcion}`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

};






