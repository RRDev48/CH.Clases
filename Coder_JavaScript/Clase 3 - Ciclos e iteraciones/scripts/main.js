console.log("Hola Bienvenidos a la clase 3 😏");

// Ejemplo 1: Construcción d eun ciclo repetitivo (FOR)
// desde --> indica a partir de que paso (iterasión) comenzamos a moveros (repetir)     1
// hasta --> me incicará dónde cortamos con la repetición                               10
// incremento (actualización) --> representa un número que indica la amplitud del paso  1

// Contrucción de una tabla de multiplicar
/* const numero = parseInt(
  prompt("¿La tabla de multiplicar de qué número quieres construir?")
);
for (let desde = 1; desde < 10; desde++) {
  console.log("--> " + numero + " * " + desde + " = " + numero * desde);
  // final del ciclo desde++ --> desde = desde + 1
} */

// Ejemplo 2: Construir ciclos ascendentes y descendetes de números
// Cantidad de pasos a dar 99-7 (hasta - desde)
/* let contador = 1;
for (let pasos = 3; pasos <= 9; pasos++) {
  console.log("--> " + contador + "= " + pasos);
  contador = contador + 1;
} */

// Ejemplo 3: Ejemplo d eun turnero para 5 pacientes
/* const LIMITE = 5; // Cantidad de pacientes que atiene un médico en su consultorio
for (let turno = 1; turno <= LIMITE; turno++) {
  // En cada repetición solicitamos un nombre.
  let paciente = prompt("Ingresar nombre del paciente");
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno  N° " + turno + " Paciente: " + paciente);
} */

// Ejemplo 4: Ejemplo de un turnero para 20 pacientes, pemritimos al personal administrativo CANCELAR la carga con una palabra clave
/* const LIMITE = 20; // Cantidad de pacientes que atiene un médico en su consultorio
let paciente;
for (let turno = 1; turno <= LIMITE; turno++) {
  // En cada repetición solicitamos un nombre.
  paciente = prompt("Ingresar nombre del paciente");
  if (paciente.trim().toUpperCase() == "FIN") {
    break; // hará que se corte el ciclo y avance a la línea de código número 47
  }
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno  N° " + turno + " Paciente: " + paciente);
} */
// avanza hasta acá.

// Ejemplo 5: Ejemplo de un turnero para 5 pacientes, donde vamos a APARTAR (dejar espacio disponible) para un turno específico, por ejemplo 3.
/* const LIMITE = 5;
for (let turno = 1; turno <= LIMITE; turno++) {
  if (turno == 3) {
    // El turno número 3 lo tenemos apartado (NO LO CARGAMOS)
    continue;
  }
  // En cada repetición solicitamos un nombre.
  let paciente = prompt("Ingresar nombre del paciente");
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno  N° " + turno + " Paciente: " + paciente);
} */

// Ejemplo 6: Construcción de un ciclo WHILE.
// condición --> es un valor booleano (true, false)
/* let paciente = prompt("Ingresar nombre del paciente");
let turno = 0;
while (paciente.trim().toUpperCase() !== "FIN" || paciente.trim() !== "") {
  // dónde comienza el cuerpo

  // Informamos el turno asignado usando el número de repetición (i).
  turno++;
  console.log(" Turno  N° " + turno + " Paciente: " + paciente);
  paciente = prompt("Ingresar nombre del paciente");

  // dónde termina el cuerpo
} */
// Avanza a la siguiente línea de código (continua con el flujo normal)

// Ejemplo 7: convertir un ciclo FOR en un cilo WHILE
/* const numero = parseInt(
  prompt("¿La tabla de multiplicar de qué número quieres construir?")
);
let desde = 1;
while (desde < 11) {// 1 < 11 --> true
  console.log("--> " + numero + " * " + desde + " = " + numero * desde);
  desde++;
} */

// Ejemplo 8: Uso del DO-WHILE con el ejemplo de la carga de turnos de pacientes de manera dinámica (CORREGIDO)
/* let paciente;
let turno = 1;
do {
  paciente = prompt("Ingresar nombre del paciente");
  console.log(" Turno  N° " + turno + " Paciente: " + paciente);
  turno++;
} while (paciente !== null && paciente.trim().toUpperCase() !== "FIN" && paciente !== ""); */

// Ejemplo 9; Estructura básica del DO-WHILE
/* let repetir = false;
do {
  console.log("¡Solo una vez!");
} while (repetir);

// Ejemplo 10: Pedir númros y multiplicarlos por consola
let numero = 0;
do {
  //Repetimos con do...while mientras el usuario ingresa un n°
  numero = prompt("Ingresar Número");
  console.log(numero);
  //Si el parseo no resulta un número se interrumpe el bucle.
} while (parseInt(numero)); */

// Ejemplo 11: Estructura básica de un SWITCH
/**
 * 
 * suponer que contamos con una UI dodne hay 3 opciones en un menú de usuario
 * 1) --> Registrar paciente
 * 2) --> Listar todos los pacientes
 * 3) --> Eliminar un paciente
 * default) --> Suspender ejecución
 * 
 */
/* let numero = prompt("Ingrese un número");
switch (numero) {
  case "1":
    // acá adentro
    console.log("--> Ingresaste la opción número 1");
    break;
  case "2":
    console.log("--> Ingresaste la opción número 2");
    break;
  case "3":
    console.log("--> Ingresaste la opción número 3");
    break;
  default: // es el ELSE del IF (si está ejecuta algo, y sino está, no hace nada)
    console.log(
      "--> El número ingresado (" + numero + ") no es una opción válida."
    );
    break;
} */
// Continua con la ejecución normal del código fuente
