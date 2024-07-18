/**
 *
 * @returns Numero pseudo-aleatorio entero entre el 0 y el 10000
 */
function createPseudoaleatorio(limite = 10000) {
  return Math.round(Math.random() * (limite + 1));
}

/**
 *
 * @param {*} coleccion Conjunto de elementos sobre los cuales se establecerá un nuevo número pseudo-aleatorio que no se repite de entre la colección re valores recibidos
 * @returns Numero pseudo-aleatorio no repetido dentro de la colección recibida por parámetro
 */
function generarLegajo(coleccion = []) {
  let numeroPseudoAleatorio = createPseudoaleatorio();
  while (coleccion.some((elemento) => elemento === numeroPseudoAleatorio)) {
    numeroPseudoAleatorio = createPseudoaleatorio();
  }
  return numeroPseudoAleatorio;
}
