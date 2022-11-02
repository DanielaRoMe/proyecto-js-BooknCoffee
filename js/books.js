//arreglo vacio, clase constructora, pushear los objetos 
const books = [
    {
        id: 1,
        nombre: "Eleanor and Park",
        autor: "Rainbow Rowell",
        descripcion: "Una historia de amor entre dosoutsiders lo bastante inteligentes como para saber que el primer amor nunca es para siempre, pero lo suficientemente valientes como para intentarlo.",
        img: "./img/eleanor-y-park.jpg"
    },{
        id: 2,
        nombre: "Fruits Basket: Tomo 1",
        autor: "Natsuki Takaya",
        descripcion: "Tôru no ha tenido una vida fácil, pero siempre afronta los sinsabores de la vida con una sonrisa. Cuando descubre el secreto de los Sôma, una misteriosa familia presa de una terrible maldición, decide guardarles el secreto y se integra en el día a día de estos peculiares personajes.",
        img: "./img/fruits-basket.jpg"
    },{
        id: 3,
        nombre: "Fullmetal Alchemist: Kanzenban Tomo 1 ",
        autor: "Hiromu Arakawa",
        descripcion: "Cuando tan solo eran unos niños, los hermanos Edward y Alphonse Elric usaron la alquimia para cometer un pecado capital: intentar la transmutación humana. El terrible precio que tuvieron que pagar por su osadía les ha lisiado de por vida, pero no se resignan a su destino y están dispuestos a recuperar sus cuerpos. Y para ello necesitan la sustancia más especial del mundo: el quinto elemento, la piedra filosofal.",
        img: "./img/fullmetal-alchemist-kanzenban.jpg"
    },{
        id: 4,
        nombre: "Juegos del Hambre: Balada de pajaros cantores y serpientes",
        autor: "Suzanne Collins",
        descripcion: "La ambición será su motor. La rivalidad, su motivación. Pero alcanzar el poder tiene un precio. Es la mañana de la cosecha que dará comienzo a los décimos Juegos del Hambre. En el Capitolio, Coriolanus Snow, de dieciocho años, se prepara para una oportunidad única: alcanzar la gloria como mentor de los Juegos. La casa de los Snow, antes tan influyente, atraviesa tiempos difíciles, y su destino depende de que Coriolanus consiga superar a sus compañeros en ingenio, estrategia y encanto como mentor del tributo que le sea adjudicado.",
        img: "./img/juegos-del-hambre4.jpg"
    },{
        id: 5,
        nombre: "Jujutsu Kaisen: Tomo 0",
        autor: "Gege Akutami",
        descripcion: "Yûji Itadori es un estudiante con unas habilidades físicas excepcionales. Todos los días, como rutina, va al hospital a visitar a su abuelo enfermo y decide apuntarse al club de ocultismo del instituto para no dar un palo al agua... Sin embargo, un buen día el sello del talismán que se hallaba escondido en su instituto se rompe, y comienzan a aparecer unos monstruos. Ante este giro de los acontecimientos, Itadori decide adentrarse en el instituto para salvar a sus compañeros. ¿Qué le deparará el destino?",
        img: "./img/jujutsu-Kaisen0.jpg"
    },{
        id: 6,
        nombre: "Lo que sucedio con la medusa",
        autor: "Ali Benjamin",
        descripcion: "Suzy Swanson está segura de que conoce el verdadero motivo de la muerte de su amiga Franny Jackson. Todo el mundo dice que es imposible saber lo que realmente ocurrió, que son cosas que pasan. Pero Suzy sabe que tiene que haber una explicación científica. Apenada por la muerte de su mejor amiga, y por los últimos momentos que pasaron juntas, se recluye en su mundo interior y decide no volver a hablar. Convencida de que la muerte de Franny se debió a una picadura de medusa, inventa un plan para demostrarlo, aunque para ello tenga que dar la vuelta al mundo… sola. Mientras se prepara para esta aventura, descubre cosas extraordinarias, entre otras que la capacidad de amar y de tener esperanza están más cerca de lo que creía.",
        img: "./img/lo-que-sucedio-con-la-medusa.jpg"
    },{
        id: 7,
        nombre: "Night Owls",
        autor: "Jenn Bennett",
        descripcion: "Jack es atractivo, encantador, de clase social alta, amante de lo vintage y del budismo. Y posiblemente sea uno de los artistas callejeros más buscados por la policía de la ciudad. Beatriz es una chica con perfil bajo, una apasionada de la anatomía humana que le encanta dibujar cadavers. Viene de una familia de clase media, y sabe que tiene que luchar por lo que quiere, ya que nadie le regalará nada. ¿Tienen algo en común? Sí, su amor por el arte.",
        img: "./img/night-owls.jpg"
    },{
        id: 8,
        nombre: "Recuerda aquella vez",
        autor: "Adam Silvera",
        descripcion: "En los meses después del suicidio de su padre, ha sido difícil para Aaron Soto, a sus dieciséis anos de edad, encontrar de nuevo la felicidad, pero eso le sigue dando vueltas. Con el apoyo de su novia Genevieve y su madre con el exceso de trabajo, va recordando poco a poco como se podría sentir. Pero el dolor y la cicatriz en forma de sonrisa en su muñeca le impiden olvidarlo por completo. Cuando Genevieve se aleja durante un par de semanas, Aaron se la pasa todo el tiempo con este nuevo chico, Thomas. Sus amigos lo notan y no quedan muy encantados. Pero Aaron no puede negar la felicidad que Thomas le trae o como su amistad lo hace sentir seguro de si mismo, a pesar de las tensiones que vayan suscitando con su novia y con sus amigos. Como Aaron no puede permanecer lejos de Thomas o desactivar sus sentimientos recién descubiertos hacia el, considera recurrir al Instituto Leteo, que tiene un revolucionario procedimiento de alteración de memoria para recobrarse a si mismo, aunque esto signifique olvidar quien realmente es.",
        img: "./img/recuerda-aquella-vez.jpg"
    },{
        id: 9,
        nombre: "Tokyo Revengers: Tomo 5",
        autor: "Ken Wakui",
        descripcion: "La victoria de la Toman en su enfrentamiento contra la Walhalla lleva a la fusión de ambas bandas. Takemichi vuelve al presente... ¡y descubre que se ha convertido en un alto directivo de la Toman! Pero la influencia de los exmiembros de la Black Dragon es aplastante... Takemichi cae en la trampa de Kisaki y pierde a Chifuyu. Al reencontrarse con Kazutora, está más decidido que nunca a recuperar la antigua Toman y evitar su vínculo con la Black Dragon, lo que la convierte en la organización temible que es en el presente.",
        img: "./img/tokyo-revenger-tomo5.jpg"
    },{
        id: 10,
        nombre: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        descripcion: "Es una novela de desarrollo personal, en la que las dos figuras principales, Elizabeth Bennet y Fitzwilliam Darcy, cada uno a su manera y, no obstante, de forma muy parecida, deben madurar para superar algunas crisis y aprender de sus errores para poder encarar el futuro en común, superando el orgullo de clase de Darcy y los prejuicios de Elizabeth hacia él.",
        img: "./img/orgullo-y-prejuicio.jpg"
    },{
        id: 11,
        nombre: "El Profesor",
        autor: "John Katzenbach",
        descripcion: "Adrian Thomas es un profesor universitario retirado al que acaban de diagnosticarle una demencia degenerativa que lo lloverá pronto a la muerte. Ha dedicado toda su vida a estudiar los procesos de la mente y a transmitir a sus alumnos todo su conocimiento. Ahora, jubilado, viudo y enfermo, cree que lo mejor que puede hacer es quitarse la vida. Sin embargo, al salir de la consulta del médico es testigo involuntario del secuestro de Jennifer Riggins, una conflictiva adolescente de dieciséis años con un largo historial de huidas, que desaparece sin dejar rastro dentro de una furgoneta conducida por una mujer rubia. El profesor Thomas se debate entre poner fin a su vida y ser útil una última vez antes de morir. Decide ayudar a encontrar a Jennifer, intentar darle la oportunidad de vivir su joven vida. Para eso debe sumergirse en el oscuro mundo de la pornografía en Internet, un mundo perverso y criminal donde todo su saber académico se pone en juego, y donde debe utilizar los pocos momentos de lucidez para avanzar en una investigación para que la hay muy poco tiempo.",
        img: "./img/el-profesor.jpg"
    },{
        id: 11,
        nombre: "Tokyo Revengers: Tomo 4",
        autor: "Ken Wakui",
        descripcion: "DA COMIENZO LA BATALLA ENTRE LA TOMAN Y LA WALHALLA: ¡EL HALLOWEEN SANGRIENTO! La batalla del Halloween sangriento empieza con dos enfrentamientos violentos y repentinos entre los pesos pesados de ambas bandas: Mikey contra Kazutora y Draken contra Hanma. Al presenciar la horrible situación que se desarrolla ante sus ojos, Takemichi teme que Mikey acabe matando a Kazutora, lo que le llevaría de nuevo a ese futuro tan horrible que ya conoce.¡¿Caerá Mikey en la oscuridad después de que concluya el Halloween sangriento?!",
        img: "./img/tokyo-revenger-tomo4.jpg"
    }
]


