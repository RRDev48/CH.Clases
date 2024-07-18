// Funcionalidad para pintar la tabla
let cuerpoTabla = document.getElementById("candidatosBodyContainer");

/**
 *
 * @abstract Renderiza de forma dinámica una lista de cards con la información de los candidatos
 * @param {*} entities colección de elementos para mostrar en pantalla
 */
const pintarCards = (entities = []) => {
  cuerpoTabla.innerHTML = "";
  entities.forEach((unCandidato) => {
    const record = document.createElement("div");
    record.className = "card mb-3";
    record.style = "width: 200px";
    record.innerHTML = `
          <img
            src="${unCandidato.URLImagen}"
            class="card-img-top"
            alt="Foto de ${unCandidato.nombre}"
          />
          <div class="card-body" style="background-color: ${unCandidato.color}">
            <h5 class="card-title">${unCandidato.nombre}</h5>
            <p class="card-text">${unCandidato.partido}</p>
          </div>
          <div class="p-1">
          <button class="btn btn-primary float-end" onclick="javascript:agregarVoto(${
            unCandidato.id
          });">${unCandidato.tratamiento == "M" ? "Votalo" : "Votala"}</button>
          </div>
    `;
    cuerpoTabla.append(record);
  });
};

// Al cargar el archivo, lo primero que haremos es invocar ésta función para pintar en pantalla las tarjetas de los candidatos
pintarCards(candidatos);

/**
 *
 * @param {*} key Campo que representa de forma única a un elemento dentro de la colección
 * @param {*} identifiers colección de elementos represetada únicamente por los IDs de una colección más amplia.
 * @returns La posisicón de un elemento si lo encuentra o -1 en caso contrario
 */
const getIndex = (key, identifiers = []) => {
  let findedIndex = -1;
  for (let index = 0; index < identifiers.length; index++) {
    if (identifiers[index] == key) {
      findedIndex = index;
      break;
    }
  }
  return findedIndex;
};

/**
 *
 * @abstract Esta funcionalidad permite agregar un voto a un candidato a los registros de votos emitidos dentro del simulador
 * @param {*} id Identificador único de un Candidato
 */
const agregarVoto = (id) => {
  // 1) Identificamos al candidato a partir de su identificador único (como en el carrito de compras, un producto)
  const unCandidato = candidatos.find((entity) => entity.id == id);
  if (unCandidato) {
    // Para actualizar  la cantidad de votos que posee el candidato, es necesario saber enq ue posición del array se encuentra
    const index = getIndex(
      id,
      escrutinios.map((e) => e.candidato.id)
    );
    // Si el candidato ya posee un registro en el array, actualizamos (reemplazando) en su posición original, por el valor de los votos actual con el nuevo conteo de votos (ya que los registros no se deben repetir, como en el carrito de compras los nombres de los productos)
    if (index !== -1) {
      escrutinios[index].votos = escrutinios[index].votos + 1;
    } else {
      // Creamos un nuevo objeto que representa al candidato  y a sus votos (como en el carrito de compras un detalle de factura)
      const entity = new Escrutinio(unCandidato, 1);
      escrutinios.push(entity);
    }
    // Una vez que actualizamos la lista, debemos re-escribir sus datos en el local storage para ver reflejados sus cambios en la página de reusltados al recargarla.
    actualizarListaEnStorage(escrutinios);
    // Emitimos una alerta para que el usaurio tenga conocimiento de que consiguió emitir su voto (en el caso del carrito de compras, añadió un producto a su compra)
    Toastify({
      text: "Voto emitido!",
      duration: 2000,
      className: "border-rounded",
      style: {
        background: `${unCandidato.color}`,
      },
    }).showToast();
  } else {
    alert("Candidato/a " + nombre + " no encontrado/a!");
  }
};