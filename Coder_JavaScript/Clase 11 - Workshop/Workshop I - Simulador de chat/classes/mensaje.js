class Mensaje {
  constructor(remitente, destinatario, mensaje) {
    this.remitente = remitente;
    this.destinatario = destinatario;
    this.mensaje = mensaje;
    this.fecha = new Date();
  }

  toString = () => {
    return this.remitente;
  };
}
