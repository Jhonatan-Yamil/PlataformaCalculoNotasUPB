const Materia = require('./Materia');

class ListaMateriasSeleccionadas {
  constructor() {
    this.materias = [];
  }

  agregarMateria(materia) {
    this.materias.push(materia);
  }
}

module.exports = ListaMateriasSeleccionadas;
