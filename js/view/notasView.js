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
        this.inputMateria = this.createElement('input', 'inputMateria');
        this.inputMateria.type = 'text';
        this.inputMateria.placeholder = 'Nombre de la materia';
        this.inputMateria.name = 'materia';

        // Bind createElement
        this.createElement = this.createElement.bind(this);

        // Append inputMateria to inputsContainer
        this.inputsContainer.appendChild(this.inputMateria);

        // Create button for adding another input
        this.addInputButton = this.createElement('button');
        this.addInputButton.textContent = 'Agregar materia';

        // Create button for finalizar
        this.finalizarButton = this.createElement('button');
        this.finalizarButton.textContent = 'Finalizar';

        // Set up form event listener
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this.form.append(this.inputMateria, this.addInputButton, this.finalizarButton);
        //this.inputsContainer.append(this.inputMateria);

        // Append title, description, and form
        this.app.append(this.title, this.description, this.form);

        // this._initLocalListeners();
        this.displayMateriasList();
    }


    displayMateriasList() {
        // Limpiar lista de materias antes de mostrarla
        while (this.inputsContainer.firstChild) {
            this.inputsContainer.removeChild(this.inputsContainer.firstChild);
        }
        this.materiasList.forEach(materia => {
            const listItem = document.createElement('li');
            listItem.textContent = materia;
            listItem.addEventListener('click', () => {
                this.selectedMateria = materia;
            });
            this.inputsContainer.appendChild(listItem);
        });

        // If there are no materias, display a message
        if (this.materiasList.length === 0) {
            const noMateriasMessage = document.createElement('li');
            noMateriasMessage.textContent = 'No hay materias.';
            this.inputsContainer.appendChild(noMateriasMessage);
        }
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

        // Crear y configurar el botón
        const calcularButtonSingle = this.createElement('button');
        calcularButtonSingle.textContent = 'Calcular';

        calcularButtonSingle.addEventListener('click', () => {
            const notaDeseada = parseFloat(notaDeseadaInput.value);
            const primerParcial = parseFloat(primerParcialInput.value);
            const segundoParcial = parseFloat(SegundoParcialInput.value);
            const notaTercerParcial = (notaDeseada - (primerParcial * 0.3) - (segundoParcial * 0.3)) / 0.4;
            alert(`La nota mínima necesaria en el tercer parcial es: ${notaTercerParcial.toFixed(2)} puntos`);
        });
        const centerContainer = this.createElement('div');
        centerContainer.style.textAlign = 'center';
        centerContainer.style.marginTop = '20px';
        centerContainer.append(calcularButtonSingle);

        // Agregar los elementos al contenedor
        this.inputsContainer.append(
            materiaTitle,
            notaDeseadaLabel, notaDeseadaInput,
            primerParcialLabel, primerParcialInput,
            SegundoParcialLabel, SegundoParcialInput, centerContainer
        );
        this.app.append(this.inputsContainer);
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
            notaMateriaInput.id = `nota-materia-${index}`;

            const cantidadCreditosInput = this.createElement('input');
            cantidadCreditosInput.type = 'number';
            cantidadCreditosInput.placeholder = 'Cantidad de créditos';
            cantidadCreditosInput.id = `cantidad-creditos-${index}`;


            // Agregar los elementos al contenedor
            this.inputsContainer.append(
                materiaTitle,
                notaMateriaLabel, notaMateriaInput, cantidadCreditosInput
            );
        });

        // Crear input para la nota deseada
        const notaDeseadaLabel = this.createElement('label');
        notaDeseadaLabel.textContent = 'Nota deseada:';
        const notaDeseadaInput = this.createElement('input');
        notaDeseadaInput.type = 'number';
        const cantidadCreditosProximaInput = this.createElement('input');
        cantidadCreditosProximaInput.type = 'number';
        cantidadCreditosProximaInput.placeholder = 'Créditos proxima materia';

        // Crear y configurar el botón
        const calcularButtonMultiple = this.createElement('button');
        calcularButtonMultiple.textContent = 'Calcular';

        calcularButtonMultiple.addEventListener('click', () => {
            let notaTotal = 0;
            let creditosTotal = 0;

            this.materiasList.forEach((materia, index) => {
                const notaMateriaInput = document.querySelector(`#nota-materia-${index}`);
                const cantidadCreditosInput = document.querySelector(`#cantidad-creditos-${index}`);

                const prod = parseFloat(notaMateriaInput.value) * parseFloat(cantidadCreditosInput.value);
                creditosTotal = creditosTotal + parseFloat(cantidadCreditosInput.value);
                notaTotal = notaTotal + prod;
            })
            const notaRequerida = (parseFloat(notaDeseadaInput.value) * (creditosTotal + parseFloat(cantidadCreditosProximaInput.value)) - notaTotal) / parseFloat(cantidadCreditosProximaInput.value);

            alert(`La nota de tu proxima materia necesaria para obtener una nota de ${notaDeseadaInput.value} en tu semestre es: ${notaRequerida.toFixed(2)}`);
        })

        const centerContainer = this.createElement('div');
        centerContainer.style.textAlign = 'center';
        centerContainer.style.marginTop = '20px';
        centerContainer.append(notaDeseadaLabel, notaDeseadaInput, cantidadCreditosProximaInput);
        
        const centerContainer2 = this.createElement('div');
        centerContainer2.style.textAlign = 'center';
        centerContainer2.style.marginTop = '20px';
        centerContainer2.append(calcularButtonMultiple);

        // Agregar el input de la nota deseada al contenedor
        this.inputsContainer.append(
            centerContainer, centerContainer2
        );
        this.app.append(this.inputsContainer);
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
        this.inputMateria.value = '';
    }
    getMateria() {
        const materia = this.inputMateria.value.trim(); // Eliminar espacios en blanco al inicio y al final
        if (materia === '') {
            alert('Debes ingresar un nombre de materia.');
        }
        return materia;
    }
    bindAddInput(handler) {
        this.addInputButton.addEventListener('click', handler);
    }
    bindFinalizar(handler) {
        this.finalizarButton.addEventListener('click', handler);
    }
    getMateriasList() {
        return this.materiasList;
    }
}