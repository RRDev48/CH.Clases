console.log("Hola Bienvenidos primero la Clase 8 🤞");

// Ejemplos de la Clase 8
// Ejemplo 1: Uso de constantes definidas para el objeto Math (propiedades)
//console.log(Math.PI);// Nos va a mostrar aproximadamente 3.14...

// Ejemplo 2: Uso de métodos propios del objeto Math. Estos son algunos de los casos más comunes

// Métodos mínimo y máximo para determinar cual es el mínimo valor numérico y máximo respectivamente, de entre una secuencia (valores separados por coma)
/* console.log(Math.min(500, 33, 22, 14, 9));// Nos va a mostrar 9

console.log(Math.max(500, 33, 22, 14, 9));// Nos va a mostrar 500 */

/* console.log(Math.min(500, 33, -Infinity, 22, 14, 9)); // Nos va a mostrar -Infinity

console.log(Math.max(500, 33, Infinity, 22, 14, 9)); // Nos va a mostrar Infinity */

// Ejemplo 3: Métodos de redondeo de números
/* 
// Redondea hacia arriba (próximo numero entero)
console.log(Math.ceil(Math.PI));// Nos va a mostrar 4

// Redondea hacia abajo (solamente el número entero descartando los decimales)
console.log(Math.floor(Math.PI))// Nos va a mostrar 3

// Redondea siempre dependiendo de los decimales, hacia arriba o hacia abajo
console.log(Math.round(Math.PI))// Nos va a mostrar 3 

console.log(Math.round(3.49))// Nos va a mostrar 3

console.log(Math.round(3.50))// Nos va a mostrar 4 */

// Ejemplo 4: Método para calcular la raíz cuadrada de un número NATURAL (enteros positivos)
/* console.log(Math.sqrt(9));// Nos va a mostrar 3 

console.log(Math.sqrt(2));// Nos va a mostrar 1.41...

console.log(Math.sqrt(-2)); Nos va a mostrar NaN porque no es un número NATURAL*/

// ejemplo 5: Método para generar núemros pseudo-aleatorios comprendidos entre el 0 y el 1 [0,1) (sin incluir al 1 - es decir llegará hasta 0.99')
/* console.log(Math.random());

// generar 50 números pseudo-aleatorios comprendidos entre el [0,1)
for (let index = 0; index < 50; index++) {
  console.log(Math.random() * 30 + 20);
}
*/

/* console.log(Math.random() * 10);// Devolverá un número pseudo-aleatorio comprendido entre el [0,10) */

// generar 50 números pseudo-aleatorios comprendidos entre el [20,50)
/* for (let index = 0; index < 50; index++) {
  console.log(Math.random() * 30 + 20);
} */

// Explicación del algoritmo anterior
// Quiero una secuencia entre el 20 y el 50 [20,50) --> 30 es la diferencia entre los límites (y es lo que usaré para multiplicar a random)
/* console.log(Math.random() * 50);// [0 ,50)

console.log(Math.random() * 30 + 20);// [20 - 70] --> [20,50) --> (calculo del rango = limite superior - límite inferior = 50 - 20 --> diferencia de 30)]

console.log(Math.random() * 10 + 10);// [10 - 20] --> [10,20) --> (calculo del rango = limite superior - límite inferior = 20 - 10 --> diferencia de 10)] */

// Ejemplo 6: Uso de fechas
// Obtener la fecha actual del sistema (el de la computadora que jecutará el código javascript)
/* const HOY = new Date();
console.log(HOY); */

// Forma de crear una fecha a partir de sus partes (Año, Mes, Día, Hora, Minuto, Segundo)
// Recordar que en este formato de carga los meses se expresa del (0 - enero) al (11 - diciembre).
//console.log(new Date(2023, 8, 21, 20, 30));

// Suponer que queremos saber cómo se vería el objeto de fecha que represente a la noche anterior a navidad (Es casi Navidad)
// Navidad es el día 25, nochebuena es el 24, casi navidad son los minutos previos al día 25.
// Al mes diciembre (12 para nosotros) le restamos -1 porque se comienzan a contar desde el 0.
//console.log(new Date(2023, 11, 24, 23, 59, 59));

// Suponer que queremos crear fecha a partir de un formato ISOString
// Para extender visitar https://en.wikipedia.org/wiki/ISO_8601 y conocer las formas
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
//console.log(new Date("2023-12-25"));

// Ejemplo 7: Conocer información parcial de una fecha, en este caso el año, el mes (representado en el formato [0-11]) y el día de la semana (representado en la forma [1-7])
/* console.log({
  anio: HOY.getFullYear(),
  mes: HOY.getMonth() + 1,
  diasemana: HOY.getDay(),
});

// Otra información que podemos obtener de una fecha, en formato string.
console.log(HOY.toDateString()); // Fri Dec 17 2021
console.log(HOY.toLocaleString()); // 17/12/2021 00:00:00
console.log(HOY.toLocaleDateString()); // 17/12/2021
console.log(HOY.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina) */

// Cómo calcular los días que faltan hasta NAVIDAD

/* const NAVIDAD = new Date(2024, 11, 25, 0, 0, 0);

const milisegundosPorDia = 1000 * 60 * 60 * 24;// Equivalente a 86400000

const DIFERENCIA_HASTA_NAVIDAD = NAVIDAD - HOY;
console.log("Cuántos días faltan para la Navidad desde hoy " + DIFERENCIA_HASTA_NAVIDAD/milisegundosPorDia + " días."); */

// Calcular la cantidad de días que hay hasta tú próximo cumpleaños
/* const FECHA_DE_PROXIMO_CUMPLEANIOS = new Date(2024, 4, 27, 0, 0, 0);

const milisegundosPorDia = 1000 * 60 * 60 * 24;// Equivalente a 86400000

const DIFERENCIA_HASTA_TU_PROXIMO_CUMPLEANIOS = NAVIDAD - HOY;
console.log("Cuántos días faltan para tú próximo cumpleaños desde hoy " + DIFERENCIA_HASTA_TU_PROXIMO_CUMPLEANIOS/milisegundosPorDia + " días."); */

// Ejemplo 8: Implementar una función para generar fechas de manera pseudo-aleatoria
// Generar 10 fechas
/* for (let index = 0; index < 10; index++) {
  console.log(generarFechaAleatoria(1950,2000));
} */

// Ejemplo 9: Solicitar al usuario una fecha y calcular la cantidad de años que hay de diferencia con respecto a la fecha actual del sistema
// Tú DEBES implementar los controles necesarios, que los valores sean rangos válidos, que la fecha no sea superior a la actual, etc.
/* const YEAR = prompt("Ingrese el año");
const MONTH = prompt(
  "Ingrese el mes, en formato de 1 a 12. Donde 1 es enero y 12 es diciembre"
);
const DAY = prompt("Ingrese el día del mes");

const FECHA_INGRESADA = new Date(parseInt(YEAR), parseInt(MONTH) - 1, parseInt(DAY));

const DIFERENCIA_EN_ANIOS = calcularDiferenciaEnAnios(FECHA_INGRESADA);
// La función usada dentro de esta permite calcualr otros valores, explóralo.
alert(
  "La diferencia en años entre la fecha ingresada y la fecha actual es " +
  DIFERENCIA_EN_ANIOS
); */

// NOTA: en el after class vamos a implementar todos estos conceptos vistos en las últimas dos clases, para añadir a las colecciones de elementos, valores sobre los cuales operar.

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
