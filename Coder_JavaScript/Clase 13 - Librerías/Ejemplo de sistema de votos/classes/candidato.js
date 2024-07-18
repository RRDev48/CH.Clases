class Candidato {
  constructor(id, partido, nombre, URLImagen, color, tratamiento) {
    this.id = id;
    this.partido = partido;
    this.nombre = nombre;
    this.URLImagen = URLImagen;
    this.color = color;
    this.tratamiento = tratamiento.toUpperCase();
  }

  toString = () => {
    return this.nombre + " por: " + this.partido;
  };
}
