console.log("Hola Bienvenidos a la clase 6 [🐶🐱🦁🐵]");

// Definición de las Clases
// Ejemplo 1: Declaración de un array de números
/* const numeros = [123, 45, 67, 345, 86, 45, 756];
// [0] --> primer elemento
// [1] --> segundo elemento
// [2] --> tercer elemento
// Ejemplo 2: Acceder a sus elementos
console.log("--> Acceso a un elemento", numeros[2]); */

// Ejemplo 3: Operaciones con arrays
/* const resultadoSuma = numeros[2] + numeros[4];
console.log("--> Resulado de la suma", resultadoSuma);

const nombres = ["Tony", "Hulk"];
console.log(nombres[0] + " - " + nombres[1]); */

// Ejemplo 4: Recorrer cada una de las posiciones de un array para ver sus elementos
/* const numeros = [123, 45, 67, 345, 86, 45, 756];
for (let index = 0; index < 7; index++) {
  console.log(
    "-- El elemento en la posición " +
      index +
      " contiene el valor: " +
      numeros[index]
  );
} */

// Ejemplo 5: Recorrer cada una de las posiciones de un array para ver sus elementos (usando propiedad length)
/* const numeros = [123, 45, 67, 345, 86, 45, 756];
console.log(
  "--> La cantidad de elementos ue hay dentro de nuestro array es " +
    numeros.length
);
for (let index = 0; index < numeros.length; index++) {
  console.log(
    "-- El elemento en la posición " +
      index +
      " contiene el valor: " +
      numeros[index]
  );
} */

// Ejemplo 6: Agregar elementos a un array
/* let numeros = [];

let respuesta = prompt("Quieres seguir cargando números");
while (respuesta.trim().toUpperCase() === "SI") {
  let unNumero = parseInt(prompt("Ingrese un númeo entero"));
  if (!isNaN(unNumero)) {
    numeros.push(unNumero);
  }
  respuesta = prompt("Quieres seguir cargando números");
}

console.log("--> Ahora imprimimos todos los números que cargaste <--");

for (let index = 0; index < numeros.length; index++) {
  console.log(
    "-- El elemento en la posición " +
      index +
      " contiene el valor: " +
      numeros[index]
  );
} */

// Ejemplo 7: Agregar elementos a un array (función unshift)
/* let numeros = [];

let respuesta = prompt("Quieres seguir cargando números");
while (respuesta.trim().toUpperCase() === "SI") {
  let unNumero = parseInt(prompt("Ingrese un númeo entero"));
  numeros.unshift(unNumero);
  respuesta = prompt("Quieres seguir cargando números");
}

console.log("--> Ahora imprimimos todos los números que cargaste <--");

for (let index = 0; index < numeros.length; index++) {
  console.log(
    "-- El elemento en la posición " +
      index +
      " contiene el valor: " +
      numeros[index]
  );
} */

// Ejemplo 8: Cómo eliminar elementos
/* const nombres = ["Luis", "Ana", "Julia", "Juan"];

nombres.pop();
console.log(nombres); // ["Luis", "Ana", "Julia"]

nombres.shift();
console.log(nombres); // ["Ana", "Julia"] */

// Ejemplo 9: Eliminar elementos de un array con (splice)
/* const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
console.log(nombres);
//nombres.splice(1, 2);
//console.log(nombres);// ['Rita', 'Ana', 'Vanesa']

nombres.splice(1, 1);
nombres.splice(2, 1);
console.log(nombres);// ["Rita", "Miguel", "Vanesa"] */

// Ejemplo 10: Generar un string con todos los elementos de un array
/* const operacionesPermitidas = ["+", "-", "*", "/"];
alert("Las opciones que tienes disponible para operar con nuestra calculadora, son " + operacionesPermitidas.join(", ")) */

// Ejemplo 11: Cómo podemos concatenar dos arrays diferentes
const pacientesLunes = ["Rita", "Pedro"];
//console.table(pacientesLunes);
const pacientesMartes = ["Miguel", "Ana", "Vanesa"];
//console.table(pacientesMartes);
let listaDefinitiva = pacientesLunes.concat(pacientesMartes);
// Después de esta línea, puede hacer con cualquiera de los tres arrays, lo que quieran
//console.table(listaDefinitiva);


// Ejemplo 12: Recuperar una lista de pacientes
/* const listaParcialPacientes = listaDefinitiva.slice(2,4);
console.table(listaParcialPacientes); */

// Ejemplo 13: Cómo saber si un elemento existe o no dentro de mi array
/* let nombre = prompt("¿Qué paciente quieres buscar?");
const posicion = listaDefinitiva.indexOf(nombre);
if (posicion !== -1) {
  alert("Encontraste el paciente buscado")
} else{
  alert("No encontramos este paciente");
} */

// Ejemplo 14: Invertir el orden de un array
/* listaDefinitiva.reverse();
console.table(listaDefinitiva); */