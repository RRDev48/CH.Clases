console.log("Hola, bienvenidos/as a la clase 5 de Javascript");
console.log("Hoy presentamos -> Objetos 👓");

// Ejemplo 1: Definición de caracteristicas para un objeto. Tenemos que pensar en que ddatos neesitamos conocer de algo, por ejemplo de una persona, a continuación listaremos algunas caracteristicas que nos pueden interesar saber:
/* let DNI;
let apellidos;
let nombres;
let edad;
let altura;
let peso;
let generoBiologico;
let tipoSangre; */

// Ahora bien, pensemos en que no es una sola persona a la que requiriéramos tener sus datos levantados en memoria. Si yo necesitara, por ejemplo, 3 personas y sus datos en memoria, necesitaría duplicar en las líneas del código, 3 grupos de las mismas variables con diferentes nombres para poder mantener los datos de estas 3 personas, y así también con 50 personas. La creación del concepto de objetos surge por la necesidad de evitar tantas líneas de código duplicadas y la incertidumbre de cuántas deberías tener creadas en el código (por las dudas).
// Paciente 1:
/* let DNI1;
let apellidos1;
let nombres1;
let edad1;
let altura1;
let peso1;
let generoBiologico1;
let tipoSangre1;

// Paciente 2:
let DNI2;
let apellidos2;
let nombres2;
let edad2;
let altura2;
let peso2;
let generoBiologico2;
let tipoSangre2;

// paciente 3:
let DNI3;
let apellidos3;
let nombres3;
let edad3;
let altura3;
let peso3;
let generoBiologico3;
let tipoSangre3;

//...

// Paciente 50:
let DNI50;
let apellidos50;
let nombres50;
let edad50;
let altura50;
let peso50;
let generoBiologico50;
let tipoSangre80; */

// Crear un paciente a partir de una estructura (PLANTILLA):
// Aquí estamos creando un objeto llamado unPaciente, con la estructura de un Object y los atributos que definimos dentro de las {}.
/* let unPaciente = {
  DNI: "11222333",
  apellidos: "Cosme",
  nombres: "Fulanito",
  edad: 36,
  altura: 170,
  peso: 72,
  generoBiologico: "Masculino",
  tipoSangre: "A+",
};

// Ejemplo 2: Cómo podemos ver los datos dentro del objeto
// Podemos ver el objeto completo
console.log("--> El objeto contiene todos estos datos", unPaciente);
// Nota que en un Alert, no es tan simple ver los datos de dentro del objeto, como lo es con la consola.
//alert("--> El objeto contiene todos estos datos " + unPaciente);

// Podemos ver los nombres
console.log("--> El paciente se llama ", unPaciente.nombres);
//alert("--> El paciente se llama " + unPaciente.nombres);

// Podemos ver los apellidos
console.log("--> El paciente se apellida", unPaciente["apellidos"]);
//alert("--> El paciente se apellida " + unPaciente["apellidos"]); */

// Ejemplo 3: Asignación de valores, podemos asignarle valores específicos a cada una de lass propiedades del objeto, y volver a re-escribirlas nuevamente en cuanto lo querramos.
/* let unPaciente = {
  DNI: "11222333",
  apellidos: "Cosme",
  nombres: "Fulanito",
  edad: 36,
  altura: 170,
  peso: 72,
  generoBiologico: "Masculino",
  tipoSangre: "A+",
};

// Aquí veremos dos formas diferentes de modificar el contenido de una propiedad, ya sea ocn el (.) punto, o con los (["propiedad"]) corchetes y el nombre de la propiedad entre ("") comillas.
// En el ejemplo podemos ver como podemos usar el prompt o asignar el valor directamente por código fuente. Aún no tenemos conectado nuestro JS con INPUTS del lado del usaurio, pero esto lo veremos más adelante, por ahora solo contamos con éstas herramientas.
unPaciente.apellidos = prompt("¿Cuáles son los apellidos del paciente?");
unPaciente["nombres"] = prompt("¿Cuales son los nombres del paciente?");
unPaciente["DNI"] = "44555666";
unPaciente.edad = 33;

console.log("--> Los datos actualizados del paciente son", unPaciente); */

// Ejemplo 4: Definición de un objeto con datos inicializados con valores por DEFAULT para sus propiedades. Es como crear un objeto al que aún no le asignaste valores concretos a sus propiedades, luego durante la ejecución de tú código, vas a conseguir asignarle valores a la propiedades una a una como lo vimos en el ejemplo anterior.
// Por ahora, como no estamos suando Clases, tenemos que asignar el valor por DEFAULT, pero cuando avancemos con las clases, vamos a ver cómo dejar las propiedades sin valores asignados.
/* let unPaciente = {
  DNI: undefined,
  apellidos: undefined,
  nombres: undefined,
  edad: undefined,
  altura: undefined,
  peso: undefined,
  generoBiologico: undefined,
  tipoSangre: undefined,
};

console.log("--> Los datos del paciente con valores inicialidados por DEFAULT son", unPaciente); */

// Ejemplo 5: Definición de una función constructura para un objeto, esta forma de definir objetos, nos permite reutilizar la porción de código que define la estructura de un objeto y con esta función constructora, crear tantos objetos como necesitemos sin necesidad de replicar código.
/* function Paciente(dni, apellidos, nombres, edad, altura, peso, genero, tipo, obraSocial) {
  this.dni = dni;
  this.apellidos = apellidos;
  this.nombres = nombres;
  this.edad = edad;
  this.altura = altura;
  this.peso = peso;
  this.generoBiologico = genero;
  this.tipoSangre = tipo;
  this.obraSocial = obraSocial;
}

// A partir de esta línea y para abajo podemos tener acceso a la función constructora.
let pacienteUno = new Paciente(
  "1122233",
  "krujoski",
  "Saúl",
  undefined,
  172,
  72,
  "Masculino",
  undefined
);

console.log("--> Los datos del paciente 1 son", pacienteUno
);

let pacienteDos = new Paciente(
  "44555666",
  "Cosme",
  "Priscilla",
  24,
  183,
  65,
  "femenino",
  undefined
);

console.log("--> Los datos del paciente 2 son", pacienteDos
); */

