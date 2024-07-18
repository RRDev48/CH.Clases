class Escrutinio {
  constructor(entity, votos = 0) {
    this.candidato = entity;
    this.votos = votos;
  }

  toString = () => {
    return this.candidato.toString() + " - " + this.votos;
  };
}
