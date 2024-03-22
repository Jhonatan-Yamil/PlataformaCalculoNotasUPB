class notasView {
    constructor() {

        //The root element
        this.app = this.getElement('#root');

        //Create title
        this.title = this.createElement('h1');
        this.title.textContent = 'Cálculo de notas UPB';

        // Create form
        this.form = this.createElement('form');

        //Create description
        this.description = this.createElement('p');
        this.description.textContent = 'Esta página calcula las notas que necesitas para conseguir tu nota deseada.';

        // Create container for inputs
        this.inputsContainer = this.createElement('div');

        // Create list for materias
        this.materiasList = [];

        // Create input for materia
        this.inputMateria = this.createElement('input');
        this.inputMateria.type = 'text';
        this.inputMateria.placeholder = 'Nombre de la materia';
        this.inputMateria.name = 'materia';

        // Create button for adding another input
        this.addInputButton = this.createElement('button');
        this.addInputButton.textContent = 'Agregar otro input';

        // Create button for finalizar
        this.finalizarButton = this.createElement('button');
        this.finalizarButton.textContent = 'Finalizar';

        this.form.append(this.inputMateria, this.addInputButton, this.finalizarButton);
        this.inputsContainer.append(this.inputMateria);

        // Append title, description, and form
        this.app.append(this.title, this.description, this.form);

        this._initLocalListeners();

    }

    _initLocalListeners() {
        // Add input for another materia
        this.addInputButton.addEventListener('click', (event) => {
            const materia = this.inputMateria.value;
            if (materia !== '') {
                this.materiasList.push(materia);
                this.inputMateria.value = ''; // Limpiar input
                this.displayMateriasList();
            }
        });

        // Finalizar button click
        this.finalizarButton.addEventListener('click', (event) => {
            if (this.materiasList.length === 1) {
                // Mostrar una materia con 3 inputs
                this.displaySingleMateriaInputs();
            } else if (this.materiasList.length > 1) {
                // Mostrar lista de materias con inputs
                this.displayMultipleMateriasInputs();
            }
        });
    }
    displayMateriasList() {
        // Limpiar lista de materias antes de mostrarla
        while (this.inputsContainer.firstChild) {
            this.inputsContainer.removeChild(this.inputsContainer.firstChild);
        }

        // Mostrar lista de materias
        this.materiasList.forEach((materia) => {
            const materiaElement = this.createElement('div');
            materiaElement.textContent = materia;
            this.inputsContainer.append(materiaElement);
        });
    }

    displaySingleMateriaInputs() {
        // Limpiar el contenedor de inputs antes de mostrar los nuevos
        while (this.inputsContainer.firstChild) {
            this.inputsContainer.removeChild(this.inputsContainer.firstChild);
        }

        // Crear los inputs para la materia seleccionada
        const materiaTitle = this.createElement('h2');
        materiaTitle.textContent = this.materiasList[0];

        const notaDeseadaLabel = this.createElement('label');
        notaDeseadaLabel.textContent = 'Nota deseada:';
        const notaDeseadaInput = this.createElement('input');
        notaDeseadaInput.type = 'number';

        const primerParcialLabel = this.createElement('label');
        primerParcialLabel.textContent = 'Nota primer parcial:';
        const primerParcialInput = this.createElement('input');
        primerParcialInput.type = 'number';

        const SegundoParcialLabel = this.createElement('label');
        SegundoParcialLabel.textContent = 'Nota segundo parcial:';
        const SegundoParcialInput = this.createElement('input');
        SegundoParcialInput.type = 'number';

        // Agregar los elementos al contenedor
        this.inputsContainer.append(
            materiaTitle,
            notaDeseadaLabel, notaDeseadaInput,
            primerParcialLabel, primerParcialInput,
            SegundoParcialLabel, SegundoParcialInput
        );
    }

    displayMultipleMateriasInputs() {
        // Limpiar el contenedor de inputs antes de mostrar los nuevos
        while (this.inputsContainer.firstChild) {
            this.inputsContainer.removeChild(this.inputsContainer.firstChild);
        }

        // Crear los inputs para cada materia en la lista
        this.materiasList.forEach((materia, index) => {
            const materiaTitle = this.createElement('h2');
            materiaTitle.textContent = materia;

            const notaMateriaLabel = this.createElement('label');
            notaMateriaLabel.textContent = 'Nota materia:';
            const notaMateriaInput = this.createElement('input');
            notaMateriaInput.type = 'number';

            // Agregar los elementos al contenedor
            this.inputsContainer.append(
                materiaTitle,
                notaMateriaLabel, notaMateriaInput
            );
        });

        // Crear input para la nota deseada
        const notaDeseadaLabel = this.createElement('label');
        notaDeseadaLabel.textContent = 'Nota deseada:';
        const notaDeseadaInput = this.createElement('input');
        notaDeseadaInput.type = 'number';

        // Agregar el input de la nota deseada al contenedor
        this.inputsContainer.append(
            notaDeseadaLabel, notaDeseadaInput
        );
    }
    //Create element with or without CSS class
    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    //Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    get _notaText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }
}