
const drinks = [
    {
        id: 1,
        nombre: "Café",
        img: "./img/cafe.jpg",
        precio: 120,
        cantidad: 1
    },{
        id: 2,
        nombre: "Café Doble",
        img: "./img/cafe.jpg",
        precio: 150
    },{
        id: 3,
        nombre: "Cortado",
        img: "./img/cortado.jpg",
        precio: 160
    },{
        id: 4,
        nombre: "Capuchino",
        img: "./img/capuchino.jpg",
        precio: 180
    },{
        id: 5,
        nombre: "Té",
        img: "./img/te.jpg",
        precio: 150
    },{
        id: 6,
        nombre: "Licuados",
        img: "./img/licuados.jpg",
        precio: 200
    }
]

const food = [
    {
        id: 1,
        nombre: "Tostado",
        img: "./img/tostado.jpg",
        precio: 200
    },{
        id: 2,
        nombre: "Medialuna",
        img: "./img/medialuna.jpg",
        precio: 120
    },{
        id: 3,
        nombre: "Medialuna rellena",
        img: "./img/medialuna-rellena.jpg",
        precio: 180
    },{
        id: 4,
        nombre: "Batta",
        img: "./img/batta.jpg",
        precio: 220
    },{
        id: 5,
        nombre: "Scon",
        img: "./img/scon.jpg",
        precio: 60
    },{
        id: 6,
        nombre: "Brownie",
        img: "./img/brownie.jpg",
        precio: 150
    },{
        id: 7,
        nombre: "Alfajores",
        img: "./img/alfajor.jpg",
        precio: 80
    },{
        id: 8,
        nombre: "Torta: Porcion",
        img: "./img/torta-porcion.jpg",
        precio: 180
    }
]

const drinksMenu = document.getElementById("drinksMenu");
const foodMenu = document.getElementById("foodMenu")

//Mostrar menu de bebidas en html
for(let drink of drinks){
    drinksMenu.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="price-item">
                <div class="price-img">
                    <img src="${drink.img}" alt="Image">
                </div>
                <div class="price-text">
                    <h2>${drink.nombre}</h2>
                    <h3>$${drink.precio}</h3>
                    <button class="btn" id="beb${drink.id}"> Añadir </button>
                </div>
            </div>
        </div>
    `
}
//Mostrar menu de alimentos en html
for (let eFood of food){
    foodMenu.innerHTML+= `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="price-item">
                <div class="price-img">
                    <img src="${eFood.img}" alt="Image">
                </div>
                <div class="price-text">
                    <h2>${eFood.nombre}</h2>
                    <h3>$${eFood.precio}</h3>
                    <button class="btn" id="com${eFood.id}"> Añadir </button>
                </div>
            </div>
        </div>
    `
}


function multiplicar (num1, num2){
    if (num2 == 0){
        alert("Por favor ingrese una cantidad mayor 0")
    } else {
        return num1*num2
    }
}

const sumarIVA = num => num*1.22;

const calcBebida = (par1) => {
    switch (par1) {
        case 1:
            subTotal = multiplicar(140, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado la cantidad de: ${cantidad} café. Costo total = $ ${total} IVA incl.`);
            break;

        case 2:
            subTotal = multiplicar(160, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado la cantidad de: ${cantidad} cortado. Costo total = $ ${total} IVA incl.`);
            break;

        case 3:
            subTotal = multiplicar(140, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado la cantidad de: ${cantidad} té. Costo total = $ ${total} IVA incl.`);
            break;

        case 4:
            subTotal = multiplicar(180, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado la cantidad de: ${cantidad} capuchino. Costo total = $ ${total} IVA incl.`);
            break;

        default:
            alert("Ha ingresado un valor incorrecto, vuelve a intentarlo");
            eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));
            break;
    }
}

const calcComida = (par1) => {
    switch (par1) {
        case 1:
            subTotal = multiplicar(200, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total} IVA incl.`);
            break;

        case 2:
            subTotal = multiplicar(180, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total} IVA incl.`);
            break;

        case 3:
            subTotal = multiplicar(60, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total} IVA incl.`);
            break;

        case 4:
            subTotal = multiplicar(80, cantidad);
            total = parseInt(sumarIVA(subTotal));
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total} IVA incl.`);
            break;

        default:
            alert("Ha ingresado un valor incorrecto, vuelve a intentarlo");
            eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));
            break;
    }
}


let eleccion = parseInt(prompt("Que desea consumir?: 1- Bebida 2- Comida 0- Salir"));

let cantidad, total;

while (eleccion > 2) {
    alert("Ingrese una opcion correcta");
    eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));
}

if (eleccion === 1) {
    //por alguna razon no entra a esta parte del codigo, y simplemente salta al else del if.
    let bebida = parseInt(prompt("1- Café $140 / 2 - Cortado $160 / 3- Té $140 / 4- Capuchino $180 "));
    
    if (bebida <= 4 && bebida != 0) {
        cantidad = parseInt(prompt("¿Cuantas bebidas de este producto desea ordenar?"));
        calcBebida(bebida);
    } else {
        alert("Ingrese una opcion correcta");
        bebida = parseInt(prompt("1- Café $140 / 2 - Cortado $160 / 3- Té $140 / 4- Capuccino $180 "));
        cantidad = parseInt(prompt("¿Cuantas bebidas de este producto desea ordenar?"));
        calcBebida(bebida);
    }
    alert("Gracias por visitarnos");
} else if (eleccion === 2) {
    //same here
    let comida = parseInt(prompt("1- Tostado $200 / 2 - Medialuna $160 / 3- Scon $60 / 4- Alfajores $ 80"));
    if (comida <= 4 && comida != 0) {
        cantidad = parseInt(prompt("¿Cuantas unidades de este producto desea ordenar?"));
        calcComida(comida);
    } else {
        alert("Ingrese una opcion correcta");
        comida = parseInt(prompt("1- Tostado $200 / 2 - Medialuna $160 / 3- Scon $60 / 4- Alfajores $ 80"));
        cantidad = parseInt(prompt("¿Cuantas unidades de este producto desea ordenar?"));
        calcComida(comida);
    }
    alert("Gracias por visitarnos");
} else {
    alert("Gracias por visitarnos");
} 









// let carrito = [];

// fetch('./json/dataBebidas.json')
// .then( (response) => response.json())
// .then( (bebidas) => {

//     bebidas.forEach( bebida => {

//         document.getElementById("menu1").innerHTML += `
//             <div class="col-lg-3 col-md-4 col-sm-6">
//                 <div class="price-item">
//                     <div class="price-img">
//                         <img src="${bebida.img}" alt="Image">
//                     </div>
//                     <div class="price-text">
//                         <h2>${bebida.nombre}</h2>
//                         <h3>$${bebida.precio}</h3>
//                         <button class="btn" id="beb${bebida.id}"> Añadir </button>
//                     </div>
//                 </div>
//             </div>
//         `;
//     })

