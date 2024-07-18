// Archivo de código fuente principal, contiene todas las funcionalidades más generales y transversales a las funcionalidades del pryecto.
console.log("--> Hola. Acá ya cargamos el archivo HTML.");

// Ejemplo 1: Formas de hacer comentarios dentro del código fuente. Los comentarios son texto o códigos presentes dentro del código fuente que son leídos por el navegador pero son ignorados (no son ejecutados).

// Un comentario es código que no lo lee el navegador.
// console.log("--> Adíos") <-- esto no se va a ejecutar

// Esto es un comentario de una línea. Notar que se escribe con dos / consecutivas al principio

/**
 * comenatrios
 * de
 * varios
 * bloques
 *
 * Notar que se escribe encerrando el texto que queremos con / y *
 */

// Ejemplo 2: Variables. Son espacios en memoria del dispositivo del usuario que son accedidas a través de un nombre representativo en el código fuente.

// El formato completo para la construcción de variables es el siguiente:
// [modificador de acceso] [nombre] [=] - [valor]

// ¿Cómo usamos los modificadores de acceso?
// let --> permite declarar (no necesariamente asignar valor) y posteriormente modificar su valor
// const --> permite declarar (pero no modificar - es obligatorio la declaración y la asignación del valor)

// Declarar una variable que posteriormente podemos modificar su valor:
let nombreCurso;
// Asignación de un valor a la variable:
nombreCurso = "Javascript";
// Modificar el valor de la variable previamente declarada
nombreCurso = "Javascript 2.0";

// Declaración e inicialización de una variable en una sola línea
let nombreEstudiante = "Pepe Grillo";

// Declarar una costante (es necesario su declaración y asignación en la misma línea - inicialización -)
const NOMBRE_PROFESOR = "Saúl";
// NO podremos modificar su valor una vez lo inicializamos (lo dejamos comentado para que no nos arroje error en la consola de desarrollador)
// NOMBRE_PROFESOR = "Profe Saúl"

// hasta el momento trabajamos con strings (cadenas de caracteres), pero también podemos usar números.
const DIAS_DE_LA_SEMANA = 7;

// Diferencias entre escribir un número entre comillas y uno sin comillas. Si imprimimos cada valor individualemente
let unNumeroConComillas = "47060"; // --> En la consola se imprimirá '47060' (probablemente en color negro o rojo)
let unNumeroSSinComillas = 47060; // --> En la consola se imprimirá 47060 (probablemente en color distinto a un texto - generalmente en azul)

// Ejemplo 3: Formas de tener feedback con usuarios: Tenemos inicialmente tres formas de tener feedback con el usuario sin contar con HTML, console, alert y prompt.

// Console.log(texto) --> Muestra en la consola del navegador el mensaje que proporcionemos entre (), posee más parámetros pero los iremos aprendiendo a medida que avanzamos con el curso.
console.log("Hola Mundo :)"); // Mostrará en la consola el siguiente mensaje 'Hola Mundo :)'

// prompt(mensaje) --> Muestra en pantalla (por sobre de la página) una ventana flotante (ventana de diálogo) con un mensaje en la barra de títitulos y un input donde el usuario puede ingresar por teclado algo. Al final para confirmar lo ingresado se debe presionar el botón o la tecla enter.
nombreCurso = prompt("¿Qué curso estás dictando hoy?");
nombreEstudiante = prompt("¿Dime el nombre de un estudiante?");
console.log("--> Ingresaste el nombre del estudiante: " + nombreEstudiante);

// Te invito a probar que valor se almacenan en las variables, en el caso que el usuario no ingrese nada en el input o bien use la opción "cancelar".

// alert(mensaje) --> fucniona de una forma similar al prompt, con la diferencia que no posee un input, sino que solamente muestra el mensaje dentro de la ventana de diálogo.
alert("Hola " + nombreEstudiante + ", bienvenido al curso de " + nombreCurso);

// Tanto la funcionalidad prompt como alert, poseen parámetros para personalizar las ventanas de diálogo que se construyen con estos. Visitar los siguientes enlaces
// prompt --> https://developer.mozilla.org/es/docs/Web/API/Window/prompt
// alert  --> https://developer.mozilla.org/es/docs/Web/API/Window/alert

// Ejemplo 4: Operaciones básicas con tipos de datos básicos
// Hasta el momento como lo introdujimos en la clase 0, los tipos de datos que vimos son los strings (cadenas de texto) y numbers (numeros - sin evaluar sus caracteristicas en profundidad)

// Operaciones con cadenas de caracteres (concatenación)
// En los ejemplos anteriores vimos que usamos el + para "sumar" dos o más cadenas de texto. Por ejemplo:
console.log(
  "--> El nombre del curso al que les damos la bienvenida es " + nombreCurso
);

// Otra forma de hacer concatenación es con la función String.concat(cadena) que ya lo veremos en clases siguientes.
console.log(
  "--> El nombre del curso al que les damos la bienvenida es ".concat(
    nombreCurso
  )
);

// Concatenar más de dos cadenas de textos. En este ejemplo concatenaremos 4 textos diferentes (los " - " también son textos)
let comision = "47060";
console.log("--> Esto es el curso de " + nombreCurso + " - " + comision);

// Sumar números
let numeroUno = 5;
let numeroDos = 10;
let resultado = numeroUno + numeroDos;
console.log("--> Resultado: " + resultado);

// También podemos restar (-), multiplicar (*), dividir (/), etc.
// Ten en cuenta que hay algunas reglas a considerar dependiendo de la operación matemática. Te recomiendo repasar los axiomas matemáticos para estas operaciones.

let resultadoResta = numeroUno - numeroDos;
console.log("--> Resultado de restar: " + resultadoResta);

let resultadoMultiplicacion = numeroUno * numeroDos;
console.log("--> Resultado de multiplicar: " + resultadoMultiplicacion);

let resultadoDivision = numeroUno / numeroDos;
console.log("--> Resultado de dividir: " + resultadoDivision);

// Podemos realizar operaciones más complejas como la potenciación, radicación y otros. Pero para poder hacerlas necesitamos aprender un poquito más, como ser estructuras de control y como combinarlas con las operaciones descritas más arriba.

// Qué ocurre cuando concatenamos textos con números. Los numeros son transformados a textos (casteados) y son "concatenados" en vez de ser "sumados"
let numeroTres = "20";
let numeroCuatro = 23;
resultado = numeroTres + numeroCuatro;
console.log("--> Resultado de sumar " + numeroTres + " + " + numeroCuatro + " es igual a " + resultado);
// El resultado es '--> Resultado de sumar 20 + 23 es igual a 2023' y no '--> Resultado de sumar 20 + 23 es igual a 43' como podríamos esperar.