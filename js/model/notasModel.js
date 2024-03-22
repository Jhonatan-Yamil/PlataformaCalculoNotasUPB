class notasModel{
    constructor(){
        this.materiasList = [];
    }
    addMateria(materia) {
        this.materiasList.push(materia);
        console.log('Materia agregadaaaaaaaa:', materia);
      }
    
    getMateriasList() {
        return this.materiasList;
    }
}