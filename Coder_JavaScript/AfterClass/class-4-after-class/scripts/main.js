console.log("Hola Bienvenidos a la clase 4 😊 (After Class)");

// Intentaremos crear un simulador de contactos
/**
 * Datos que solicitaremos al usuario:
 *
 * Apellidos
 * Nombres
 * Correo Electrónico
 * Mensaje
 *
 *
 */

// Esto es una función FLECHA
const obtenerNombreCompleto = (apellido, nombre) => {
  /**
   * apellido:"Grillo"
   * nombre: "Pepe"
   */
  // Variables locales apellido y nombre
  return apellido + ", " + nombre;
};

// Esto que tenemos acá es una función ANÓNIMA
//(apellido, nombre) => {return apellido + ", " + nombre};

const obtenerDetalleDeRegistro = (surName, name, email, message) => {
  /**
   *
   * surName: "Grillo"
   * name: "Pepe"
   * email: "pepe.grilo@gmail.com"
   * message: "Voy saltando por la vida!"
   *
   */
  // return (obtenerNombreCompleto("Grillo", "Pepe") +", con correo electónico: " + "pepe.grilo@gmail.com" +". Dejó el siguiente mensaje: " + "Voy saltando por la vida!");
  return (
    obtenerNombreCompleto(surName, name) +
    ", con correo electónico: " +
    email +
    ". Dejó el siguiente mensaje: " +
    message
  );
};

let respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "SI") {

  // Estos prompts son los que ocpletará el usaurio, y los "mandará" al backoffice
  let apellidos = prompt("Cuál es tú apellido"); // <-- Grillo
  let nombres = prompt("Cuál es tú nombre"); // <-- Pepe
  let correo = prompt("Cuál es tú correo electrónico"); // <-- pepe.grilo@gmail.com
  let mensaje = prompt("Cuál es tú mensaje"); // <-- Voy saltando por la vida!

  // Imaginemos que este es el mensaje de éxito del usaurio en la UI
  alert("¡Tu consulta fue enviada exitosamente!");

  // Este console.log representa a la lista de mensajes recibidos que verá el personal del backoffice
  // Este alert que veremos en pantalla, SIMULA la pantalla del operador del otro lado (backoffice)
  // Variables globales apellidoS y nombreS (esto es una PRUEBA DE ESCRITORIO)
  //alert("El usuario " + obtenerDetalleDeRegistro("Grillo", "Pepe", "pepe.grilo@gmail.com", "Voy saltando por la vida!"));
  console.log(
    "El usuario " +
      obtenerDetalleDeRegistro(apellidos, nombres, correo, mensaje)
  );

  // TENEMOS que VOLVER a pedir al usuario su respuesta (para evitar un bucle infinito)
  respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?"); // SI - NO
}

alert("¿Gracias por usar nuestro simulador de formulario de contacto!");

/**
 * Este código fuente podría implementar funciones para validar los inputs ingresados, con estructuras de control que hagan que se le vuelva a pedir estos datos al usuario si los proporcionados no son adecuados, por ejemplo, pedir el apellido hasta que sea válido
 */

/* const MIN_LENGTH = 3;
const MAX_LENGTH = 10;

const validateLength = (text, minLength, maxLength) => {
  if (
    text !== "" &&
    text.length >= minLength &&
    text.length <= maxLength
  ) {
    return true;
  }
  return false;
};

let texto = prompt("Ingrese un texto");
console.log("--> Valor proporcionado", {texto});
while (!validateLength(texto, MIN_LENGTH, MAX_LENGTH)) {
  texto = prompt("Ingrese un texto");
}

alert("Texto validado ingresado: " + texto); */
