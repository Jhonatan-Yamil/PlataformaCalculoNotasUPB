const BaseDeDatosMaterias = require('./BaseDeDatosMaterias');
const ListaMateriasSeleccionadas = require('./ListaMateriasSeleccionadas');
const Materia = require('./Materia');

class BusquedaMateriasController {
  constructor(baseDeDatosMaterias, listaMateriasSeleccionadas) {
    this.baseDeDatosMaterias = baseDeDatosMaterias;
    this.listaMateriasSeleccionadas = listaMateriasSeleccionadas;
  }

  buscarMaterias(nombre) {
    return this.baseDeDatosMaterias.buscarMaterias(nombre);
  }

  seleccionarMateria(materia) {
    this.listaMateriasSeleccionadas.agregarMateria(materia);
  }
}

module.exports = BusquedaMateriasController;
