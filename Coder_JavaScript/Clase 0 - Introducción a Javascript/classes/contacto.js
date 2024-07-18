class Contacto {
  // Esto es un comentario de una sola línea
  /* Esto
    es un comentario
    en bloque */
  constructor(surname = "", name = "", phoneNumber = "", email = "") {
    this.apellidos = surname.trim();
    this.nombres = name.trim();
    this.contacto = phoneNumber.trim();
    this.correo = email.trim();
  }

  toString() {
    return this.apellidos.toUpperCase() + ", " + this.nombres.toUpperCase();
  }
}
