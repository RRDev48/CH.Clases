class Paciente {
  constructor(
    numeroDocumento,
    apellidos,
    nombres,
    fechaNacimiento,
    obraSocial,
    numeroAfiliado,
    correoElectronico
  ) {
    this.numeroDocumento = numeroDocumento;
    this.apellidos = apellidos;
    this.nombres = nombres;
    this.fechaNacimiento = fechaNacimiento;
    this.obraSocial = obraSocial;
    this.numeroAfiliado = numeroAfiliado;
    this.correoElectronico = correoElectronico;
  }

  toString = () => {
    return this.apellidos + ", " + this.nombres;
  };
}