//     bebidas.forEach( bebida => {

//         document.getElementById(`beb${bebida.id}`).addEventListener("click", () => {

//             carrito.push(bebida);
//             console.log(carrito);

//             if(carrito.hasOwnProperty(bebida.id)){
//                 bebida.cantidad++;
//                 document.getElementById("carrito").innerHTML += `

//                     <div class="card mb-3" style="max-width: 540px;">
//                         <div class="row g-0">
//                             <div class="col-md-4">
//                                 <img src="${bebida.img}" class="img-fluid rounded-start" alt="...">
//                             </div>
//                             <div class="col-md-8">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${bebida.nombre}</h5>
//                                     <p class="card-text">${bebida.precio}</p>
//                                     <p class="card-text"><small class="text-muted">Cantidad: 
//                                         <button class="btn" id="menos${bebida.id}"> <i class="fa-solid fa-minus"></i></button>
//                                         <strong id="editQty">${bebida.cantidad}</strong>
//                                         <button class="btn" id="mas${bebida.id}"><i class="fa-solid fa-plus"></i></button>
//                                     </small></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 `
//             } 
            
            
            



            

            


//         })

//     })

// });

// fetch('./json/dataComidas.json')
// .then( (response) => response.json() )
// .then( (comidas) => {

//     comidas.forEach( comida => {

//         document.getElementById("menu2").innerHTML += `
            // <div class="col-lg-3 col-md-4 col-sm-6">
            //     <div class="price-item">
            //         <div class="price-img">
            //             <img src="${comida.img}" alt="Image">
            //         </div>
            //         <div class="price-text">
            //             <h2>${comida.nombre}</h2>
            //             <h3>$${comida.precio}</h3>
            //             <button class="btn" id="com${comida.id}"> Añadir </button>
            //         </div>
            //     </div>
            // </div>
//         `;
//     })
// })