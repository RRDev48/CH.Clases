// Sintaxis setTimeout(fn,time): esta función ejecuta una "fn" proporcioanda por parámetro luego de "time" tiempo. Se ejecuta una única vez este setTimeout()
// fn es una función, la podemos definir con function, con arrow function o una anonymous function.
// time es el tiempo que queremos esperar hasta ejecutar fn.

// Ejemplo 1: Uso de setTimeout() para ejecutar una acción luego de un tiempo determinado. Por ejemplo, podemos suponer un carrito de compras, un e-commerce o similar, donde el usuario puede contar con un tiempo (suponer 60 segundos) para cancelar una compra luego de precionar el boton "Confirmar compra".
/* setTimeout(() => {
  console.log("--> Aquí iría el proceso para cancelar la compra <--");
}, 60 * 1000); */

// Ejemplo 2: Suponer este código una ejecución síncrona, entre estas funcionalidades síncronas tenemos la invocación a un setTimeout, lo que hará este es añadir a una CALL QUEGUE (o pila de espera), una funcionalidad a ejecutarse luego de un tiempo determinado. Es por ello que no vemos los console.log() en el mismo orden en el que están escritos, porque el segundo tiene un "atraso" de 2 segundos.
/* console.log("Inicia proceso");

setTimeout(() => {
  console.log("Mitad de proceso");
}, 2 * 1000);

console.log("Fin proceso"); */

// Ejemplo 3: Aquí veremos un proceso síncrono convencional (ejecución de una línea de código debajo de otra)
// Primero veremos las letras del "hola"
/* for (let letra of "hola") {
  console.log(letra);
}

// Luego veremos las letras del "mundo"
for (let letra of "mundo") {
  console.log(letra);
} */

// Ejemplo 4: Es un ejemplo similar al anterior, pero con ciclo, para demostrar como es que lo que define la ejecución es el orden en el cual se lanzan las ejecuciones de los diferentes setTimeout (de dentro de cada vuelta del ciclo for), y no el tiempo en sí (para este caso en particular que el tiempo de espera para cada uno de ellos es el mismo - al final del proyecto dejaré un código alternativo con un tiempo parametrizado).
/* for (let letra of "hola") {
  setTimeout(() => {
    console.log(letra);
  }, 2 * 1000);
}

for (let letra of "mundo") {
  setTimeout(() => {
    console.log(letra);
  }, 4 * 1000);
} */

// Ejemplo 5: Analizamos una call stack convencional (ejecución normal del programa - este código debe ir acompañado de la gráfica de la presentación donde análizamos los cinco pasos)
/* function multiply(x, y) {
  return x * y;
}

function printSquare(x) {
  let s = multiply(x, x);
  console.log(s);
}

printSquare(5); */

// Sintaxis setInterval(fn,time): esta función ejecuta una "fn" proporcioanda por parámetro luego de "time" tiempo. Se ejecuta indefinidamente, es ciclica (hasta que la suspendamos).
// De la misma forma que setTimeout(): fn es una función, la podemos definir con function, con arrow function o una anonymous function.
// time es el tiempo que queremos esperar hasta ejecutar fn.
// Ejemplo 6: Uso de setInterval() para ejecutar una acción cada cierto tiempo determinado. Por ejemplo, suponer que tenemos la página de una sala de chat y cada 1 segundos verificamos si tenemos mensajes nuevo para mostrarlo en la pantalla o bien indicar al usuario con una notificación.
/* setInterval(() => {
  // Aquí debemos ejecutar la funcionalidad de verificara si tenemos mensajes nuevos o no.
}, 1 * 1000); */

// Ejemplo 6.1: Cancelar la ejecución de un setTimeout() (ANTES DE QUE SE EJECUTARA). Esta funcionalidad nos permite cancelar una función definida dentro de un setTimeout, antes de que esta se ejecute (si el tiempo indicado se hagota ya no se puede cancelar la ejecución de fn porque ya fue ejecutada)
// Suponer el ejemplo 1, ahora podemos implementar una funcionalidad para suspender la compra que quedó en espera por 60 segundos.
/* const ID_PROCESO_COMPRA = setTimeout(() => {
  console.log("--> Aquí iría el proceso para cancelar la compra <--");
}, 60 * 1000);

const btn = document.getElementById("canclarCompra");
btn.addEventListener("click", (event) => {
  clearTimeout(ID_PROCESO_COMPRA);
}); */

// Ejemplo 6.2: Cancelar la ejecución de un setInterval(). Esta funcionalidad nos permite cancelar una función definida dentro de un setInterval. Sin importar cúantas veces se haya ejecutado.
// Suponer el ejemplo 6, ahora podemos implementar una funcionalidad para suspender la verificación de nuevos mensajes o pausar las notificaciones.
/* const ID_PROCESO_NOTIFICACION = setInterval(() => {
  // Aquí debemos ejecutar la funcionalidad de verificara si tenemos mensajes nuevos o no.
}, 1 * 1000);

const btn = document.getElementById("pausarNotificaciones");
btn.addEventListener("click", (event) => {
  clearInterval(ID_PROCESO_NOTIFICACION);
}); */

