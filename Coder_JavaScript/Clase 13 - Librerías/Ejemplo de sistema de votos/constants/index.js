// Representación de los candidatos
let candidatos = candidatosMock.map((unCandidato) => {
  return new Candidato(
    unCandidato.id,
    unCandidato.partido,
    unCandidato.nombre,
    unCandidato.URLImagen,
    unCandidato.backgroundColor,
    unCandidato.tratamiento
  );
});

const LOCAL_STORAGE_NAME = "escrutinios";

const actualizarListaEnStorage = (list = []) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};

const recuperarListaEnStorage = () => {
  const recuperados = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  if (recuperados) {
    return recuperados.map((e) => {
      return new Escrutinio(
        candidatos.find((c) => c.nombre == e.candidato.nombre),
        e.votos
      );
    });
  }
  return [];
};

// Representación del escrutinio
let escrutinios = recuperarListaEnStorage();
