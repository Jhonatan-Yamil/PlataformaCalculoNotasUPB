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
}