// Ejemplo 6: Ejemplo de definición de métodos para un objeto.
/* function Producto(nombre, precio, cantidad) {
  // Propiedades
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.cantidad = parseInt(cantidad);
  // Aqquí tenemos dos formas de asignarle el valor booleano a esta propiedad
  // Podemos aprovechar el valor recibido en el parámetro cantidad
  this.hayInvenatrio = !!parseInt(cantidad);
  // Vamos a explicar que significa esto !!parseInt(cantidad)
  // En JS todo dato puede ser "casteado" en un booleano. En el caso de los números, todo valor superior a 0 es true, y otros casos es false. Teniendo en cuenta esto, ahora veremos lo siguiente:
  // parseInt(cantidad) es un numero entero cualquiera --> (10)
  // !parseInt(cantidad) --> es un valor booleano, si el número es 10, se convierte en false, si es 0 se convierte en true.
  // Pero nosotros necesitamos el valor equivalente real, si ingresé 10 quiero que sea true, si ingresé 0 quiero que sea false. Por ello es que agregamos dos negaciones !!
  // !!parseInt(cantidad) --> lo que conseguimos con la !! es !(convertir el número a su valor booleano opuesto) y luego ! nuevamente para que ese booleano opuesto, sea el booleano que realmente representa.

  // O bien podemos definir un parámetro como (hayInventario) y en este pasar desde la función constructora a partir de la palabra reservada new. Tener en cuenta que esta segunda opción nos "obliga" a manejar este dato y su valor durante la carga de los datos que el usuario indique.
  //this.hayInvenatrio = hayInventario;
  

  // Métodos
  this.toString = function () {
    return this.nombre;
  };

  this.incrementarStock = (cantidadIncrementada) => {
    this.cantidad = this.cantidad + parseInt(cantidadIncrementada);
  };

  this.comprar = (cantidadComprada) => {
    this.cantidad = this.cantidad - parseInt(cantidadComprada);
  };
}

// vamos a hace rel proceso de carga de un producto con el uso del prompt
let nombre = prompt("¿Cómo se llama el producto?");
let precio = prompt("¿Cuánto cuesta?");
let cantidad = prompt("¿Qué cantidad tienes en stock?");
// Necesitamos las tres variables individuales para poder pasarlos luego a la función constructora.
// Aquí está la parte del código específico de la que hablamos arriba cuando decidimos que no usaríamos la expresión !!parseInt(cantidad). Y nota como es necesario añadir este control en cada carga que hagamos para poder pasar el valor correcto.
//let hayStock = false;
//if (parseInt(cantidad) > 0) {// este IF es equivalente a !!parseInt(cantidad)
//  hayStock = !hayStock;
//}
// una vez definido el valor de hayStock, lo deberíamos pasar como parámetro.
let unProducto = new Producto(nombre, precio, cantidad);
console.log("--> Los valores que cargaste para el producto son", unProducto); */

// Ejemplo 7: Uso de las instrucciones IN y FOR-IN
/* function Paciente(dni, apellidos, nombres, edad) {
  this.dni = dni;
  this.apellidos = apellidos;
  this.nombres = nombres;
  this.edad = edad;
}

let pacienteUno = new Paciente(
  "1122233",
  "krujoski",
  "Saúl",
  21,
);

// Vamos a usar el IN: nos permite evaluar como si de un condicional se tratara, si una propiedad o método, se encuentra dentro de un objeto.
console.log("--> ¿Existe la propiedad dni dentro del objeto?", {
  resulltado: "dni" in pacienteUno
});
console.log("--> ¿Existe la propiedad obraSocial dentro del objeto?", {
  resulltado: "obraSocial" in pacienteUno
});

// Usar el FOR-IN: nos permite aprovecar una estructura repetitiva para conocer todas y cada una de las propiedades del objeto y poder reccorrerlas.
for (const propiedad in pacienteUno) {
  console.log("--> La propiedad (" + propiedad + ") tiene el valor: " + pacienteUno[propiedad]);
} */

// Ejemplo 8: Definición de una clase
/* class Paciente {
  // Constructor: recuerda que es el equivalente a la función constructora que vimos anteriormente.
  constructor(dni, apellidos, nombres, edad) {
    this.dni = dni;
    this.apellidos = apellidos;
    this.nombres = nombres;
    this.edad = edad;
  }
}

let pacienteUno = new Paciente("1122233", "krujoski", "Saúl", 21); */

// Ejemplo 9: Declaración de métodos dentro de una clase
/* class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
    this.hayInvenatrio = !!parseInt(cantidad);
  }

  toString() {
    return this.nombre;
  }

  incrementarStock(cantidadIncrementada) {
    this.cantidad = this.cantidad + parseInt(cantidadIncrementada);
  }

  comprar(cantidadComprada) {
    this.cantidad = this.cantidad - parseInt(cantidadComprada);
  }
}

let unProducto = new Producto("Papa", 400, 50);
console.log("--> Los datos del prodcuto son", unProducto);
console.log("--> El nombre del prodcuto es " + unProducto.toString());
unProducto.incrementarStock(10);
console.log("--> Compré 10 kilos más de papa, y ahora tengo", unProducto);
unProducto.comprar(40);
console.log("--> Vendí 40 kilos de papa, y ahora tengo", unProducto); */
