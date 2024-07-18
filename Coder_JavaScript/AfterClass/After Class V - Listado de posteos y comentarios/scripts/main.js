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
/* const lista = document.querySelector("#contenedortodosLosPosteos");

console.log(fetch("/mocks/todosLosPosteos.json")); */

/* fetch("/mocks/todosLosPosteos.json")
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
const URL_BSE = "https://jsonplaceholder.typicode.com";
const bodyContent = document.querySelector("#bodyContent");
let todosLosPosteos = [];
let todosLosUsuarios = [];

const showSpinner = () => {
  const spinner = document.getElementById("loadingMessage");
  spinner.classList.remove("visually-hidden");
};

const hideSpinner = () => {
  const spinner = document.getElementById("loadingMessage");
  spinner.classList.add("visually-hidden");
};

/**
 * @abstract Recuperar una lista de objetos con el formato de todosLosPosteos desde un archivo local del proyecto
 */
const getAllPosts = async () => {
  showSpinner();
  await fetch(URL_BSE + "/posts")
    .then(async (respuesta) => {
      // Para completar la tarea que les dejé para la casa, aquí hay una ayuda a la interrogante: ¿cómo hacemos para controlar el error o un aparente fallo en la consulta?
      // Claves: tener en cuenta la respuesta, segundo, la respuesta contiene un status code y un status text, tercero, puedes valerte de los conocimientos en Promise para resolverlo
      // Toda la solución a esta propuesta, está dentro de este then.
      // Replicar la solución para los demás métodos (optativamente, pueden desarrollar una función reutilizable)
      todosLosPosteos = await respuesta.json();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        html: "<p>Ocurrió un error al recuperar los posteos</p>",
        showCloseButton: true,
        showConfirmButton: false,
      });
    })
    .finally(() => {
      hideSpinner();
    });
};

/**
 * @abstract Recuperar una lista de objetos con el formato de todosLosPosteos desde un archivo local del proyecto
 */
const getAllUsers = async () => {
  showSpinner();
  fetch(URL_BSE + "/users")
    .then(async (respuesta) => {
      todosLosUsuarios = await respuesta.json();
    })
    .catch((error) => {
      console.log("--> Error", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        html: "<p>Ocurrió un error al recuperar los usuarios</p>",
        showCloseButton: true,
        showConfirmButton: false,
      });
    })
    .finally(() => {
      hideSpinner();
    });
};

/**
 * @abstract Recuperar una lista de objetos con el formato de todosLosPosteos desde un archivo local del proyecto
 */
const getAllComments = async (idPost) => {
  showSpinner();
  let comentarios = [];
  await fetch(URL_BSE + "/comments?postId=" + idPost)
    .then(async (respuesta) => {
      comentarios = await respuesta.json();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        html: "<p>Ocurrió un error al recuperar los comentarios</p>",
        showCloseButton: true,
        showConfirmButton: false,
      });
    })
    .finally(() => {
      hideSpinner();
      pintarComentarios(comentarios);
    });
};

/**
 * @abstract Nos permite pintar todos los elementos recuperados en nuestra variable global todosLosPosteos
 * @param {@abstract} list  Elementos que queremos mostrar en la UI.
 */
const pintarLista = (list = [], users = []) => {
  bodyContent.innerHTML = "";
  list.forEach((unPosteo) => {
    const unUsuario = users.find((u) => u.id === unPosteo.userId);
    const unRegistro = document.createElement("div");
    unRegistro.className = "mb-1 mt-1 float-left";
    unRegistro.innerHTML = `
          <p class="form-text mb-0">Título: ${unPosteo.title}</p>
          <div class="mb-0 alert alert-primary" role="alert">
            ${unPosteo.body}
          </div>
          <p class="form-text mb-0">Autor: ${unUsuario?.name || "Anónimo"}</p>
          <div style="text-align: right">
            <a href="#" onclick="javascript:getAllComments(${
              unPosteo.id
            })">Ver comentarios</a>
          </div>
          <hr>
      `;
    bodyContent.append(unRegistro);
  });
};

const pintarComentarios = (comenatrios = []) => {
  const bodyComments = document.createElement("div");
  if (comenatrios.length === 0) {
    bodyComments.innerHTML = "No hay comentarios sobre el post";
  }

  comenatrios.forEach((unComentario, index) => {
    const unRegistro = document.createElement("div");
    unRegistro.className = "alert alert-info";
    unRegistro.innerHTML = `
          <p class="form-text mb-0">${unComentario.name}</p>
          <div>
            ${unComentario.body}
          </div>
      `;
    bodyComments.append(unRegistro);
  });

  Swal.fire({
    title: "Comenatrios realizados sobre el post",
    html: bodyComments,
    showCloseButton: true,
    showConfirmButton: false,
  });
};

/**
 * @abstract Esta función es la que nos permita "inicializar" aspectos generales de nuestra página, por ejemplo, recuperar una lista de todosLosPosteos y mostrarlos por pantalla (unificamos la funcionalidad de las dos funciones definidas anteriormente)
 */
const inicializarPagina = async () => {
  await getAllUsers();
  await getAllPosts();
  pintarLista(todosLosPosteos, todosLosUsuarios);
};

/**
 * @abstract Invocamos a la función que inicializa todos los aspectos negerales necesarios para nuestra UI y dar una UX confortable para el cliente
 */
inicializarPagina();
