// Ejemplo de carga manual y visualización
/* let pacientes = [];

// Carga manual
let respuesta = prompt("Quieres seguir cargando más pacientes");
while (respuesta.trim().toUpperCase() === "SI") {
  let numeroDocumento = prompt("Número de documento");
  let apellidos = prompt("Apellidos");
  let nombres = prompt("Nombres");
  let obraSocial = prompt("Obra Social");
  let numeroAfiliado = prompt("Número de Afiliado");
  let correoElectronico = prompt("Correo electrónico");

  let unPaciente = new Paciente(
    numeroDocumento,
    apellidos,
    nombres,
    obraSocial,
    numeroAfiliado,
    correoElectronico
  );
  pacientes.push(unPaciente);
  respuesta = prompt("Quieres seguir cargando más pacientes");
}

// Visualización de todos los pacientes cargdos
for (const unPaciente of pacientes) {
    console.log(unPaciente);
} */

// Ejrmplo de como buscar un Paciente (elemento) dentro de un array de Pacientes
/* let nombre = prompt("Cuál es el nombre del Paciente");

// Te dejo como desafío las sigueintes actividades
// Detener el ciclo for-of cunado encuentres un paciente con el parámetro buscado
// Usar una variable global que definas en este archivo para mantener guardado los datos de un paciente encontrado
// Cambiar el uso de un for-of por un while que finalice su ciclo mediante la variable existe y no un break o un continue

let existe = false;
for (const unPaciente of pacientesMock) {
    // CUIDADO: Los objetos de este array son literales, no son instancias de una clase, prueba con usar el método toString() a ver que pasa
  if (unPaciente.nombres.trim().toUpperCase() === nombre.trim().toUpperCase()) {
    existe = true;
  }
}

// Aquí con el uso de la variable global (si la definiste) mostrar más datos del paciente en pantalla.

if (existe) {
  alert("Encontraste al paciente!");
} else {
  alert("No encontramos al Paciente buscado!");
} */
