console.log("Estás en la página del Login");

// 1) el usuario debe ingresar nombre y contraseña
// 2) Se debe verificar que el usaurio existe
// 3) Se debe verificar que la contraseña proporcionada es la que tiene registrada

const miFormulario = document.getElementById("loginFormUser");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1er paso es solicitar los datos al usuario (operador) - los recuperamos de los inputs del formulario
  // 1) el usuario debe ingresar nombre y contraseña
  let nombre = document.getElementById("nombreUsuario").value;
  let contrasena = document.getElementById("contrasena").value;

  if (!validarFormulario(nombre, contrasena)) {
    alert("Debes completar todos los campos");
    return false;
  }

  // 2) Se debe verificar que el usaurio existe
  const unUsuario = getUsuario(usuarios, nombre);
  console.log("--> usuario recuperado", unUsuario);
  if (!unUsuario) {
    alert("El usuario con el nombre ingresado es inexistente");
    return false;
  }

  // 3) Se debe verificar que la contraseña proporcionada es la que tiene registrada
  if (!unUsuario.isPassword(contrasena)) {
    alert("La contraseña ingresada no es correcta");
    return false;
  }

  // Registramos su inicio de sesión
  unUsuario.isLoged = true;
  registrarInicio(unUsuario);
  window.location = "/index.html"
});

const validarFormulario = (nombre, contrasena) => {
  if (nombre.length == 0) {
    alert("El Nombre de usuario es requerido.");
    return false;
  }

  if (contrasena.length == 0) {
    alert("La contraseña es reqierida");
    return false;
  }

  return true;
};