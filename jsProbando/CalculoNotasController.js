const ListaMateriasSeleccionadas = require('./ListaMateriasSeleccionadas');

class CalculoNotasController {
  constructor(listaMateriasSeleccionadas) {
    this.listaMateriasSeleccionadas = listaMateriasSeleccionadas;
  }

  calcularNotas(notaEsperada) {
    // Lógica para calcular las notas mínimas necesarias
    // Devuelve un arreglo con las notas mínimas para cada materia no cursada
    return [];
  }
}

module.exports = CalculoNotasController;
