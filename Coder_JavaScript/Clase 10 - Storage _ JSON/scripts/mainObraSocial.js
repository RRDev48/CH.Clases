// Recuperamos todos los pacientes del mock preparado y los convertimos uno a uno en objetos instanciados a partir de una clase (esto es optativo para cada uno, yo lo hago para aprovechar las ventajas de una clase - el uso de mètodos -).
let obrasSociales = obrasSocialesMock.map((os) => {
  return new ObraSocial(os.id, os.nombre);
});

const isExisteObraSocial = (entities = [], identificador = 0) => {
  return entities.some((entity) => entity.id === identificador);
};

const getObraSocial = (entities = [], identificador = 0) => {
  return entities.find((entity) => entity.id === identificador);
};