const contBooks = document.getElementById("cont-books");
//ciclo for para mostrar en pantalla galeria de libros disponibles
//cambiar for of por .forEach
for(let book of books){
    contBooks.innerHTML+=`
        <div class="col-lg-4 col-md-6">
            <div class="service-item">
                <div class="service-img">
                    <img src="${book.img}" alt="${book.nombre}">
                </div>
                <h3>
                    ${book.nombre}
                </h3>
                <p>
                    ${book.autor}
                </p>
                <button class="btn" id="desc${book.id}"> 
                    Descripcion 
                </button>
            </div>
        </div>
    `;
}

//BUSCADOR MOMENTANEAMENTE CON PROMPT
const userOption = prompt("Que libro desea buscar?").toLowerCase();

/* 
Luego agregar evento para el buscador
const searcher = document.getElementById("searcher").value;
*/

//BUSCADOR POR LIBRO (LUEGO HACER BUSCADOR POR AUTOR TAMBIEN)
let resultSearch = books.filter(book => book.nombre.toLowerCase().includes(userOption));
//console.log(resultSearch);

/*
CODIGO DE PRUEBA DE COMPORTAMIENTO
let mensaje = `El resultado de la busqueda es: \n`;
for(elemento of resultSearch){
     mensaje += `${elemento.nombre} \n`;
}
alert(mensaje);
*/

//BUSCADOR
if(resultSearch.length == 0){
    contBooks.innerHTML = `<p> Lo sentimos, no contamos con el libro que busca </p>`
}else {
    //necesitaba vaciar el innerHTML para que solo me mostrara la busqueda
    contBooks.innerHTML = "";
    for(element of resultSearch){
    
        contBooks.innerHTML+=`
        <div class="col-lg-4 col-md-6">
            <div class="service-item">
                <div class="service-img">
                    <img src="${element.img}" alt="${element.nombre}">
                </div>
                <h3>
                    ${element.nombre}
                </h3>
                <p>
                    ${element.autor}
                </p>
                <button class="btn" id="desc${element.id}"> 
                    Descripcion 
                </button>
            </div>
        </div>
    `;
    }
}



