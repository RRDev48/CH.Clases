console.log("--> Hola Bienvenidos Al Workshop I <--");

// Para navegar en una sección de la página usar
// window.location.hash = "#ide del componente";

// 1) Simular el registro de un usaurio (capturar su nombre de usaurio)
// 2) Envíar mensaje (botón de envíar)
// 3) Listar los mensajes de ambos usaurios (Usuario 1 y Usuario 2)
// 4) Buscar mensajes que contengan una palabra.

// Pendientes para tarea de la casa:
// Borrar mensaje
// Aviso de mensajes sin leer
// Aviso de estado de mensaje (palomita o doble palomita)
// Editar mensaje
// Foto de perfil
// Lista de contactos
// Copiar y pegar texto
// Mostrar cuando un usuario está escribiendo
// Crear grupos
// Corroborar que al registrar un usuario, este ya no exista
// Tener en cuenta que en la estructura del mensaje, podemos pensar en remitente/destinatario

let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

const definirNombreDeusuario = (form, key, userName) => {
  if (form.children[0].value !== "" && userName === null) {
    userName = form.children[0].value;
    localStorage.setItem(key, userName);
  } else if (userName !== null) {
    alert("usted ya se identificó como: " + userName);
  } else {
    alert("Para identificarse, debe escribir su nombre en el input!");
  }
};

const almacenarMensajes = (mensajes = []) => {
  console.log("--> almacenarMensajes", mensajes);
  localStorage.setItem("mensajes", JSON.stringify(mensajes));
};

const recuperarMensajesDelstorage = () => {
  mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
};

const enviarMensaje = (remitente, form, destinatario, body) => {
  if (remitente) {
    let message = form.children[1].value;
    // Agregamos el mensaje a nuestro array
    if (message !== "") {
      // definimos el objeto de tipo Mensaje y lo añadimos al array
      const unMensaje = new Mensaje(remitente, destinatario, message);
      recuperarMensajesDelstorage();
      mensajes.push(unMensaje);
      almacenarMensajes(mensajes);
      pintarListado(mensajes, body, remitente);
    } else {
      alert("Debes ingresar texto en el input para envíar un mensaje!");
    }
    form.children[1].value = "";
  } else {
    alert("debe identificarse antes de enviar mensajes!");
  }
};

const pintarListado = (mensajes = [], body, remitente) => {
  // Añadimos un parámetro más para poder identificar desde el lugar en el que implementamos la llamada de la función (página de usuario 1 o página de usuario 2)
  body.innerHTML = "";
  mensajes.forEach((unMensaje, index) => {
    const unRegistro = document.createElement("tr");
    // tener esto en cuenta alert-success text-right
    // usar un ternario para evaluar si van a definir a la clase del tag como : 'alert alert-primary float-left' o 'alert alert-success text-right'
    // A continuación veremos dos formas de aplicar criterios de clases (estilos para HTML) con un ternario
    // Alternativa 1: para definir una variable y esta aplicarla con ${}
    const className =
      unMensaje.destinatario !== remitente
        ? "mb-0 alert alert-primary float-left"
        : "mb-0 alert alert-success text-right";
    unRegistro.innerHTML = `
      <div id="${"message" + index}">
      <!-- Alternativa 2: sobre la línea de código -->
          <p class="form-text text-muted mb-0 ${
            unMensaje.destinatario !== remitente ? "text-left" : "text-right"
          }">${unMensaje.remitente}</p>
          <div class="${className}" role="alert">
            ${unMensaje.mensaje}
          </div>
          <p class="form-text text-muted mt-0 ${
            unMensaje.destinatario !== remitente ? "text-left" : "text-right"
          }">${unMensaje.fecha.toLocaleString()}</p>
        </div>
      `;
    body.append(unRegistro);
  });
};
