let carrito = [];

const menuBebidas = document.getElementById("menuBebidas");
const menuComidas = document.getElementById("menuComidas")
const modalCarrito = document.getElementById("tablaBody");
const finalizarPedido = document.getElementById("finalizarPedido");

//Guardar carrito en Storage, recuperarlo y mostrarlo nuevamente si se recarga la pagina o se cierra la pestaña
let guardarCarritoEnLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };
let obtenerCarritoDeLocalStorage = JSON.parse(localStorage.getItem("carritoJson"));

if (obtenerCarritoDeLocalStorage) {

    obtenerCarritoDeLocalStorage.forEach((producto) => carrito.push(producto));
    mostrarCarrito();

};

//Funcion para mostrar apartado de Bebidas del menu en el HTML
function mostrarBebidas() {
    fetch("./json/menu.json")
        .then(response => response.json())
        .then(datosBebidas => {

            for (let bebida of datosBebidas.bebidas) {
                menuBebidas.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="price-item">
                            <div class="price-img">
                                <img src="${bebida.img}" alt="Image">
                            </div>
                            <div class="price-text">
                                <h2>${bebida.nombre}</h2>
                                <h3>$${bebida.precio}</h3>
                                <button class="btn" id="btnB${bebida.id}"> Añadir </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            //Evento boton agregar
            datosBebidas.bebidas.forEach((bebida) => {
                document.getElementById(`btnB${bebida.id}`).addEventListener("click", function () {
                    agregarAlCarrito(bebida);
                });
            })
        })

};

//Funcion para mostrar apartado de Comestibles del menu en el HTML
function mostrarComidas() {
    fetch("./json/menu.json")
        .then(response => response.json())
        .then(datosComidas => {
            for (comida of datosComidas.comidas) {
                menuComidas.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="price-item">
                            <div class="price-img">
                                <img src="${comida.img}" alt="Image">
                            </div>
                            <div class="price-text">
                                <h2>${comida.nombre}</h2>
                                <h3>$${comida.precio}</h3>
                                <button class="btn" id="btnC${comida.id}"> Añadir </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            //Evento boton agregar
            datosComidas.comidas.forEach(comida => {
                document.getElementById(`btnC${comida.id}`).addEventListener("click", function () {
                    agregarAlCarrito(comida);
                });
            })
        })
};

mostrarBebidas();
mostrarComidas();

//Funcion para mostrar el carrito en el modal
function mostrarCarrito() {
    
    modalCarrito.innerHTML = "";
    carrito.forEach(elemento => {
        modalCarrito.innerHTML += `
            <tr>
                <td>${elemento.nombre}</td>
                <td>${elemento.precio}</td>
                <td>${elemento.cantidad}</td>
                <td>
                    <button type="button" id=btnEliminar${elemento.id} class="btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
        </tr>
        `
    });

    carrito.forEach(elemento => {
        document.getElementById(`btnEliminar${elemento.id}`).addEventListener("click", function () {
            eliminarElemento(elemento);
        });
    });

    // SUMA TOTAL
    let total = carrito.reduce((acumulador, elemento) => acumulador + (elemento.precio * elemento.cantidad), 0);
    document.getElementById("total").innerText = `Total: $${total} `;

    // //guardando carrito en Storage en cada modificacion
    // guardarCarritoEnLocalStorage("carritoJson", JSON.stringify(carrito));

};

//Funcion para agregar al carrito dependiendo si se encuentra el producto o no en el mismo
function agregarAlCarrito(producto) {

    Swal.fire(`Haz agregado: ${producto.nombre} a tu pedido!`);

    if (carrito.length == 0) {

        carrito.push(producto);
        mostrarCarrito();

    } else if (carrito.some((elemento) => elemento.id == producto.id)) {

        let pos = carrito.indexOf(producto);
        carrito[pos].cantidad += 1;
        mostrarCarrito();

    } else {

        carrito.push(producto);
        mostrarCarrito();

    };

    //guardando carrito en Storage en cada modificacion
    guardarCarritoEnLocalStorage("carritoJson", JSON.stringify(carrito));
};



// Funcion para eliminar elementos del carrito ya sea cantidad o totalmente
function eliminarElemento(producto) {

    if (producto.cantidad > 1) {
        producto.cantidad--;
        mostrarCarrito();
    } else {
        let pos = carrito.indexOf(producto);
        carrito.splice(pos, 1);
        mostrarCarrito();

    }

    //guardando carrito en Storage en cada modificacion
    guardarCarritoEnLocalStorage("carritoJson", JSON.stringify(carrito));
};

/*Evento para finalizar la compra: vacia el carrito,
lo envia a un json (simulando que lo enviamos para ser preparado) y limpia el localStorage*/
finalizarPedido.addEventListener("click", ()=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(carrito),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((pedido) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su pedido esta siendo preparado',
            text: `Numero de pedido: ${pedido.id}`,
            showConfirmButton: false,
            timer: 3000
            });

        carrito = [];
        localStorage.clear();
        modalCarrito.innerHTML = "";
        document.getElementById("total").innerText = `No hay elementos en su pedido`;
    });
});