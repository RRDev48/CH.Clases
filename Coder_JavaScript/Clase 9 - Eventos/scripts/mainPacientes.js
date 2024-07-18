// Ejemplos de clase 10: Eventos

// Ejemplo 1: Añadir eventos a elementos del HTML con javascript
// Para las opciones 1 y 2, tener en cuenta:
// 1ro Acceder a un NODO (puedes usar cualquiera de los métodos vistos en la clase 9)
/* const miBoton = document.getElementById("btnRegistrar"); */

// Usar uno de los mètodos vistos para añadir el event handler
// Podemos definir la funcionalidad - event handler - aparte como aquí, o dentro del event listener con una función anónima
/* const saludar = () => {
  alert("Hola, bienvenido extraño!");
}; */

// Añadir el evento con addEventListener (opción 1)
// Aqií si usamos la función previamente definida, no la pasamos con los () ya que sería una instanciación (llamada) a la función y la ejecutaríamos sin considerar el evento!
/* miBoton.addEventListener("click", saludar); */

// Añadir el evento con .on[event name] (opción 1)
// Aquí es necesario que usemos el () ya que lo que le decimos al NODO es que onclick se convierta en una función.
/* miBoton.onclick = saludar(); */

// Añadir el evento con addEventListener (opción 1) - sin función previa
/* miBoton.addEventListener("click", () => {
  alert("Hola, bienvenido extraño!");
}); */

// Añadir el evento con .on[event name] (opción 1) - sin función previa
/* miBoton.onclick = () => {
  alert("Hola, bienvenido extraño!");
}; */

// Ejemplo 2: Eventos sobre inputs
// Recordar que a partir de ahora solamente usaré la opción 1 (tu puedes usar la que prefieras)
/* const miInput = document.getElementById("numeroDocumento");
// Este evento ocurre cuando el contenido de dentro del input cambia por otro diferente
miInput.addEventListener("change", () => {
  console.log("Cambiaste algo dentro del input");
}); */

// Este evento ocurre cuando el input recibe el "foco" es decir "se activa" para que escribamos dentro de él.
/* miInput.addEventListener("focus", () => {
  console.log("Hiciste foco en el input para Número de Documento");
});

// Este evento ocurre cuando salimos de input y nos vamos a otra sección de la página; por ejemplo; a otro input.
miInput.addEventListener("blur", () => {
  console.log("Saliste de foco en el input para Número de Documento");
});

// Este evento es como el del mouse, ocurre cuando con el puntero del mouse sobre el input hacemos un click con el boton "primario" del mouse.
miInput.addEventListener("click", () => {
  console.log("Hiciste click en el input para Número de Documento");
}); */

// Este evento ocurre cada vez que algo dentro del input cambia, ocurre mientras escribimos, ya sea que agregamos caracteres o los eliminamos con retroceder.
/* miInput.addEventListener("input", () => {
  console.log("Estás escribiendo sobre el input para Número de Documento");
}); */

// Ejemplo 3: Evento del mouse click sobre cualquier tag de la página.
/* const miLabel = document.getElementById("labelNumeroDocumento");
miLabel.addEventListener("click", () => {console.log("Cuidado donde haces click!")}); */

// Ejemplo 4: Uso del submit
// Para ejecutar este evento es necesario dos cosas:
// Se debe ejecutar sobre un formulario (esencialmente)
// El formulario debe contar con el botón responsable que le dira que lo ejecute, este botón debe ser del tipo submit
/* const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", () => {
  alert("Estás a punto de submitear el formulario!");
  console.log("Estás a punto de submitear el formulario!");
}); */

// Ejemplo 5: Acceder a información específica del evento
/* const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Estás a punto de submitear el formulario!", e);
});

const miInput = document.getElementById("numeroDocumento");
miInput.addEventListener("change", (event) => {
  console.log("Algo cambió dentro de nuestro input, esto que cambó es: " + event.target.value, event);
}); */

// Ejemplo 6: Agregar funcionalidad real a nuestro formulario de regsitro con todo lo ya desarrollado en las últimas 3 clases.
const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1er paso es solicitar los datos al usuario (operador)
  let numeroDocumento = document.getElementById("numeroDocumento").value;
  let apellidos = document.getElementById("apellidos").value;
  let nombres = document.getElementById("nombres").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let obraSocial = document.getElementById("obraSocial").value;
  let numeroAfiliado = document.getElementById("numeroAfiliado").value;
  let correoElectronico = document.getElementById("correoElectronico").value;

  // TODO debemos eliminar este console.log()
  console.log("--> Acá está toda la información recolectada", {
    numeroDocumento,
    apellidos,
    nombres,
    fechaNacimiento,
    obraSocial,
    numeroAfiliado,
    correoElectronico,
  });

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
    console.table(pacientes);
    // Limpiar los campos del formulario para permitir cargar nuevos datos
    miFormulario.reset();
  } else {
    pintarErrores(["Debes verificar los datos ingresados"]);
  }
});

const errorsMessages = document.getElementById("errorsMessages");
const pintarErrores = (errores = []) => {
  limpiarErrores();
  errores.forEach((unMensaje) => {
    let parrafo = document.createElement("p");
    parrafo.innerText = unMensaje;
    errorsMessages.append(parrafo);
  });
};

const limpiarErrores = () => {
  errorsMessages.innerHTML = "";
};

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
    // Mostrar los errores en la UI
    pintarErrores(errores);
    return false;
  } else {
    // Remover todo error que pueda existir previamente
    limpiarErrores();
  }
  // 2do Validar que el apciente no existe dentro del sistema
  if (isExistePaciente(pacientes, numeroDocumento)) {
    const unPaciente = getPaciente(pacientes, numeroDocumento);
    // TODO debemos pintar el error en la UI para ser más amigables con el usuario
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
