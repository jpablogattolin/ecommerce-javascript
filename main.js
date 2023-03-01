// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "Detergente",
        titulo: "Detergente Magistral",
        imagen: "./img/deter-magistral.jpg",
        categoria: {
            nombre: "DETERGENTES",
            id: "detergentes"
        },
        precio: 350 
    },
    {
        id: "detergente Ala Plus",
        titulo: "Detergente ALA PLUS",
        imagen: "./img/det-alaplus.jpg",
        categoria: {
            nombre: "DETEGENTES",
            id: "detergentes"
        },
        precio: 300
    },
    {
        id: "desodorantes de Piso",
        titulo: "Desodorantes de Piso Varias Fragancias",
        imagen: "./img/desod-piso.jpg",
        categoria: {
            nombre: "Desodorantes",
            id: "desodorantes"
        },
        precio: 250
    },
    {
        id: "desodorantes de Ambientes",
        titulo: "Desodorantes de Ambientes Varias Fragancias",
        imagen: "./img/desod-amb.jpg",
        categoria: {
            nombre: "Desodorantes",
            id: "desodorantes"
        },
        precio: 290
    },
    {
        id: "Cloro",
        titulo: "Cloro Puro",
        imagen: "./img/cloro.jpg",
        categoria: {
            nombre: "Cloro",
            id: "cloro"
        },
        precio: 310
    },
    
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}







