// Ejmeplo 1: Sintaxis de el método fetch
//fetch(URL, CONFIG);
// URL: es la dirección local o absoluta (externa) del recurso que queremos consumir, conformada por la URL_BASE + URL_RECURSO
// CONFIG: son los parámetros que queremos indicar al método que use, por ejemplo personalizar los headers, indicar datos a envíar con el body o especificar el method a usar, entre otro monton de parámetros que puede usar para el método fetch.

// Ejemplo 2: Ejecución de un endpoint (cómo recuperar un único objeto)
// Si no indicamos el method, este por definición es un GET.
/* const URL_BASE = "https://jsonplaceholder.typicode.com";
// Aquí URL_BASE + URL_RECURSO es: "https://jsonplaceholder.typicode.com" + "/users/5"
fetch(URL_BASE + "/users/5")
  .then((response) => response.json())
  .then((json) => console.log(json)); */

// Ejemplo 3: Ejecución de un endpoint (para recuperar una colección de objetos)
/* const URL_BASE = "https://jsonplaceholder.typicode.com";
fetch(URL_BASE + "/users")
  .then((response) => response.json())
  .then((users) => {
    // Recorremos cada elemento de la colección y lo mostramos por pantalla, completo o podemos usar algún atributo específico.
    users.forEach((user) => {
      console.log(user.name);
    });
  }); */

// Ejemplo 4: Ejecución de un endpoint con el método POST y crear un objeto del lado de nuestro servidor (simulación con jsonplaceholder.typicode.com)
/* const URL_BASE = "https://jsonplaceholder.typicode.com";
//fetch(URL_BASE, CONFIG);
fetch(URL_BASE + "/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Coderhouse",
    body: "Post de prueba",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data)); */

// Ejemplo 5: Aplicar métodos fetch para recuperar datos de un fichero local (de dentro de mí proyecto - uso de URL relativas)
/* const lista = document.querySelector("#contenedorPacientes");

console.log(fetch("/mocks/pacientes.json")); */

/* fetch("/mocks/pacientes.json")
  .then((res) => res.json())
  .then((data) => {
    console.table(data);
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `;

      lista.append(li);
    });
  }); */

// Ejemplo 6: Uso de Async-Await para esperar por el resultado de una petición (esto congelará las líneas de código que se ejecuten posterior a la invocación del método que tenga la palabra await al principio)
const lista = document.querySelector("#contenedorPacientes");
let pacientes = [];
/**
 * @abstract Recuperar una lista de objetos con el formato de pacientes desde un archivo local del proyecto
 */
const getAllPacientes = async () => {
  const resp = await fetch("/mocks/pacientes.json");
  const data = await resp.json();
  pacientes = data;
};

/**
 * @abstract Nos permite pintar todos los elementos recuperados en nuestra variable global pacientes
 * @param {@abstract} list  Elementos que queremos mostrar en la UI.
 */
const pintarLista = (list = []) => {
  list.forEach((unPaciente) => {
    const li = document.createElement("li");
    li.innerHTML = `
              <h4>${unPaciente.apellidos}, ${unPaciente.nombres}</h4>
              <a>${unPaciente.correoElectronico}</a>
              <hr/>
          `;
    lista.append(li);
  });
};

/**
 * @abstract Esta función es la que nos permita "inicializar" aspectos generales de nuestra página, por ejemplo, recuperar una lista de pacientes y mostrarlos por pantalla (unificamos la funcionalidad de las dos funciones definidas anteriormente)
 */
const inicializarPagina = async () => {
  await getAllPacientes();
  // Yo quieor hacer algo (pero para hacer ese algo, necesito esperar)
  pintarLista(pacientes);
};

/**
 * @abstract Invocamos a la función que inicializa todos los aspectos negerales necesarios para nuestra UI y dar una UX confortable para el cliente
 */
inicializarPagina();
