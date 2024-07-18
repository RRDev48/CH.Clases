class Profesional {
  constructor(
    matriculaProfesional,
    apellidos,
    nombres,
    fechaNacimiento,
    especialidad,
    tratamiento
  ) {
    this.matriculaProfesional = matriculaProfesional;
    this.apellidos = apellidos;
    this.nombres = nombres;
    this.fechaNacimiento = fechaNacimiento;
    this.especialidad = especialidad;
    this.tratamiento = tratamiento;
  }

  toString = () => {
    return this.tratamiento + " " + this.apellidos + ", " + this.nombres;
  };
}
