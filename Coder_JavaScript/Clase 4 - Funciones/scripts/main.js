console.log("Hola Bienvenidos a la clase 4 🤯");

// Retomamos la clase de hoy con un breve repaso:
// Contrl de flujos con sentencias IF y los ciclos del tipo For y While

// Calcular el promedio de un conjunto de nùmeros
/* let total = 0;
let promedio = 0;
const NOMBRE = prompt("¿Las calificaciones de qué estudiante vas a cargar?");
const NUMERO_DE_EXAMENES = 3;

for (let examen = 1; examen <= NUMERO_DE_EXAMENES; examen++) {
  let calificacion = parseFloat(
    prompt(
      "Ingrese la calificación número " +
        examen +
        " para el estudiante " +
        NOMBRE
    )
  );
  total = total + calificacion;
}

promedio = total / NUMERO_DE_EXAMENES;
alert("El promedio de calificaciones del estudiante " + NOMBRE + " es: " + promedio); */

/* let total = 0;
let promedio = 0;
let cantidad = 0;

const NOMBRE = prompt("¿Las calificaciones de qué estudiante vas a cargar?");
let calificacion = parseFloat(
  prompt(
    "Ingrese la calificación número " +
      (cantidad + 1) +
      " para el estudiante " +
      NOMBRE
  )
);

console.log("--> Hola Mundo <--");

while (calificacion !== NaN && calificacion > 0 && calificacion < 10.01) {
  total = total + calificacion;
  cantidad++;
  calificacion = parseFloat(
    prompt(
      "Ingrese la calificación número " +
        cantidad +
        " para el estudiante " +
        NOMBRE
    )
  );
}

if (cantidad !== 0) {
  promedio = total / cantidad;
  alert(
    "El promedio de calificaciones del estudiante " +
      NOMBRE +
      " es: " +
      promedio
  );
} */

// Ejemplo 1: Declaración de una función
/* function saludar() {
  // Cuerpo de la función
  let nombreUsuario = prompt("¿Cómo te llamas?");
  alert("Bienvenido " + nombreUsuario + " a la clase de hoy");
}

//Ejemplo 2: Instanciación de función
saludar(); */

// Ejemplo 3: ¿Cómo proporcionamos datos a la función?
/* function saludar() {
  // Cuerpo de la función
  // Proporcioanr datos dentro de la función
  let nombreUsuario = prompt("¿Cómo te llamas?");
  alert("Bienvenido " + nombreUsuario + " a la clase de hoy");
} */

// proporcionar datos desde fuera de la función
/* const  nombreUsuario = prompt("¿Cómo te llamas?");
// Declaración
function saludar(aQuienSaludar) {
  alert("Bienvenido " + aQuienSaludar + " a la clase de hoy");
}

// Llamada a la función (¿Tenemos el nombre del usuario?)
saludar(nombreUsuario); */

// Ejemplo 4: ¿Cómo proporcionamos datos a la función y obtener resultados?
// proporcionar datos desde fuera de la función
/* const APELLIDOS_USUARIO = prompt("¿Cuál es tú apellido?");
const NOMBRES_USUARIO = prompt("¿Cuál es tú nombre?");

function obtenerNombreCompleto(nombre, apellido) {
  const nombreConcatenado = apellido + ", ".concat(nombre);
  return nombreConcatenado; // Acá se corta la ejecución de nuestro código
  // Si acá abajo pongo más cosas, estás no se van a ejecutar
}

// Declaración
function saludar(aQuienSaludar) {
  alert("Bienvenido " + aQuienSaludar + " a la clase de hoy");
}

// Primera forma (con una variable)
const FULL_NAME = obtenerNombreCompleto(NOMBRES_USUARIO,APELLIDOS_USUARIO);

// Tener mucho cuidado con el ORDEN de las variables al llamar a la función (se deben respetar cCONCEPTUALMENTE el orden de los parámetros)
//const FULL_NAME = obtenerNombreCompleto(APELLIDOS_USUARIO,NOMBRES_USUARIO);

// Llamada a la función (¿Tenemos el nombre del usuario?)
saludar(FULL_NAME); */

// Ejemplo 5: Creación de una calculadora
// Funcionalidades de nuestra calculadora: sumar, restar. multiplicar y dividir

