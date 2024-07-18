class Paciente {
  constructor(
    numeroDocumento,
    apellidos,
    nombres,
    obraSocial,
    numeroAfiliado,
    correoElectronico
  ) {
    this.numeroDocumento = numeroDocumento;
    this.apellidos = apellidos;
    this.nombres = nombres;
    this.obraSocial = obraSocial;
    this.numeroAfiliado = numeroAfiliado;
    this.correoElectronico = correoElectronico;
  }

  toString = () => {
    return this.apellidos + ", " + this.nombres;
  };
}
