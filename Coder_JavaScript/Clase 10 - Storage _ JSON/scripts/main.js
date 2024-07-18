console.log("Hola Bienvenidos primero la Clase 11 🥴");

const unObjeto = {
  // key          value
  nombre: "Nombre de l apersona",
};

// Ejemplo 1: ¿Qué es el storage?
/* localStorage.setItem("saludo", "Hola Mundo");
localStorage.setItem("isLogueado", true);
localStorage.setItem("edad", 24); */

// Ejemplo 2: Cómo crear y persistir información en el local storage (igual para el session storage)
/* const nombreUsuario = prompt("¿Cuál es tu nombre?");
localStorage.setItem("nombreUsuario", nombreUsuario); */

// Ejemplo 3: Cómo recuperar información del local storage (igual para el session storage)
// ¿Cómo se ven los datos sin conversión?
/* const saludo = localStorage.getItem("saludo");
const isLogueado = localStorage.getItem("isLogueado");
const edad = localStorage.getItem("edad");
const nombreUsuario = localStorage.getItem("nombreUsuario"); */

// Ejemplo 4: Casteo de la información. Cómo evaluar la información almacenada
// Conversión de valores (parseo) de datos recuperados del storage (igual para el session storage)
/* const saludo = localStorage.getItem("saludo");
const isLogueado = localStorage.getItem("isLogueado") == "true";
const edad = parseInt(localStorage.getItem("edad"));
const nombreUsuario = localStorage.getItem("nombreUsuario");

console.log({
  saludo,
  isLogueado,
  edad,
  nombreUsuario,
});


if (isLogueado === true) {// a un booleano
  alert("El usuario inicio su sesión");
}

if (edad === 24) { // a un número
  alert("La edad del usuario es 24");
} */

// Ejemplo 5: Cómo crear y persistir información en el session storage
//const nombreUsuario = prompt("¿Cuál es tu nombre esto lo vamos a guardar en la session?");
//sessionStorage.setItem("nombreUsuarioInSession", nombreUsuario);

// Ejemplo 6: Cómo recuperar información del session storage
/* const nombreUsuario = sessionStorage.getItem("nombreUsuarioInSession"); */

// Ejemplo 7: Almacenar objetos
/* const UNA_PERSONA = {
  name: "Julian",
  surname: "Serrano",
  age: 28,
};

// ¿Por qué persiste [object Object]?
console.log(UNA_PERSONA.toString());

localStorage.setItem("datosPersona", UNA_PERSONA);

// ¿Por qué persiste una cadena de texto con los items concatenados con una ','?
const NAMES = ["Pepe Grillo", "Blancanieves", "Pedro Picapiedra"];
localStorage.setItem("arrayDeNombres", NAMES);
 */

// Ejemplo 8: Recuperar una lista "MANUALMENTE" (es un array de datos SIMPLE) --> Faltan detalles para recuperarlos correctamente (avanzaremos con la clase)
/* const LISTA = localStorage.getItem("datosPersona").split(",");
console.table(LISTA); */

// Ejemplo 9: Recorrer por la información almacenda (local como para session):
//Ciclo para recorrer las claves almacenadas en el objeto localStorage
/* for (let i = 0; i < localStorage.length; i++) {
  // con el método key podems conocer el nombre de la key que hay en una posición determinada
  let clave = localStorage.key(i);
  console.log("Clave: " + clave);
  console.log("Valor: " + localStorage.getItem(clave));
} */

// Ejemplo 10: Cómo eliminar valores de nuestra storage (local y session) --> Por ejemplo en un log out
/* localStorage.removeItem("datosPersona"); */

// Ejemplo 11: Limpiar todo el storage completo (local y session) --> Por ejemplo en un log out o en un vaciado de un carrito de compra
/* localStorage.clear(); */

// Ejemplo 12: de como acceder a información mediante el . como si fuera la propiedad de un objeto (igual para el session storage)
/* localStorage.setItem("cantidadDeProductosEnCarrito", 36);
alert(localStorage.cantidadDeProductosEnCarrito); */

// Ejemplo 13: Uso de JSON
/* const PRODUCTO = { id: 2, nombre: "Arroz" };
// Para almacenar la información debe estar en string
// Paara ello usmos el método stringify(object) que recibe un objeto y devuleve string
const enJSON = JSON.stringify(PRODUCTO);

console.log({ enJSON }); // {"id":2,"nombre":"Arroz"}
console.log(typeof PRODUCTO); // object
console.log(typeof enJSON); // string

localStorage.setItem("producto", enJSON);
// Se guarda {"id":2,"nombre":"Arroz"} */

// Ejemplo 14: Cómo recuperar objetos del storage
/* const enJSON = '{"id":2,"nombre":"Arroz"}';
// Conversión de una cadena string en formato JSON en un objeto con parse(string) y esto devuelve un objeto
const PRODUCTO = JSON.parse(enJSON);

console.log(typeof enJSON); // string
console.log(typeof PRODUCTO); // object
console.log(PRODUCTO.nombre); // Arroz */

// Ejemplo 15: Recuperar información del storage y convertirla en un objeto "utilizable"
// Los objetos que son convertidos a JSON no tienen más que ATRIBUTOS, dicho de otra manera, no poseen definición de tipos ni métodos
/* const EN_FORMATO_JSON = localStorage.getItem("producto");
console.log({EN_FORMATO_JSON});
const PRODUCTO_RECUPERADO = JSON.parse(EN_FORMATO_JSON);
console.log(PRODUCTO_RECUPERADO); // 2 */

// Ejemplo 16: Aplicar JSON en colecciones de datos (array)
/* const PRODUCTOS = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];
console.table(PRODUCTOS);

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Almacenar producto por producto
for (const producto of PRODUCTOS) {
  guardarLocal(producto.id, JSON.stringify(producto));
}

// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(PRODUCTOS)); */

// eJEMPLO 17: rECUPERAR OBJETOS ALMACENADOS (array)
/* let LISTA_DE_PRODUCTOS_RECUPERADOS = JSON.parse(
  localStorage.getItem("listaProductos")
);

LISTA_DE_PRODUCTOS_RECUPERADOS.forEach((unProducto) => {
  // console.log("Nombre del producto recuperado: " + unProducto.producto);
  console.log(unProducto);
}); */
