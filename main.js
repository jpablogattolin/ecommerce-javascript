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
        titulo: "Detergente Magistral",
        precio: 100,
        cantidad: 50
    },
    {
        titulo: "Detergente ALA PLUS",
        precio: 80,
        cantidad: 40
    },
    {
        titulo: "Desdorante de Ambientes",
        precio: 90,
        cantidad: 70
    },
    {
        titulo: "Desodorante de Pisos",
        precio: 68,
        cantidad: 50
    },
    {
        titulo: "Cloro",
        precio: 105,
        cantidad: 100
        
    }
]



