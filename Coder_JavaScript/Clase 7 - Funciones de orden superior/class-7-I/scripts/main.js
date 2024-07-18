console.log("Hola Bienvenidos primero la clase 7 [🐶🐱🦁🐵]");

// Ejemplos de la classe 7
// Ejmplo 1: Abstracciòn, definiciòn de una funciòn mayorQue
/* const limiteInferiorStock = (limite) => {
  return (valorActual) => valorActual > limite;
};

const mayorQue = (n) => {
  return (m) => m > n;
};

const mayorQueDiez = mayorQue(10);

const limiteParaCarnes = limiteInferiorStock(100);

console.log(mayorQueDiez(12)); // true
// mayorQueDiez(12)
// mayorQue(10)
// (12) => 12 > 10
// true
console.log(mayorQueDiez(8)); // false
// mayorQueDiez(8)
// mayorQue(10)
// (8) => 8 > 10
// false

const novillo = {
  stockActual: 80,
};

console.log(limiteParaCarnes(novillo.stockActual)); */

// Ejemplo 2: Recibir y ejecutar funciones dentro de otras funciones
// entities --> array
// fn --> función
/* const porCadaElemento = (entites, fn) => {
  for (const entity of entites) {
    fn(entity);
  }
};

const toString = (unPaciente) => {
  console.log(unPaciente.apellidos + ", " + unPaciente.nombres);
};

porCadaElemento(pacientesMock,toString); */

// Ejemplo 3: Reemplazamos la definición de la función toString (función nombrada o con identidad), por una función anónima
// entities --> array
// fn --> función
/* const porCadaElemento = (entites) => {
  for (const entity of entites) {
    // Si lo hacemos así, perdemos la posibilidad de reutilizar la función porCadaElemento de manera general como lo veremos en las funciones de orden superiro
    (entity) => {
      console.log(unPaciente.apellidos + ", " + unPaciente.nombres);
    };
  }
};

porCadaElemento(pacientesMock); */

// Ejemplo 4: Uso del método forEach
/* pacientesMock.forEach((unPaciente) => {
  console.log(unPaciente.apellidos + ", " + unPaciente.nombres);
}); */

// Ejemplo 5: Uso del método find para HALLAR lA PRIMERA OCURRENCIA DE UN PACINETE (OBJETO)
/* const apellidos = prompt("Ingrese apellido buscado");
const unPaciente = pacientesMock.find((unPaciente) => {
  return (
    unPaciente.apellidos.trim().toLowerCase() === apellidos.trim().toLowerCase()
  );
});

if (unPaciente) {
  console.log("Paciente encontrado", unPaciente);
} else {
  console.log("Paciente  NO encontrado", unPaciente);
} */

// Ejemplo 6: Uso del método filter para obtener una lista de los apcientes que tienen una determinada obra social
/* const obraSocialSolicitada = prompt(
  "Ingrese el nombre de la obra social por el cual quiere filtrar primero sus pacientes"
);
const pacientesFiltrados = pacientesMock.filter((unPaciente) =>
  unPaciente.obraSocial
    .trim()
    .toLowerCase()
    .includes(obraSocialSolicitada.trim().toLowerCase())
);

if (pacientesFiltrados.length !== 0) {
  console.table(pacientesFiltrados);
} else {
  alert("NO hay pacientes con la obra social buscada");
} */

// Ejemplo 7: Uso del método some para determinar si un paciente cuyo apellido ingresa el usuario existe o no
/* const apellidos = prompt("Ingrese apellido buscado");
const isExist = pacientesMock.some((unPaciente) => {
  return (
    unPaciente.apellidos.trim().toLowerCase() === apellidos.trim().toLowerCase()
  );
});

if (isExist) {
  console.log("Paciente encontrado", isExist);
} else {
  console.log("Paciente  NO encontrado", isExist);
} */

// Ejemplo 8: Uso del método map para crear una lista con apellidos y nombres y obra social de cada paciente
/* const pacientesFiltrados = pacientesMock.map((unPaciente) => {
  //return unPaciente.apellidos + ", " + unPaciente.nombres;
  return {
    paciente: unPaciente.apellidos + ", " + unPaciente.nombres,
    obraSocial: unPaciente.obraSocial,
    saldoPendiente: createPseudoaleatorio()
  };
});

console.table(pacientesFiltrados); */

/* const pacientesFiltrados = pacientesMock.map((unPaciente) => {
  //return unPaciente.apellidos + ", " + unPaciente.nombres;
  return {
    ...unPaciente,
    apellidos: unPaciente.apellidos.toUpperCase(),
  };
});

console.table(pacientesFiltrados); */

// Ejemplo 9: Uso del método reduce para calcular el saldo deudor de los pacientes
/* const pacientesConSaldo = pacientesMock.map((unPaciente) => {
  //return unPaciente.apellidos + ", " + unPaciente.nombres;
  return {
    //spread
    ...unPaciente,
    saldo: createPseudoaleatorio(1000),
  };
});

console.table(pacientesConSaldo);

const saldoAdeudadoTotal = pacientesConSaldo.reduce(
  (acumulador, unPaciente) => acumulador + unPaciente.saldo,
  0
);

alert("El saldo total adeudado por los pacientes es " + saldoAdeudadoTotal); */

// Ejemplo 10: Uso del método Sort para ordenar el array de pacientes

// Aplicar orden en sentido descendente
/* pacientesMock.sort((primero, segundo) => {
  if (primero.apellidos > segundo.apellidos) {
    return 1;
  }
  if (primero.apellidos < segundo.apellidos) {
    return -1;
  }
  return 0;
});

console.table(pacientesMock); */

// Aplicar orden en sentido ascendente
/* pacientesMock.sort((segundo, primero) => {
  if (primero.apellidos > segundo.apellidos) {
    return 1;
  }
  if (primero.apellidos < segundo.apellidos) {
    return -1;
  }
  return 0;
});

console.table(pacientesMock); */

// Ejmplos de la clase 6
// Definición de las Clases
// Ejemplo 1: Declaración de un array de números
/* const numeros = [123, 45, 67, 345, 86, 45, 756];
// [0] --> primer elemento
// [1] --> segundo elemento
// [2] --> tercer elemento
// Ejemplo 2: Acceder primero sus elementos
console.log("--> Acceso primero un elemento", numeros[2]); */

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

// Ejemplo 6: Agregar elementos primero un array
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

// Ejemplo 7: Agregar elementos primero un array (función unshift)
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
//const pacientesLunes = ["Rita", "Pedro"];
//console.table(pacientesLunes);
//const pacientesMartes = ["Miguel", "Ana", "Vanesa"];
//console.table(pacientesMartes);
//let listaDefinitiva = pacientesLunes.concat(pacientesMartes);
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