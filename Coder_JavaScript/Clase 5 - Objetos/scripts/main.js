console.log("Hola Bienvenidos a la clase 5 😎");

// Breve repaso de la clase 4:
/* // variable GLOBAL
let nombre = prompt("¿Quién eres?");//<-- Chaman
let nombreUsuario = "Chaman";
// Definición de ALGO
const saludar = (nombreUsuario) => {
  // Aquí dentro es un ámbito LOCAL
  // name : "Chaman"
  // alert("Hola " + "Chaman" + ", bienvenido a la clase.");
  alert("Hola " + nombreUsuario + ", bienvenido a la clase.");
}

// saludar("Chaman");
saludar(nombre);

console.log("--> El valor de la variable name" + nombreUsuario); */

// Ejemplo 1: Creación de un objeto líteral que represente a un paciente
// N° afiliado
// Paciente (Apellidos y Nombres)
// Fecha	turno
// Matricula profesional del Profesional (médico, especialista, etc)
/* let paciente = {
  // vamos a listar las caracteristicas del paciente
  // Propiedad : valor de la propiedad
  numeroAfiliado: 0,
  apellidos: "",
  dni: "",
  nombres: "",
  fecha: "",
  matriculaProfesional: 0,
}; */

// como sabemos cuando usar la coma y cuando el + en el console.log?
//console.log("--> Los datos proporcionados para el paciente son", paciente);

// console.log("--> Los datos proporcionados para el paciente son" + paciente);

// Ejemplo 2: Cómo acceder a las propiedades de un objeto con el punto.
//alert("El paciente " + paciente.apellidos + ", " + paciente.nombres  + " se registró correctamente!");

// Ejemplo 3: Cómo acceder a las propiedades de un objeto con los corchetes.
//alert("El paciente " + paciente["apellidos"] + ", " + paciente["nombres"]  + " se registró correctamente!");

// Ejemplo 4: Asignar valores a sus propiedades
/* paciente.apellidos = prompt("Ingrese el apellido del paciente");
paciente.nombres = prompt("Ingrese el nombre del paciente");
paciente.dni = prompt("Ingrese el DNI del paciente");
paciente.numeroAfiliado = prompt("Ingrese el número de afiliado del paciente (si lo tiene)");
paciente.fecha = prompt("Ingrese el fecha del turno del paciente");
paciente.matriculaProfesional = prompt("Ingrese el matricula profesional del médico");

alert("El paciente " + paciente.apellidos + ", " + paciente.nombres  + " se registró correctamente!");
console.log(paciente);
console.table(paciente); */

// Ejemplo 5: Creación (Definición) de función constructora
/* function Paciente(surName, name, requiredDate) {
  this.apellidos = surName;
  this.nombres = name;
  this.fecha = requiredDate;
}

const unPaciente = new Paciente("Fernández","Julieta","12/09/2023 10:00hs");
console.log(unPaciente);
let apellidos = prompt("Ingrese el apellido del paciente");
let nombres = prompt("Ingrese el nombre del paciente");
let fecha = prompt("Ingrese el fecha del turno del paciente");
const unPacienteDos = new Paciente(apellidos, nombres, fecha);
console.table(unPacienteDos); */

// Ejemplo 8: Definición de métodos para objetos
/* function Paciente(surName, name, requiredDate) {
  this.apellidos = surName;
  this.nombres = name;
  this.fecha = requiredDate;
  this.obtenerNombreCompleto = () => {return this.apellidos + ", " + this.nombres};
  this.saludar = (nombre) => { return "Hola " + nombre + ", yo me llamo " + this.obtenerNombreCompleto()};
}

const unPaciente = new Paciente("Fernández", "Julieta", "12/09/2023 10:00hs");
console.log(unPaciente);
console.log("--> Los datos proporcionados para el paciente son" + unPaciente.obtenerNombreCompleto());
console.log("--> Los datos proporcionados para el paciente son" + unPaciente.saludar("Saúl")); */

// Ejemplo 9: uso de operador IN y estructura de control FOR-IN
/* function Paciente(surName, name, requiredDate) {
  this.apellidos = surName;
  this.nombres = name;
  this.fecha = requiredDate;
  this.obtenerNombreCompleto = () => {return this.apellidos + ", " + this.nombres};
  this.saludar = (nombre) => { return "Hola " + nombre + ", yo me llamo " + this.obtenerNombreCompleto()};
}

const unPaciente = new Paciente("Fernández", "Julieta", "12/09/2023 10:00hs");
//console.log("¿Existe la propiedad apellidos? " + ("apellidos" in unPaciente));
//console.log("¿Existe la propiedad numeroAfiliado? " + ("numeroAfiliado" in unPaciente));

for (const propiedad in unPaciente) {
  console.log("La propiedad [" + propiedad + "] contiene como valor ", unPaciente[propiedad]);
} */

// Ejemplo 10: Creación de objetos con Clases
/* class Paciente {
  // Definción del constructor usado con la palabra new
  constructor(surName, name, requiredDate) {
    this.apellidos = surName;
    this.nombres = name;
    this.fecha = requiredDate;
    this.fechaRegistro = new Date();
  }

  obtenerNombreCompleto = () => {
    return this.apellidos + ", " + this.nombres;
  };

  saludar = (nombre) => {
    return "Hola " + nombre + ", yo me llamo " + this.obtenerNombreCompleto();
  };
}

const unPaciente = new Paciente("Fernández", "Julieta", "12/09/2023 10:00hs");
console.table(unPaciente);
console.log(
  "--> Los datos proporcionados para el paciente son " +
    unPaciente.obtenerNombreCompleto()
); */