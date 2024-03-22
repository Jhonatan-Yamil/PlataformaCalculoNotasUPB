class notasControler{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.view.bindAddInput(this.handleAddInput.bind(this));
        this.view.bindFinalizar(this.handleFinalizar.bind(this));
    }
    handleAddInput(materia) {
        // Agregar materia al Modelo
        this.model.addMateria(materia);
        // Actualizar la vista con la nueva lista de materias
        this.view.displayMateriasList();
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