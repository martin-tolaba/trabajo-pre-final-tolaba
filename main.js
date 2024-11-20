let titulo = document.getElementById ("Martin Deportivos s.r.l")
 
console.log(titulo)


//metodo de acceso al dom

//getElementById()
const elementosClases = document.getElementsByClassName ("items")
for (let item of elementosClases) {
    item.style.color = "blue";

}
console.log(elementosClases)

const nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = "ENVIOS GRATIS A TODO EL PAIS A PARTIR DE 100000 PESOS"
document.body.appendChild(nuevoParrafo)



const parrafos =document.getElementsByTagName("p");

for (let item of parrafos) {
  item.style.color = "green"
}
console.log(parrafos)

const boton = document.getElementById("botoncito")

boton.addEventListener('click',() =>{alert("añadiste al carrito")})

console.log(boton)

let container = document.getElementById("contenedor")

let nombre = "martin deportivo"
container.innerHTML = '<h1>VENTA DE ZAPATILLAS ${nombre} </h1>'  

console.log(container)

const descripcion = document.getElementById("descripcion")

const inputDescripcion = document.getElementById("inputDescripcion")

const botonAgregar = document.getElementById("agregarDescripcion")

console.log(descripcion)
console.log(inputDescripcion)
console.log(botonAgregar)


function agregarTarea() {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = inputDescripcion.value;
    nuevaTarea.addEventListener('click', () => nuevaTarea.style.textDecoration = 'line-through')
    descripcion.appendChild(nuevaTarea)
    inputDescripcion.value="";
}

botonAgregar.addEventListener('click', agregarTarea)

const formulario = document.getElementById("formulario")

formulario.addEventListener('submit',(evento) =>{
    evento.preventDefault();
    const nombre =document.getElementById("nombre").value
    const email = document.getElementById("email").value

    alert('gracias, ${nombre}. tu formulario fue enviado con el mail ${email}')

    document.getElementById('nombre').value = ''
    document.getElementById('email').value = ''
})

const productos = [
    {id: 1, nombre: "adidas", precio: 125000, descripcion: "negro", stock: 8 },
    {id: 2, nombre: "fila", precio: 155000, descripcion: "rojo", stock: 7 },
    {id: 3, nombre: "nike", precio: 155000, descripcion: "azul", stock: 8 },
    {id: 4, nombre: "reebok", precio: 120000, descripcion: "gris", stock: 12 },
];

const listaProductos = document.getElementById('listaProductos')
const carro = document.getElementById ('carro')
const total = document.getElementById('total')

console.log(listaProductos)
console.log(carro)
console.log(total)

let totalcompra = 0;

productos.forEach((productos) =>{
    const item = document.createElement('div');
    item.classList.add('producto')

    item.innerHTML= //como se hace esa comilla que haces vos? donde explican eso??
    <h3> $ {productos.nombre} </h3>
    <p>Precio: $${productos.precio}</p>
    <button class= "agregar-carrito">Agregar al carrito</button>

    const botonAgregar = item.querySelector(".agregar-carrito")
    botonAgregar.addEventListener("click", () => agregarCarrito(productos))
    
listaProductos.appendChild(item)

});




