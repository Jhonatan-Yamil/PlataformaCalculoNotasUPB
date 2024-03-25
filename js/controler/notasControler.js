class notasControler{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.view.bindAddInput(this.handleAddInput.bind(this));
        this.view.materiasList = this.model.getMateriasList();
        this.view.bindFinalizar(this.handleFinalizar.bind(this));
    }
    handleAddInput() {
        const materia = this.view.getMateria();
        if (materia) {
            this.model.addMateria(materia); // Agregar materia al modelo
            this.view.materiasList = this.model.getMateriasList();  
            this.view.displayMateriasList(); // Actualizar la vista con la nueva lista de materias
            this.view._resetInput();
        } else {
            alert('Debes ingresar un nombre de materia válido.');
        }
    }
    handleFinalizar() {
        if (this.model.getMateriasList().length > 1) {
            // Mostrar inputs para notas
            console.log("estas en multiple");
            this.view.displayMultipleMateriasInputs();
        } else {
            this.view.displaySingleMateriaInputs();
        }
    }

}