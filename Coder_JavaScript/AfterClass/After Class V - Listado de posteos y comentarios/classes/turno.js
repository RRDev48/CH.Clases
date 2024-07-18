class Turno {
    // ¿Cómo hacemos si qieremos volver una propiedad "privada", es decir que no se pueda acceder a su contenido desde fuera de la clase?
    constructor(id, orden, paciente, fechaTurno, profesional, atendido = false) {
      this.id = id;
      this.orden = parseInt(orden);
      this.paciente = paciente;
      this.fechaTurno = fechaTurno;
      this.profesional = profesional;
      this.fechaRegistro = new Date().toLocaleDateString();
      this.atendido = atendido;
    }
  
    toString = () => {
      return this.orden.toString() + " - " + this.paciente.toString();
    };
  }