function agregarCarrito(productos) {

const itemcarrito = document.createElement("li")
itemcarrito.textContent = ${productos.nombre} y ${productos.precio}
carrito.appendChild(itemcarrito)

totalcompra += productos.precio
text.textContent= total: $${totalcompra}


}
/*

const url = "www.google.com"

const zapatillas6 = ["adidas","fila", "nike", "reebok"];
const arraynumero1 = ["37","39","41","36"];


console.log(zapatillas6)
console.log(arraynumero1)/*




console.log(nombre)
console.log(numero)
console.log(apellido)
console.log(url)/*

let condicion = true

if(condicion){

alert ("cumple la condición")
}
let edad = 17;

if(edad >= 17){

    console.log("eres mayor de edad")
}

let disponiblestock = 15;
let pedidos = 15;

if(pedidos <= disponiblestock){
    console.log("puedes comprar")
}else {
    console.log ("no hay ese en stock")
}

let compra = 300000;

if(compra >= 400000){
    console.log("tiene un 10% de descuento")

 }else if (compra >= 1000000) {
    console.log("tiene un 22% de descuento")
 }else {
    console.log("no tienes beneficios")
 }
let i = 2;

while (i < 5){
    console.log(i)
    i++;
    break;
}
alert("segui sumando")


  function solicitarNombre(){

   let nombreIngresado = prompt("ingrese su nombre")
  alert("el nomrbre ingresado es" + nombreIngresado)  
 }
solicitarNombre();


// me salta error
let resultado5= 0  
function sumar(Num1,Num2,Num3,Num4) {

    resultado5 = (Num1 + Num2) {return Num1um1 + Num2;}
    
    console.log(resultado5)
}
sumar(2,8)
sumar(2,2)
//por que esto no funciona???

document.getElementById("añadir al carro").addEventListener ("click", () => 
    {alert("sumaste a tu carrito")})
//por que esto no funciona???


switch (zapatillas) {
    case "nike":
        console.log("es una nike");
        break;
    case "adidas":
        console.log("es una adidas");
        break;
    case "reebok":
        console.log("es una reebok");
        break;
    case "fila":
        console.log("es una fila");
        break;
    default:
        console.log ("no trabajamos con esa marca por el momento");

    }

const iva = x => x * 0.21
let precionike = 500000
let descuento = 50000

let nuevoprecio = resta(
    suma(precionike, iva(precionike)), descuento
)
console.log(nuevoprecio)

const adidas = {
    numero: "37",
    color:"negro",
    precio: 125000,
}
console.log(adidas)

const fila = {
    numero: "39",
    color: "rojo",
    precio: 155000,
}
console.log(fila)


const nike = {
    numero: "41",
    color:"azul",
    precio: 155000,
}
console.log(nike)

const reebok = {
    numero: "36",
    color:"gris",
    precio: 120000,
}
console.log(reebok)
 

class zapatillas {
    marca(marca,numero,color,precio){
        this.marca = marca;
        this.numero = numero;
        this.color = color;
        this.precio = precio;
    
    }
}
let pregunta = confirm(desea agregar algun datos más)
while (pregunta) {
const zapatillas1 = new zapatillas ("adidas","37","negro","125000")
const zapatillas2 = new zapatillas ("fila","39","rojo", "155000")
const zapatillas3 = new zapatillas ("nike", "41", "azul", "155000")
const zapatillas4 = new zapatillas ("reebok","36", "gris", "120000")
const marca = prompt (decime que marca buscas)
const provincia = prompt (provincia para corroborar el costo del envio)
const descripcion = prompt (decime que talles y color buscas? te responderemos a la brevedad)


const zapatillas = new pedidozapatillas(marca,provincia,descripcion)
pedidozapatillas.push(zapatillas)

localStorage.setItem("pedidozapatillas",  JSON.stringify(pedidozapatillas))

    alert("zapatillas agregada al carrito")

    pregunta = confirm("desea agregar otra marca?")

}
const lista2 = JSON.parse(localStorage.getItem("pedidozapatillas"))
console.log(pedidozapatillas)
console.log(zapatillas1)
console.log(zapatillas2)
console.log(zapatillas3)
console.log(zapatillas4)
console.log(marca)
console.log(provincia)
console.log(descripcion)



/*const nombre =localStorage.setItem ("nombreUsuario", "martin")
const edad = localStorage.setItem ("edadUsuario", 33) */

/*const nombreUsuario = localStorage.getItem ("nombreUsurio")
console.log(nombreUsuario)



const numeroDisponibles = adidas.find((numero) => numero >= 5)
const numeroDisponibles = fila.find((numero) => numero >= 5)
const numeroDisponibles = nike.find((numero) => numero >= 5)
const numeroDisponibles = reebok.find((numero) => numero >= 5)


console.log(numeroDisponibles)

const productos = [
    {id: 1, nombre: "adidas", precio: 125000, descripcion: "negro", stock: 8 },
    {id: 2, nombre: "fila", precio: 155000, descripcion: "rojo", stock: 7 },
    {id: 3, nombre: "nike", precio: 155000, descripcion: "azul", stock: 8 },
    {id: 4, nombre: "reebok", precio: 120000, descripcion: "gris", stock: 12 },
];

const precioYtalle = productos.map(producto => {
    return {precio: producto.precio , talle: producto.talle}
})

console.log(precioYtalle)

const carrito = [
    {id: 1, nombre: "adidas", precio: 125000, cantidad: 1 },
    {id: 2, nombre: "fila", precio: 155000, cantidad: 2 },
    {id: 3, nombre: "nike", precio: 155000, cantidad: 1 },
    {id: 4, nombre: "reebok", precio: 120000, cantidad: 3 },

];
const total = carrito.reduce((sumar,producto) => sumar + producto.precio, 0);
 
console.log("total carrito : $${toltal}")

const preciosDesordenados = [125000, 155000, 155000, 120000]

preciosDesordenados.sort(function(a,b,c,d){
    return a - b
});

console.log(preciosDesordenados)

carrito.forEach(function(producto){
    console.log(producto.nombre)
})

const precioTotales = carrito.map(function(producto){
    return.precio * producto.cantidad
})

console.log(precioTotales)

const precios2 = [125000, 155000, 155000, 120000]

const montoEfectivo = precios2.filter(function(precio){
    return producto.precio2 >= "100000"
})

console.log(precios2)

//cual corresponde este o el otro del guion 222
/*const precioFinal = carrito.reduce(function(acumulador,producto){
    return acumulador + producto.precio * producto.precioFinal
},0)*/

/*console.log("precio total del carrito es igual a $${precioFinal}") */




