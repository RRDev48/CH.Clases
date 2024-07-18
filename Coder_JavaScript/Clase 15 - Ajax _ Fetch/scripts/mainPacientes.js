// Recuperamos todos los pacientes del mock preparado y los convertimos uno a uno en objetos instanciados a partir de una clase (esto es optativo para cada uno, yo lo hago para aprovechar las ventajas de una clase - el uso de mètodos -).
//validateSession();

let pacientes = pacientesMock.map((p) => {
  return new Paciente(
    p.numeroDocumento,
    p.apellidos,
    p.nombres,
    new Date(p.fechaNacimiento),
    p.obraSocial
      ? new ObraSocial(p.obraSocial.id, p.obraSocial.nombre)
      : p.obraSocial,
    p.obraSocial ? p.numeroAfiliado : "",
    p.correoElectronico
  );
});

// Flujo para registrar un paciente nuevo al sistema.
const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1er paso es solicitar los datos al usuario (operador) - los recuperamos de los inputs del formulario
  let numeroDocumento = document.getElementById("numeroDocumento").value;
  let apellidos = document.getElementById("apellidos").value;
  let nombres = document.getElementById("nombres").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let obraSocial = document.getElementById("obraSocial").value;
  let numeroAfiliado = document.getElementById("numeroAfiliado").value;
  let correoElectronico = document.getElementById("correoElectronico").value;

  hideMessages();
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
    // TODO debemos mostrar un mensaje amigable en la pantalla que le diera al usaurio la confirmación de que el proceso finalizó con éxito
    // TODO debemos generar un proceso para re-pintar los registros de la tabla para reflejar el nuevo objeto añadido
    // TODO debemos remover este console.table()
    //console.table(pacientes);
    // Limpiar los campos del formulario para permitir cargar nuevos datos
    miFormulario.reset();
  } else {
    showErrorMessages(["Debes verificar los datos ingresados"], true);
  }
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
  console.log("--> validarFormulario", {
    numeroDocumento,
    apellidos,
    nombres,
    fechaNacimiento,
    obraSocial,
    numeroAfiliado,
    correoElectronico,
  });
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
  // 1er paso: validar los campos ingresado en busca de errores
  const errores = validarFormulario(
    numeroDocumento,
    apellidos,
    nombres,
    fechaNacimiento,
    obraSocial,
    numeroAfiliado,
    correoElectronico
  );
  // Remover todo error que pueda existir previamente en la UI
  if (errores.length !== 0) {
    // Mostrar los errores en la UI
    showErrorMessages(errores);
    return false;
  }
  // 2do Validar que el paciente no existe dentro del sistema
  if (isExistePaciente(pacientes, numeroDocumento)) {
    const unPaciente = getPaciente(pacientes, numeroDocumento);
    showErrorMessages([
      "El Paciente que intenta registrar con el Documento de identidad " +
        numeroDocumento +
        " ya existe dentro de los registros. El paciente se halla registrado bajo los nombres " +
        unPaciente.toString(),
    ]);
    return false;
  }
  // 3er paso comprobar que la Obra Social seleccionada (si la selecciona), existe
  let unaObraSocial;
  if (obraSocial !== "") {
    unaObraSocial = getObraSocial(obrasSociales, parseInt(obraSocial));
    if (!unaObraSocial) {
      showErrorMessages([
        "La Obra Social seleccionada no se halla registrada en nuestro sistema ",
      ]);
      return false;
    }
  }

  // 3er paso crear el registro
  let unPaciente = new Paciente(
    numeroDocumento,
    apellidos,
    nombres,
    new Date(parseDateWithDashesToISOStringFormat(fechaNacimiento)),
    unaObraSocial ? unaObraSocial : null,
    numeroAfiliado,
    correoElectronico
  );
  // 4to Añadimos al nuevo paciente a nuestra colección de pacientes registrados
  pacientes.push(unPaciente);
  showSuccessMessages(["Nuevo paciente registrado."]);
  return true;
};

// Funcionalidad para pintar la tabla
let cuerpoTabla = document.getElementById("tableBody");
const pintarTabla = (entities = []) => {
  cuerpoTabla.innerHTML = "";
  entities.forEach((unPaciente) => {
    const unRegistro = document.createElement("tr");
    unRegistro.innerHTML = `
    <td scope="col" class="text-center">${unPaciente.numeroDocumento}</td>
            <td scope="col">${unPaciente.apellidos}</td>
            <td scope="col">${unPaciente.nombres}</td>
            <td scope="col">${
              unPaciente.obraSocial ? unPaciente.obraSocial.nombre : "-"
            }</td>
            <td scope="col">${unPaciente.numeroAfiliado}</td>
            <td scope="col">${unPaciente.correoElectronico}</td>
    `;
    cuerpoTabla.append(unRegistro);
  });
};

pintarTabla(pacientes);

// Funcionalidad para realizar una búsqueda sobre un filtro

const mySearchForm = document.getElementById("searchForm");
const mySearchTerm = document.getElementById("searchText");
mySearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1) Ingresar el término a buscar
  const termino = mySearchTerm.value;

  // 2) "Recorrer el array en busqueda del término"
  //const resultados = filtrarElementos(termino, pacientes);

  // 3) Mostrar los resultados
  // Elaborar la condición para saber si hay elementos filtrados o no
  /* if (condition) {
    // Pintar l atabla
  } else {
    // Alertar que no hay coincidencias
  } */
  //pintarTabla(resultados);
  pintarTabla(filtrarElementos(termino, pacientes));
});

const filtrarElementos = (termino = "", elementos = []) => {
  return elementos.filter((unElemto) => {
    return (
      unElemto.apellidos.toLowerCase().includes(termino.toLowerCase()) ||
      unElemto.nombres.toLowerCase().includes(termino.toLowerCase())
    );
  });
};

// Funcionalidad para limpiar las búsquedas
const myResetSearchForm = document.getElementById("clearSearchForm");
myResetSearchForm.addEventListener("click", (e) => {
  e.preventDefault();
  pintarTabla(pacientes);
  mySearchForm.reset();
});
