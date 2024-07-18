// Archivo de código fuente principal, contiene todas las funcionalidades más generales y transversales a las funcionalidades del pryecto.
let contacts = [];
const formulario = document.getElementById("contactForm");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = crearContacto();
  if (result) {
    console.log("--> Perfecto, añadiste un nuevo contacto <--");
    formulario.reset();
  } else {
    console.log("--> Lamentablemente no añadiste un nuevo contacto <--");
  }
  return result;
});

function crearContacto() {
  const apellidos = document.getElementById("surname").value;
  const nombres = document.getElementById("name").value;
  const contacto = document.getElementById("phoneNumber").value;
  const correo = document.getElementById("email").value;

  const unContacto = new Contacto(apellidos, nombres, contacto, correo);

  contacts.push(unContacto);
  pintarLista(contacts);
  return true;
}

// Pintar la lista de contactos
function pintarLista(collection = []) {
  let bodyList = document.getElementById("contactList");
  bodyList.innerHTML = "";
  collection.forEach((element) => {
    let record = document.createElement("div");
    record.setAttribute("class", "alert alert-info mb-20");
    record.setAttribute("role", "alert");
    record.innerHTML = `
          <p class="fw-bold mb-0">${element.toString()}</p>
          <p class="fw-medium mb-0">${element.contacto}</p>
          <p class="fw-medium mb-0">${element.correo}</p>
        `;
    bodyList.append(record);
  });
}
