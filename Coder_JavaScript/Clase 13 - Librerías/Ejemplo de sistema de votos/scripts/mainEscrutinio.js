// Funcionalidad para pintar la tabla
let cuerpoTabla = document.getElementById("candidatosBodyContainer");
const pintarCards = (candidatos = [], escrutinio = []) => {
  cuerpoTabla.innerHTML = "";
  // Como en la pantalla debemos mostrar a todos los candidatos, sin importar si tienen votos o no, recorremos la colección de estos, y por cada uno de ellos, identificamos si posee un registro en el array de escrutinios con el método find
  candidatos.forEach((entity) => {
    // Si posee un registro, mostramos sus votos registrados, de lo contrario indicaremos "0 votos"
    const susVotos = escrutinio.find((e) => e.candidato.id == entity.id);
    const record = document.createElement("div");
    record.className = "card mb-3";
    record.style = "width: 200px";
    record.innerHTML = `
          <img
            src="${entity.URLImagen}"
            class="card-img-top"
            alt="Foto de ${entity.nombre}"
          />
          <div class="card-body" style="background-color: ${entity.color}">
            <h5 class="card-title">${entity.nombre}</h5>
            <p class="card-text">${entity.partido}</p>
          </div>
          <div class="p-1 bg-secondary text-center fs-4 fw-bold">
          <p>${susVotos ? susVotos.votos + " votos" : "0 votos"}</p>
          </div>
    `;
    cuerpoTabla.append(record);
  });
};

pintarCards(candidatos, escrutinios);
