//variables globales

const addError = document.querySelector('.addError');
let presupuesto = document.getElementById('presupuesto');
const gastoNombre = document.querySelector('#gasto-nombre').value;
const cantidadGasto = document.querySelector('#gasto-cantidad').value;
const button = document.querySelector('#presubtn');


button.addEventListener('click', addBudge);

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

// muestra el error de validacion y lo muestra por 3 segundos.
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
	}, 3000);
}

function showSpend () {

}