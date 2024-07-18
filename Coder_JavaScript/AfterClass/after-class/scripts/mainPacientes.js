// Ejemplo de carga manual y visualización
let pacientes = pacientesMock.map((p) => {
  return new Paciente(
    p.numeroDocumento,
    p.apellidos,
    p.nombres,
    p.fechaNacimiento,
    p.obraSocial,
    p.numeroAfiliado,
    p.correoElectronico
  );
});

const validarFormulario = (
  numeroDocumento = "",
  apellidos = "",
  nombres = "",
  fechaNacimiento = "",
  obraSocial = "",
  numeroAfiliado = "",
  correoElectronico = ""
) => {
  let mensajes = [];
  if (numeroDocumento.length == 0) {
    mensajes.push("El Documento de identidad es requerido");
  }
  if (apellidos.length == 0) {
    mensajes.push("Los Apellidos son requeridos");
  }
  if (nombres.length == 0) {
    mensajes.push("Los Nombres son requeridos");
  }
  if (fechaNacimiento.length == 0) {
    mensajes.push("La Fecha de nacimiento es requerida");
  }
  // Comienzan los parámetros optativos
  if (obraSocial.length !== 0) {
    if (isNaN(parseInt(obraSocial))) {
      mensajes.push("Debe seleccionar una Obra Social válida");
    } else {
      if (numeroAfiliado.length == 0) {
        mensajes.push(
          "El Número de afiliado es requerido si indica una obra social"
        );
      }
    }
  }
  // Finalizan los parámetros optativos
  if (correoElectronico.length == 0) {
    mensajes.push("El Correo electrónico es requerido");
  } else if (!correoElectronico.includes("@")) {
    mensajes.push("El Correo electrónico no tiene un formato válido");
  }
  return mensajes;
};

const isExistePaciente = (pacientes = [], identificador = "") => {
  return pacientes.some(
    (unPaciente) => unPaciente.numeroDocumento === identificador
  );
};

const getPaciente = (pacientes = [], identificador = "") => {
  return pacientes.find(
    (unPaciente) => unPaciente.numeroDocumento === identificador
  );
};

const registrarPaciente = (
  numeroDocumento,
  apellidos,
  nombres,
  fechaNacimiento,
  obraSocial,
  numeroAfiliado,
  correoElectronico
) => {
  // 1er paso
  const errores = validarFormulario(
    numeroDocumento,
    apellidos,
    nombres,
    fechaNacimiento,
    obraSocial,
    numeroAfiliado,
    correoElectronico
  );
  if (errores.length !== 0) {
    // Hay errores en los campos del formulario, los vamos a mostrar en la UI
    console.table(errores);
    return false;
  }
  // 2do Validar que el apciente no existe dentro del sistema
  if (isExistePaciente(pacientes, numeroDocumento)) {
    const unPaciente = getPaciente(pacientes, numeroDocumento);
    console.table([
      "El Paciente que intenta registrar con el Documento de identidad " +
        numeroDocumento +
        " ya existe dentro de los registros. El paciente se halla registrado bajo los nombres " +
        unPaciente.toString(),
    ]);
    return false;
  }
  // 3ro paso crear el registro
  let unPaciente = new Paciente(
    numeroDocumento,
    apellidos,
    nombres,
    fechaNacimiento,
    obraSocial,
    numeroAfiliado,
    correoElectronico
  );
  // 4to Añadimos al nuevo paciente a nuestra colección de pacientes registrados
  pacientes.push(unPaciente);
  return true;
};

// Carga manual
let respuesta = prompt("Quieres seguir cargando más pacientes");
while (respuesta.trim().toUpperCase() === "SI") {
  // 1er paso es solicitar los datos al usuario (operador)
  let numeroDocumento = prompt("Número de documento");
  let apellidos = prompt("Apellidos");
  let nombres = prompt("Nombres");
  let fechaNacimiento = prompt("Fecha de Nacimiento");
  let obraSocial = prompt("Obra Social");
  let numeroAfiliado = prompt("Número de Afiliado");
  let correoElectronico = prompt("Correo electrónico");

  // 2do paso crear o registrar al paciente dentro del sistema
  if (
    registrarPaciente(
      numeroDocumento,
      apellidos,
      nombres,
      fechaNacimiento,
      obraSocial,
      numeroAfiliado,
      correoElectronico
    )
  ) {
    // 3er paso mostrar los nuevos valores actualizados en la lista
    console.table(pacientes);
  } else {
    alert("Debes verificar los datos ingresados");
  }
  respuesta = prompt("Quieres seguir cargando más pacientes");
}

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
