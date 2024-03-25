class notasModel{
    constructor(){
        this.materiasList = [];
    }
    addMateria(materia) {
        this.materiasList.push(materia);
      }
    
    getMateriasList() {
        return this.materiasList;
    }
    //ToDo, Hacer la conexion a base de datos y la logica para las notas
}
