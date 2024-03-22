class notasControler{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.view.bindAddInput(this.handleAddInput.bind(this));
        this.view.bindFinalizar(this.handleFinalizar.bind(this));
    }
    handleAddInput() {
        const materia = this.view.getMateria();
        if (materia) {
            this.model.addMateria(materia); // Agregar materia al modelo
            this.view.materiasList = this.model.getMateriasList();  
            this.view.displayMateriasList(); // Actualizar la vista con la nueva lista de materias
            console.log('Materia agregada:', materia);
        }
    }
    handleFinalizar() {
        if (this.model.getMateriasList().length > 0) {
            // Mostrar inputs para notas
            this.view.displayMultipleMateriasInputs();
        } else {
            alert('Debes agregar al menos una materia.');
        }
    }

}