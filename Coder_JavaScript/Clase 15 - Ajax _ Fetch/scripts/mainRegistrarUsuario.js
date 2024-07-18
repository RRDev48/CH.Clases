console.log("Estás dentro de la página para registrar un usuario");

// 1) Validar que el nombre de usaurio no sea vacío
// 2) Validar que el nombre de usaurio repetido no sea avcío y sea igual al nombre ingresado previamente
// 3) Validar que la contraseña de usaurio no sea vacío
// 4) Validar que la contraseña de usaurio repetido no sea avcío y sea igual al nombre ingresado previamente
// 5) Validar que el nombre de usaurio no exista en la lista

// Flujo para registrar un paciente nuevo al sistema.
const miFormulario = document.getElementById("registerFormUser");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1er paso es solicitar los datos al usuario (operador) - los recuperamos de los inputs del formulario
  let nombre = document
    .getElementById("nombreUsuario")
    .value.trim()
    .toLowerCase();
  let repetirNombre = document
    .getElementById("repetirNombreUsuario")
    .value.trim()
    .toLowerCase();
  let contrasena = document.getElementById("contrasenaUsuario").value.trim();
  let repetirContrasena = document
    .getElementById("repetirContrasena")
    .value.trim();

  //hideMessages();
  // 2do paso crear o registrar al paciente dentro del sistema
  if (registrarUsuario(nombre, repetirNombre, contrasena, repetirContrasena)) {
    miFormulario.reset();
    alert("Usuario registrado satisfactoriamente!");
    window.location = "/pages/ingresar.html";
  } else {
    alert("Verifica los inputs ingresados!");
  }
});

const NAME_MIN_CHARACTERS = 6;
const PASSWORD_MIN_CHARACTERS = 4;

const validarFormulario = (
  nombre = "",
  repetirNombre = "",
  contrasena = "",
  repetirContrasena = ""
) => {
  if (nombre.length == 0) {
    alert("El Nombre de usuario es requerido.");
    return false;
  }
  if (repetirNombre.length == 0) {
    alert("Repetir nombre de usuario es requerido.");
    return false;
  }
  if (nombre !== repetirNombre) {
    alert(
      "El campo nombre de usuario y repetir nombre de usuario deben ser iguales."
    );
    return false;
  }
  if (nombre.length < NAME_MIN_CHARACTERS) {
    alert(
      "el campo Nombre de usaurio debe contener un mínimo de " +
        NAME_MIN_CHARACTERS +
        " caracteres."
    );
    return false;
  }

  if (contrasena.length == 0) {
    alert("La contraseña es reqierida");
    return false;
  }
  if (repetirContrasena.length == 0) {
    alert("Repetir contraseña es requerida");
    return false;
  }
  if (contrasena.length < PASSWORD_MIN_CHARACTERS) {
    alert(
      "el campo Contraseña debe contener un mínimo de " +
        PASSWORD_MIN_CHARACTERS +
        " caracteres."
    );
    return false;
  }
  if (contrasena !== repetirContrasena) {
    alert(
      "El campo contraseña y repetir contraseña de usuario deben ser iguales."
    );
    return false;
  }

  return true;
};

const registrarUsuario = (
  nombre,
  repetirNombre,
  contrasena,
  repetirContrasena
) => {
  // 1er paso: validar los campos ingresado en busca de errores
  const tieneErrores = validarFormulario(
    nombre,
    repetirNombre,
    contrasena,
    repetirContrasena
  );
  // Remover todo error que pueda existir previamente en la UI
  if (!tieneErrores) {
    return false;
  }
  // 2do Validar que el paciente no existe dentro del sistema
  if (isExisteUsuario(usuarios, nombre)) {
    alert("El nombre de usaurio ingresado ya existe!");
    return false;
  }

  // 3er paso crear el registro
  let unUsuario = new Usuario(nombre, contrasena);
  // 4to Añadimos al nuevo paciente a nuestra colección de pacientes registrados
  usuarios.push(unUsuario);
  actualizarListaEnStorage(usuarios);
  return true;
};