// Función utilitaria
/* function validarNaN(numeroUno, numeroDos) {
  if (!isNaN(numeroUno) && !isNaN(numeroDos)) {
    return true;
  }
  return false;
}

// Definir cada una de las funciones necesarias
function sumar(numeroUno, numeroDos) {
  if (validarNaN(numeroUno, numeroDos)) {
    return numeroUno + numeroDos;
  }
  return NaN;
}

function restar(numeroUno, numeroDos) {
  if (validarNaN(numeroUno, numeroDos)) {
    return numeroUno - numeroDos;
  }
  return NaN;
}

function multiplicar(numeroUno, numeroDos) {
  if (validarNaN(numeroUno, numeroDos)) {
    return numeroUno * numeroDos;
  }
  return NaN;
}

function dividir(numeroUno, numeroDos) {
  if (validarNaN(numeroUno, numeroDos)) {
    if (numeroDos === 0) {
      return NaN;
    }
    return numeroUno / numeroDos;
  }
  return NaN;
}

// Crear un "contexto" sobre el cual vamos a ejecutar nuestra calculadora
// Esta variable que definimos aquí, es una variable GLOBAL
let respuestaUsuario = prompt("¿Quieres realizar una operación?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "SI") {
  // "si" !== "SI"
  const NUMERO_UNO = parseFloat(prompt("Ingrese el primer número para operar"));
  const OPERACION = prompt("Indique la operación deseada: + o - o * o /");
  const NUMERO_DOS = parseFloat(
    prompt("Ingrese el segundo número para operar")
  );
  let resultado = NaN;
  switch (OPERACION.trim()) {
    case "+":
      resultado = sumar(NUMERO_UNO, NUMERO_DOS);
      break;
    case "-":
      resultado = restar(NUMERO_UNO, NUMERO_DOS);
      break;
    case "*":
      resultado = multiplicar(NUMERO_UNO, NUMERO_DOS);
      break;
    case "/":
      resultado = dividir(NUMERO_UNO, NUMERO_DOS);
      break;
    default:
      alert("Las operaciones permitidas son: + o - o * o /");
      break;
  }

  if (!isNaN(resultado)) {
    alert(
      "El resultado de operar " +
        NUMERO_UNO +
        " " +
        OPERACION +
        " " +
        NUMERO_DOS +
        "= " +
        resultado
    );
  } else {
    alert("Ha ocurrido un error al calcular tú operación!");
  }

  // TENEMOS que VOLVER a pedir al usuario su respuesta
  respuestaUsuario = prompt("¿Quieres realizar una operación?"); // SI - NO
}

alert("Gracias por usar nuestra calculadora");
 */

// Ejemplo 6: Creación de una calculadora con funciones flecha
/* // Funcionalidades de nuestra calculadora: sumar, restar. multiplicar y dividir

// ¿Que és una función flecha? --> es aquella función que se define mediante el sigueinte operador =>
// const nombreFuncion = ([parámetros si los hay]) => {//cuerpo de la función}

// ¿Qué es una función anónima? --> es aquella función flecha que no se define con una const y nu nombre con el cual hacer referencia
// ([parámetros si los hay]) => {//cuerpo de la función}
// La diferencia con las funciones convencionales es que estas no se pueden "hacer referencia a través de un nombre", porque no lo tienen, a diferencia de las function nombreFuncion o const nombreFuncion.
// Y si éstas funciones "anónimas" no tienen nombre, ¿cómo las llamamos? --> las llamamos directamente en la línea de código donde se usan pero no nuevamente (a no ser que la repitamos - lo cual no tiene sentido porque las funciones las hacemos para no repetir código) YA VEREMOS ESTOS CASOS ESPECÓFICOS cuando estemos en la clase de funciones de alto nivel, aquí lo vas a entender por completo

// Función utilitaria
const validarNaN = (numeroUno, numeroDos) => {
  if (!isNaN(numeroUno) && !isNaN(numeroDos)) {
    return true;
  }
  return false;
};

// Definir cada una de las funciones necesarias
const sumar = (numeroUno, numeroDos) => {
  if (validarNaN(numeroUno, numeroDos)) {
    return numeroUno + numeroDos;
  }
  return NaN;
};

const restar = (numeroUno, numeroDos) => {
  if (validarNaN(numeroUno, numeroDos)) {
    return numeroUno - numeroDos;
  }
  return NaN;
};

const multiplicar = (numeroUno, numeroDos) => {
  if (validarNaN(numeroUno, numeroDos)) {
    return numeroUno * numeroDos;
  }
  return NaN;
};

const dividir = (numeroUno, numeroDos) => {
  if (validarNaN(numeroUno, numeroDos)) {
    if (numeroDos === 0) {
      return NaN;
    }
    return numeroUno / numeroDos;
  }
  return NaN;
};

// Crear un "contexto" sobre el cual vamos a ejecutar nuestra calculadora
// Esta variable que definimos aquí, es una variable GLOBAL
let respuestaUsuario = prompt("¿Quieres realizar una operación?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "SI") {
  // "si" !== "SI"
  const NUMERO_UNO = parseFloat(prompt("Ingrese el primer número para operar"));
  const OPERACION = prompt("Indique la operación deseada: + o - o * o /");
  const NUMERO_DOS = parseFloat(
    prompt("Ingrese el segundo número para operar")
  );
  let resultado = NaN;
  switch (OPERACION.trim()) {
    case "+":
      resultado = sumar(NUMERO_UNO, NUMERO_DOS);
      break;
    case "-":
      resultado = restar(NUMERO_UNO, NUMERO_DOS);
      break;
    case "*":
      resultado = multiplicar(NUMERO_UNO, NUMERO_DOS);
      break;
    case "/":
      resultado = dividir(NUMERO_UNO, NUMERO_DOS);
      break;
    default:
      alert("Las operaciones permitidas son: + o - o * o /");
      break;
  }

  console.log("--> Resultado vale", {
    resultado,
    comparacion: isNaN(resultado),
  });
  if (!isNaN(resultado)) {
    alert(
      "El resultado de operar " +
        NUMERO_UNO +
        " " +
        OPERACION +
        " " +
        NUMERO_DOS +
        "= " +
        resultado
    );
  } else {
    alert("Ha ocurrido un error al calcular tú operación!");
  }

  // TENEMOS que VOLVER a pedir al usuario su respuesta
  respuestaUsuario = prompt("¿Quieres realizar una operación?"); // SI - NO
}

alert("Gracias por usar nuestra calculadora"); */


// NOTARAS que reemplace en las funciones la expresión valor !== NaN por !isNaN(valor), son equivalentes pero la función isNaN es más precisa.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN