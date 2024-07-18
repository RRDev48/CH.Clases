/**
 *
 * @abstract Devuelve un número pseudoaleatorio comprendido entre 0 y un límite superior proporcionado.
 * @param {number} limite Límite superior al cual queremos alcanzar con el rango
 * @returns Numero pseudoaleatorio entero entre el 0 y el [limite]
 */
function createPseudoaleatorio(limite = 10000) {
  return Math.round(Math.random() * (limite + 1));
}

/**
 *
 * @abstract Devuelve un número pseudoaleatorio comprendido dentro de un rango proporcionado.
 * @param {number} minimo Límite inferior del rango
 * @param {number} maximo Límite superior del rango
 *
 * @returns Numero pseudo-aleatorio entero entre el [minimo] y el [maximo]
 */
function createPseudoaleatorioEnRango(minimo = 0, maximo = 100) {
  let min = minimo;
  let max = maximo;
  if (minimo > maximo) {
    min = maximo;
    max = minimo;
  }
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/**
 *
 * @abstract Permite generar un número pseudoaleatorio que represente de forma individual a un registro dentro de una colección de elementos
 * @param {[]} coleccion Conjunto de elementos sobre los cuales se establecerá un nuevo número pseudo-aleatorio que no se repite de entre la colección re valores recibidos
 * @returns Numero pseudo-aleatorio no repetido dentro de la colección recibida por parámetro
 */
function generarLegajo(coleccion = []) {
  let numeroPseudoAleatorio = createPseudoaleatorio();
  while (coleccion.some((elemento) => elemento === numeroPseudoAleatorio)) {
    numeroPseudoAleatorio = createPseudoaleatorio();
  }
  return numeroPseudoAleatorio;
}

/**
 *
 * @abstract Permite crear un valor con formato Date a partir de un rango de años dentro de los cuales se generará el valor devuelto
 * @param {number} anioInicio Año de límite inferior para la secuencia
 * @param {number} anioFin Año de límite superior para la secuencia
 */
function generarFechaAleatoria(anioInicio = 1950, anioFin = 2000) {
  let startYear = anioInicio;
  let endYear = anioFin;
  if (anioInicio > anioFin) {
    startYear = anioFin;
    endYear = anioInicio;
  }
  const year = createPseudoaleatorioEnRango(startYear, endYear);
  // 1 - Día uno, 31 - Día 31.
  const day = createPseudoaleatorioEnRango(1, 31);
  // 0 - Enero, 11 - Diciembre
  const month = createPseudoaleatorioEnRango(0, 11);
  return new Date(year, month, day);
}

/**
 *
 * @abstract Permite conocer la diferencia entre dos fecha.
 *
 * @param {Date} fecha Fecha sobre la cual queremos calcular su diferencia con respecto a la fecha actual del sistema
 * @returns Diferencia entre la fecha ingresada y la actual del sistema, expresada en años, meses, días y días hasta la fecha
 */
function calcularDiferencia(fecha = new Date()) {
  //https://es.stackoverflow.com/questions/545606/obtener-la-edad-a-partir-de-la-fecha-de-nacimiento-con-typescript
  // Este número es: Milisegundos * segundos * minutos * horas
  const HOY = new Date();
  // 1000 milisegundos, 60 segundos, 60 minutos, 24 horas (parámetros en un día)
  const dayDefinition = 1000 * 60 * 60 * 24; // Cantidad de milisegundos que hay en un día
  // ABS devuelve el valor absoluto de un número [N] --> si este es negativo, lo devuelve cambiado de signo.
  const diferencia = Math.ceil(Math.abs(HOY - fecha) / dayDefinition); // Cantidad de días que hay de diferencia

  const anios = Math.floor(diferencia / 365.25); //Años de diferencia
  const diasRestantes = Math.floor(diferencia - anios * 365.25); // Días restántes hasta alcanzar la fecha
  const meses = Math.floor((diasRestantes / 365.25) * 12); // Cantidad de meses entre los días restantes
  const dias = Math.floor(
    diferencia - (anios * 365.25 + (meses / 12) * 365.25)
  );
  // Los valores son aproximaciones que generalizan para el mismo número de días por mes sin considerar que algunos meses poseen 28 días y otros 31
  return {
    anios, // Años de diferencia
    meses, // Diferencia expresada en meses
    dias, // Diferencia expresada en días
    diasRestantes, // Días restantes
  };
}

/**
 *
 * @abstract Permite conocer la cantidad de años entre la fecha actual del sistema y la proporcionada.
 *
 * @param {Date} fecha Fecha sobre la cual queremos calcular su diferencia con respecto a la fecha actual del sistema
 * @returns Diferencia entre la fecha ingresada y la actual del sistema, expresada en años.
 */
function calcularDiferenciaEnAnios(fecha = new Date()) {
  return calcularDiferencia(fecha).anios;
}

const parseDateWithDashesToISOStringFormat = (dateWithDashes = "") => {
  const SEPARATOR = "-";
  if (!dateWithDashes.includes(SEPARATOR)) {
    return "";
  }
  const arguments = dateWithDashes.split(SEPARATOR);
  const date = new Date(
    parseInt(arguments[0]),
    parseInt(arguments[1]) - 1,
    parseInt(arguments[2])
  );
  return date.toISOString();
};
