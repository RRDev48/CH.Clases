// Ejemplos clase 9: DOM

// Ejemplo 1: Acceder a diferentes nodos mediante los métodos del document

// getElementById (devolverá un único NODO si existe, sino null)
/* console.log(document.getElementById("tableBody")); */

// getElementsByClassName (devolverá un array con todos los NODOS que tengan la ClassName indicada entre "" en su atributo class, sino [] - un array vacío)
/* console.log(document.getElementsByClassName("form-label")); */

// getElementsByTagName (devolverá un array con todos los NODOS que esten definidas en el código fuente con la ETIQUETA indicada entre "", sino [] - un array vacío)
/* console.log(document.getElementsByTagName("input")); */

// Ejemplo 2: Cómo recorrer elementos de una colección de nodos (también podemos usar while, for, etc, en el ejemplo usaremos el FOR-OF porque construye todo sin necesidad de muchos controles - esto se puede hacer únicamente con objetos ITERABLES, te invito a que investigues por tú cuenta que es este término -)
/* const todasLasObrasSociales = document.getElementsByTagName("option");
console.log(todasLasObrasSociales);

for (const unaObraSocial of todasLasObrasSociales) {
  console.log(unaObraSocial.innerText);
} */

// Ejemplo 3: Modificar NODOS (para el ejemplo vamos cambiar el idioma con el cual mostramos los labels de nuestro formulario)
/* const labels = document.getElementsByTagName("label");
// Criterio para lenguajes con objetos
const unObjeto = {
  label: "",
  placeholder: "",
  submit: "",
};

const definicionesEnIngles = [
  "Indentifier",
  "Surname",
  "Name",
  "Birthday Date",
  "Social Work",
  "Social Work Number",
  "Email",
];

console.table(labels);
console.table(definicionesEnIngles);

for (let index = 0; index < labels.length; index++) {
  labels[index].innerText = definicionesEnIngles[index];
}

console.table(labels); */

// Ejemplo 4: Usar propiedad innerHTML para modificar el contenido de un nodo (Modificando la estructura HTML del nodo). --> Ejemplo de cómo mostrar errores en pantalla (validación de los inputs - DINÁMICO -)
/* const contenedor = document.getElementById("errorsMessages"); */
/* contenedor.innerHTML = "<p>El campo apellidos es requerido</p><p>El campo nombres es requerido</p>"; */

// Ejemplo 5: Otra propiedad que podemos aprovechar es className para definir estilos de un nodo (también si sabes cómo usar classList, aprovechar el método .add de este) --> Ejemplo de cómo aplicar un estilo con clases dependiendo de criterios de validación

/* const errores = document.getElementsByTagName("p");
const validaciones = [
  "El campo apellidos es requerido",
  "El campo nombres es requerido"
] */

/* errores[0].className = "success mb-1";
errores[1].className = "errors mb-1"; */

// Ejemplo 6: Añadir y remover elementos a mí nodo
// El siguiente algoritmo es dinámico, ya que crea tantos nodos como elementos en el array
/* validaciones.forEach(unMensaje => {
  let parrafo = document.createElement("p");
  parrafo.innerText = unMensaje;
  parrafo.className = "errors";
  contenedor.append(parrafo)
});

// Eliminar un nodo dentro de otro nodo (tengo que tener acceso a ese nodo previamente - DEBE existir)
const erroresPintados = document.getElementsByClassName("errors");
// Suponer que tengo un evento que controla la carga de los inputs y que puedo identificar la posición del mensaje de error original
// Suponer también que debo eliminar de la lista de errores el segundo ("el nombre del paciente es requerido")
// Mediante la posición del array de nodos, accedo al nodo que me interesa manipular y uso el método .remove()
erroresPintados[1].remove(); */

// Ejemplo 7: Cómo aplicar (modificar) valores dentro de los atributos value (entre otros atributos con igual funcionalidad) de los NODOS
// Suponemos una carga manual a través de las funcionalidades prompt del navegador.
/* const apellidos = prompt("Ingrese los apellidos del paciente");
const nombres = prompt("Ingrese los nombres del paciente"); */

// También podemos aplicar valores a estas propiedades directamente desde el código fuente.
/* document.getElementById("apellidos").value = "Malaquias"//apellidos;
document.getElementById("nombres").value = "Juan Ignacio"//nombres; */

// Ejemplo 8: Uso de template string (una forma alternativa para concatenar)
 // Creamos un objeto que representa a un paciente - definido como literal
let unPaciente = {
  numeroDocumento: "11222333",
  apellidos: "Antoniow",
  nombres: "Pablo Damián",
  fechaNacimiento: "10/10/2023",
  obraSocial: { id: 1, nombre: "OSDE" },
  numeroAfiliado: "AB-33",
  correoElectronico: "ANTONIOW.PABLOB@GMAIL.COM",
};
/* let concatenado =
  "Documento de identidad: " +
  unPaciente.numeroDocumento +
  " - Apellidos y Nombres: " +
  unPaciente.apellidos +
  ", " +
  unPaciente.nombres;
let plantilla = `Documento de identidad: ${unPaciente.numeroDocumento} - Apellidos y Nombres ${unPaciente.apellidos}, ${unPaciente.nombres}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla); */

// Cómo mostrar los detalles de un elemento (objeto) que dispongamos en memoria
// Método 1: El siguiente método agrega un elemento NODO al final del BODY
/* let datosPaciente = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
datosPaciente.innerHTML = `<h5>Documento de identidad: ${unPaciente.numeroDocumento}</h5>
                        <p>Apellidos: ${unPaciente.nombres}</p>
                        <p>Nombres ${unPaciente.apellidos}</p>`;
//Agregamos el contenedor creado al body
document.body.appendChild(datosPaciente); */

// Método 2: El siguiente método módifica el contenido de un NODO EXISTENTE
/* let contenedor = document.getElementById("datosUnPaciente");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h5>Documento de identidad: ${unPaciente.numeroDocumento}</h5>
                        <p>Apellidos: ${unPaciente.nombres}</p>
                        <p>Nombres ${unPaciente.apellidos}</p>`; */

// Ejemplo 10: Uso del query selector
/* const unInput = document.querySelector("#formulario .form-control");
console.log(unInput);

const todosLosInputs = document.querySelectorAll("#formulario .form-control");
console.log(todosLosInputs); */

// Ejemplos del Segundo AFTER CLASS
// Ejemplo de carga manual y visualización
/* let pacientes = pacientesMock.map((p) => {
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
