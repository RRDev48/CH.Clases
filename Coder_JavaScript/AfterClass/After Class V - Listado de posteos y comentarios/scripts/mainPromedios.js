console.log("--> Hola, estás calculando promedios <--");

// Variable GLOBAL
let misNumeros = [];
let promedio = 0;

// 1) Permitir al usuario ingresar un valor por un input.
const miInput = document.getElementById("numero");
const miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  promedio = 0;
  const unNumero = parseInt(miInput.value);
  if (isNaN(unNumero)) {
    return false;
  }
  // 2) Agregar el número a un array
  // [10, 20]
  misNumeros.push(unNumero);
  //console.table(misNumeros);
  promedio = calcularPromedio(misNumeros);
  // 4) Mostrar el promedio calculado
  alert("El promedio de los números es: " + promedio.toString());
});

// 3) Calcular el promedio
const calcularPromedio = (numeros = []) => {
  // Variable LOCAL
  //[10, 20]
  if (numeros.length === 0) {
    return 0;
  }
  let sumaTotal = 0;
  numeros.forEach((numero) => {
    sumaTotal = sumaTotal + numero;
  });
  return sumaTotal / numeros.length;
};
