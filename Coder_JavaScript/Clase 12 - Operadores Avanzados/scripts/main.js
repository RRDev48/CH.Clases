console.log("Hola Bienvenidos primero la Clase 11 🥴");

// Ejemplo 1: Operador ++

/* let numero = 0;

numero = numero + 10;

console.log(numero); // 10

numero++;
console.log(numero); // 11

numero += 5;

console.log(numero); // 16 */

// Operadores lógicos

// AND
/* const usuario = {
  nombre: "John Doe",
  edad: 14,
};
//                             14 >= 18 --> false
const registroIngreso = usuario.edad >= 18 && new Date();

console.log(registroIngreso); // FALSE

//                         20 >= 18 --> true
const registroIngresoCaso2 = 20 >= 18 && new Date();

console.log(registroIngresoCaso2); // Fecha actual */

// OR
// operador1 || operador2
/* console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Hola Mundo" || "Falsy"); // Hola Mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); // true
console.log(false || "Falsy"); // Falsy */

// Ejemplo de aplicación del caso OR para obtener valores
/* const usuario1 = {
  nombre: "John Doe",
  edad: 14,
};
const usuario2 = null;

console.log(usuario1 || "El usuario no existe");
// { nombre: 'John Doe', edad: 14 }

console.log(usuario2 || "El usuario no existe");
// El usuario no existe */

// Caso de ejemplo de un carrito de compras
/* let carrito;

console.log("--> Qué hay en la key carrito", {
  value: localStorage.getItem("carrito"),
});
let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
console.log("--> Qué resulta de parsear la key carrito", carritoLocalStorage);

//  carritoLocalStorage !== null  --> (null !== null)
if (carritoLocalStorage) {
  carrito = carritoLocalStorage;
} else {
  carrito = [];
}

console.log("--> En qué resulta nuestra variable carrito", carrito); */
/* 
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log("--> En qué resulta nuestra variable carrito", carrito); */

// Cargamos elementos a nuestro carrito para hacer una prueba más realista

const CARRITO_KEY = "carrito";

class Pedido {
  constructor(nombre, precioUnitario, cantidad) {
    this.nombre = nombre;
    this.precio = precioUnitario;
    this.cantidad = cantidad;
  }

  toString = () => {
    return this.nombre;
  };

  getSubtotal = () => {
    return this.precio * this.cantidad;
  };
}

// Definición de variables que representen pedidos en un carrito con objetos a partir de la definición de una clase (podremos usar métodos)
/* let unProducto1 = new Pedido(
  "Play Station 5",
  parseFloat("900000.34"),
  parseInt("1")
);
let unProducto2 = new Pedido(
  "Silla Ergonomica Gamer",
  parseFloat("14000000.56"),
  parseInt("1")
);

// Definimos el carrito y cargamos productos
let miCarrito = [];

miCarrito.push(unProducto1);
miCarrito.push(unProducto2);

console.table(miCarrito); */

// Cargar los productos a la local storage
//localStorage.setItem(CARRITO_KEY, JSON.stringify(miCarrito));

const CARRITO_RECUPERADO = JSON.parse(localStorage.getItem(CARRITO_KEY)) || [];

//console.table(CARRITO_RECUPERADO);

/* let carritoParseado = CARRITO_RECUPERADO.map((e) => {
  return new Pedido(e.nombre, e.precio, e.cantidad);
});

console.table(carritoParseado); */

// Definición de las mismas variables pero con objetos literales (sin definición de clase -- sin métodos)
/* let unProducto1 = {
  nombre: "Play Station 5",
  precio: parseFloat("900000.34"),
  cantidad: parseInt("1"),
};

let unProducto2 = {
  nombre: "Silla Ergonomica Gamer",
  precio: parseFloat("14000000.56"),
  cantidad: parseInt("1"),
}; */

// Operador Nullish Coalescing
// operador1 ?? operador2
/* console.log(0 ?? "Nullish"); // 0
console.log(40 ?? "Nullish"); // 40
console.log(null ?? "Nullish"); // Nullish
console.log(undefined ?? "Nullish"); // Nullish
console.log("Hola Mundo" ?? "Nullish"); // Hola Mundo
console.log("" ?? "Nullish"); // ""
console.log(NaN ?? "Nullish"); // NaN
console.log(true ?? "Nullish"); // true
console.log(false ?? "Nullish"); // false */

// Acceso condicional a un objeto
/* const usuario = null;

console.log(usuario.nombre || "El usuario no existe");
// Error: "No se pueden leer propiedades de NULL"

console.log(usuario?.nombre || "El usuario no existe");
// "El usuario no existe" */

// Misco caso pero con más propiedades anidadas
/* const usuario = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado",
    desarrolloWeb: "pendiente",
  },
};

console.log(usuario?.cursos?.coderhouse || "El usuario no está en el curso"); // "El usuario no está en el curso"

console.log(usuario?.cursos?.javascript || "El usuario no está en el curso"); // "aprobado"

console.log(usuario?.cursos?.desarrolloWeb || "El usuario no está en el curso"); // "pendiente" */

// Desestructuración
/* const usuario = {
  nombre: "John Doe",
  edad: 32,
  cursos: [{ nombre: "Javascript", estado: "cursando" }],
};

const { nombre, edad, cursos, apellidos } = usuario;
// let nombre = usuario.nombre;
// let edad = usuario.edad;

console.log(nombre); // "John Doe"
console.log(edad); // 32
console.log(cursos); // [{ nombre: "Javascript", estado: "cursando" }]
console.log(apellidos); // undefined */

// Desestructuración de propiedades anidadas
/* const usuario = {
  nombre: "John Doe",
  edad: 32,
  telefonos: {
    cel: 113334444,
    casa: null,
    trabajo: 113325555,
  },
};

const {
  nombre,
  telefonos: { trabajo },
} = usuario;

console.log(usuario.nombre); // "John Doe"
console.log(usuario.telefonos.trabajo); // 113325555

console.log(nombre); // "John Doe"
console.log(trabajo); // 113325555 */

// Alias
// esto es un objeto que me vino del BE
/* const item = {
  item_id: 432, // identificador único
  product_name: "Some product", // nombre delproducto
  price_per_unit: 5600, // precio unitario por unidad
};

const { item_id: id, product_name: nombre, price_per_unit: precio } = item;

console.log(id); // 432
console.log(nombre); // "Some product"
console.log(precio); // 5600 */
