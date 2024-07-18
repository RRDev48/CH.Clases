console.log("--> Bienvenido a la pantalla del simulador del Usuario 1 <--");

// Para navegar en una sección de la página usar
// window.location.hash = "#ide del componente";
let userName = localStorage.getItem("userName2");
let destinatario = localStorage.getItem("userName1");

const FORMULARIO = document.getElementById("messageFormUsser");
FORMULARIO.addEventListener("submit", (event) => {
  event.preventDefault();
  // Accedemos al primer elemento dentro del formulario que es un input, este representa al nombre del usaurio ingresado por el operador del PC
  definirNombreDeusuario(FORMULARIO, "userName2", userName);
});

// Pintar los mensajes que tenemos en el local storage
const BODY_CONTAINER = document.getElementById("messageBodyContainer");
// Agregamos esta línea aquí para cargar la lista de mensajes al abrir la página
pintarListado(mensajes, BODY_CONTAINER, userName);

// Creamos la referencia al formulario desde el cual el usuario va a dejar su mensaje.
const MESSAGE_FORM = document.getElementById("bodyMessageFormUser");
MESSAGE_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  enviarMensaje(userName, MESSAGE_FORM, destinatario, BODY_CONTAINER);
});
