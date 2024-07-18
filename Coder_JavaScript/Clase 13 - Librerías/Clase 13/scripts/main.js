console.log("--> Bienvenidos a la clase 13 - Librerías <--");

const MY_SEARCH_FORM = document.getElementById("searchForm");
MY_SEARCH_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const TERMINO = MY_SEARCH_FORM.children[1].value;
  console.log("-> Valor del input recuperado", { TERMINO });
  // Uso de Toastify
  // Parte superior-izquierda
  /* Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast(); */

  // Parte inferior-izquierda
  /* Toastify({
    text: "Probando toast!",
    duration: 3000,
    gravity: 'bottom',
    position: 'left'
}).showToast(); */

  // Abrir un sitio cualquiera
  /* Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast(); */
  if (TERMINO == "") {
    // Simulamos un Contrato de términos y condiciones
    /* Swal.fire({
      title: "¡Aceptas nuestras condiciones?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Acepto",
      denyButtonText: "No acepto",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Aceptaste nuestros términos!",
          "Bienvenid/a a nuestra comunidad",
          "success"
        );
      } else if (result.isDenied) {
        Swal.fire(
          "Lastima que no te quieras sumar a nuestra comunidad",
          "",
          "info"
        );
      }
    }); */
    /* Swal.fire({
      icon: "info",
      title: "Quieres realizar una búsqueda",
      text: "Para filtrar la tabla, primero debes ingresar algo en el input.",
      showConfirmButton: false,
      timer: 3000
    }); */
  }
});

/* Swal.fire({
  icon: "warning",
  title: "Te falta iniciar sesión",
  text: "No puedes acceder al sitio sin antes ingresar tus credenciales!",
  footer:
    '<a href="./pages/ingresar.html">Ve a la página de inicio de sesión</a>',
}); */

//validateSession();

const LUXON = luxon.DateTime;
console.log(LUXON);

let miCumpleanos = LUXON.local(1989, 5, 27);
/* console.log(miCumpleanos);

console.log(LUXON.fromISO("1989-05-27").toString());
console.log(LUXON.fromISO("1989-05-27T05:30:00").toString());
console.log(miCumpleanos.daysInMonth);

console.log(miCumpleanos.toLocaleString()); // 25/1/2022
console.log(miCumpleanos.toLocaleString(LUXON.DATE_FULL)); // 25 de enero de 2022
console.log(miCumpleanos.toLocaleString(LUXON.TIME_SIMPLE)); // 12:51

console.log(miCumpleanos.setLocale("en").toLocaleString(LUXON.DATE_FULL)); */

const dt = LUXON.now();

console.log(dt.toLocaleString(LUXON.DATETIME_SHORT));

const fechaSumada = dt.plus({ minutes: 35 });
console.log(fechaSumada.toLocaleString(LUXON.DATETIME_SHORT));
// 25/1/2022 19:36

const fechaRestada = dt.minus({ month: 2 });
console.log(fechaRestada.toLocaleString(LUXON.DATETIME_SHORT));
// 15/11/2021 14:21


const Interval = luxon.Interval

const now = LUXON.now()
/* const later = LUXON.local(2022, 1, 26) */
const i = Interval.fromDateTimes(miCumpleanos,now)

console.log( i.length('days') ) // 0.3905736111111111
console.log( i.length('hours') ) // 9.373766666666667
console.log( i.length('minutes') ) // 562.426
console.log( i.length('months') ) // 
console.log( i.length('years') ) // 