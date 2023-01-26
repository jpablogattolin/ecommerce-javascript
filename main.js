/** INCIO JAVASCRIPT **/

let nombre = prompt ("Bienvenido: Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let edad = prompt ("Ingrese su edad")

if (edad <18) {
    alert ("No puedes realizar compras siendo menor de edad")
} else {
    alert ("bienvenido: "+ nombre +" "+ apellido)
}

let comercio = prompt ("Posees comercio para compras mayoristas?")

if (comercio === "si") {
    alert ("Puede realizar compras Mayoristas. Adelante")
} else {
    alert ("No realizamos comprar minoristas")
}

/** ARRAY DE PRODUCTOS */

const productos = [
    {   
        id: "Detergente01",
        titulo: "Detergente Magistral",
        Descripcion: "Magistral Concentrado",
        imagen: "./img/deter-magistral.jpg",
        precio: 100,
        cantidad: 50
    },
    {
        id: "Detergente02",
        titulo: "Detergente ALA PLUS",
        Descripcion: "ALA Concentrado",
        imagen: "./img/det-alaplus.jpg",
        precio: 80,
        cantidad: 40
    },
    {   
        id:"Desodorante01",
        titulo: "Desdorante de Ambientes",
        Descripcion: "Desodorantes ambientales Varios",
        imagen: "./img/desod-amb.jpg",
        precio: 90,
        cantidad: 70
    },
    {   
        id: "Desodante02",
        titulo: "Desodorante de Pisos",
        Descripcion: "Desodantes de pisos varios",
        imagen: "./img/desod-piso.jpg",
        precio: 68,
        cantidad: 50
    },
    {
        id: "Cloro",
        titulo: "Cloro",
        Descripcion: "Cloro Concentrado",
        imagen: "./img/cloro.jpg",
        precio: 105,
        cantidad: 100
        
    }
]

const contenedorPrincipal = document.querySelector ("#contenedorPrincipal")
const botonesAgregar = document.querySelectorAll(".btn btn-primary")

function cargarProductos () {

    productos.forEach(producto => {

        let div = document.createElement ("div");
        div.classList.add ("producto");
        div.innerHTML = `
        <img src="$(producto.imagen)" class="card-img-top" alt="$(producto.titulo)">
            <div class="card-body">
                <h5 class="card-title">$(producto.titulo)</h5>
                <p class="card-text">$(producto.descripcion)</p>
                <a href="#" class="btn btn-primary" id="$(producto.id)">AGREGAR</a>
            </div>
        `
        contenedorPrincipal.append(div);
        
    })
}

cargarProductos();

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll (".btn btn-primary")

    botonesAgregar.forEach (boton => {
        boton.addEventListener("click , agregarAlCarrito");
    })
}

const productosEnCarrito = [];

function agregarAlCarrito () {

    const idboton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id ===idboton)
    console.log (productosAgregados)
}



