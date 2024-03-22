const Materia = require('./Materia');

class BaseDeDatosMaterias {
  constructor() {
    this.materias = [];
    // Lógica para cargar las materias desde la base de datos
  }
  
  // Método para buscar materias por nombre
  buscarMaterias(nombre) {
    return this.materias.filter(materia => materia.nombre.startsWith(nombre));
  }
}

module.exports = BaseDeDatosMaterias;