// Sintaxis new Promise(fn(resolve,reject)): esta función ejecuta una acción determinada dentro de su cuerpo según corresponda por los parámetros resolve,reject.
// resolve es una función que cambiará el estado de la promesa en fulfilled.
// reject es una función que cambiará el estado de la promesa en rejected.
// si la promesa no ejecuta resolve ni reject, la promesa se mantendrá en estado pending
// Ejemplo 7: Uso de promesas (analizamos sus estados). A continuación SIMULAMOS cómo obtener los tres estados diferentes.
// Evento sin respuesta --> estado pending
/* const eventoFuturo = () => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa, no se ejecuta resolve ni reject
  });
};
console.log(eventoFuturo()); // Promise { <pending> }

// Evento con respuesta favorable --> estado fulfilled
const eventoFuturoFavorable = () => {
  return new Promise((resolve, reject) => {
    resolve("Finalizamos todo ok!");
  });
};
console.log(eventoFuturoFavorable()); // Promise { <fulfilled> }

// Evento con respuesta desfavorale --> estado rejected
const eventoFuturoDesfavorable = () => {
  return new Promise((resolve, reject) => {
    reject("Algo no salió bien!")
  });
};
console.log(eventoFuturoDesfavorable()); // Promise { <rejected> } */

// Ejemplo 8: Manipular los resultados de una promesa a nuestra necesidad (SIMULACIÓN)
/* const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    if (res === true) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};

console.log(eventoFuturo(true)); // Promise { <fulfilled> 'Promesa resuelta' }
console.log(eventoFuturo(false)); // Promise { <rejected> 'Promesa rechazada' } */

// Ejemplo 9: Manipulación de los resultados de una promesa pero con un setTimeout para simular una espera por una respuesta
/* const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 4 * 1000);
  });
};

console.log(eventoFuturo(true)); // Promise { <fulfilled> }
console.log(eventoFuturo(false)); // Promise { <rejected> } */

// Ejemplo 10: Aprendemos a capturar los resultados de una promesa y decidir que acciones tomar
// donde .then((result) => {}) lo usamos para cuando esperamos que el resultado fuera recibido con la función resolve()
// donde .catch((error) => {}) lo usamos para cuando esperamos que el resultado fuera recibido con la función reject()
/* const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 3 * 1000);
  });
}; */

/* eventoFuturo(true).then((response) => {
  console.log(response); // Promesa resuelta
  // ACÁ HAGO LO NECESARIO PARA MOSTRAR ALGO EN LA PANTALLA
});

eventoFuturo(false).catch((error) => {
  console.log(error); // Promesa rechazada
  // ACÁ HAGO LO NECESARIO PARA MOSTRAR ALGO EN LA PANTALLA
}); */

// Ejemplo 11: Manipulación de los resultados de una promesa pero con un setTimeout (SIN saber su resultado previamente)
/* eventoFuturo(true)
  .then((response) => {
    console.log(response); // Promesa resuelta
  })
  .catch((error) => {
    console.log(error);
  });

eventoFuturo(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error); // Promesa rechazada
  }); */

// Ejemplo 12: Manipulación de los resultados de una promesa pero con un setTimeout (sabremos CÚANDO finaliza una promesa sin importar su estado)
/* eventoFuturo(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("La función 1 terminó sin importar su estado");
  });

  eventoFuturo(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("La función 2 terminó sin importar su estado");
  }); */

// Ejemplo 13: Simulamos la conexión con una API que nos devolverá una colección de elementos
// función que tras 3 segundo retorna un array de objetos. Simulamos los dos estados posibles, para ello definimos dos funciones para cada casso.
/* const BD = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 2, nombre: "Producto 2", precio: 2500 },
  { id: 3, nombre: "Producto 3", precio: 3500 },
  { id: 4, nombre: "Producto 4", precio: 3500 },
];

const pedirProductosOk = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 3 * 1000);
  });
};

const pedirProductosNoOk = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("No encontramos resultados para tú búsqueda.");
    }, 3 * 1000);
  });
};

// Inicializamos con un array vacío donde mantendremos los resultados de la respuesta simulada de la API.
let productos = [];

// Simulamos una respuesta favorable
pedirProductosOk()
  .then((res) => {
    productos = res;
    // Mostraremos los resultados en al consola (podemos implementar una función para mostrarlos por pantalla)
    console.table(productos);
  })
  .catch((error) => {
    console.error(error);
  });

// Simulamos una respuesta desfavorable
pedirProductosNoOk()
  .then((res) => {
    productos = res;
    // Mostraremos los resultados en al consola (podemos implementar una función para mostrarlos por pantalla)
    console.table(productos);
  })
  .catch((error) => {
    console.log(error);
  }); */

// Ejemplo 4 BIS: Ejemplo  alternativo con un tiempo parametrizado.
/* let index = 1;
for (let letra of "hola") {
  setTimeout(() => {
    console.log(letra);
  }, index * 1000);
  index++;
}

for (let letra of "mundo") {
  setTimeout(() => {
    console.log(letra);
  }, index * 1000);
  index++;
} */

// Te invito a cambiar la suggar syntax de index++ por un número aleatorio entre 1 y 10 por ejemplo.
// Resultado de la propuesta
/* for (let letra of "hola") {
  setTimeout(() => {
    console.log(letra);
  }, createPseudoaleatorioEnRango(1, 5) * 1000);
}

for (let letra of "mundo") {
  setTimeout(() => {
    console.log(letra);
  }, createPseudoaleatorioEnRango(1, 5) * 1000);
} */
