//variables globales

const addError = document.querySelector('.addError');
let presupuesto = document.getElementById('presupuesto');
const gastoNombre = document.querySelector('#gasto-nombre');
const cantidadGasto = document.querySelector('#gasto-cantidad');
const button = document.querySelector('#presubtn');
const buttonGasto = document.getElementById('gastobtn');

// capturando eventos y aplicando funciones
button.addEventListener('click', addBudge);
buttonGasto.addEventListener('click', addSpend)

// valida e imprime el presupuesto en pantalla
function addBudge (e) {

	e.preventDefault();

	const budge = document.getElementById('printBudge');
	
	if (presupuesto.value < 1 ) {
		showError('Debe contener un presupuesto inicial o un valor mayor a 0')
	} else {
		budge.textContent = presupuesto.value;
		
	}
		
}


function addSpend (e) {

	e.preventDefault();
	const valorNombre = gastoNombre.value;
	let gasto = cantidadGasto.value;
	const pintarRest = document.querySelector('.rest');
	
	let restante;

	if (cantidadGasto.value < 1 || gastoNombre.length === 0) {
	    showError('Complete todos los campos');
	} else {
		  pintarRest.style.display = 'flex';
	}
	
}

// muestra el error de validacion  por 2.5 segundos.
function showError (msg) {
	
	const messageError = document.createElement('p');
	messageError.textContent = msg;

	messageError.classList.add('border', 'border-danger','text-danger','error');
	messageError.style.padding = '3px';
	messageError.style.marginTop = '8px';

	const errors = document.querySelectorAll('.error')

	if (errors.length === 0) {
       addError.appendChild(messageError);
	}
	setTimeout(() => {
		
		messageError.remove();
	}, 2500);
}
