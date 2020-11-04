//variables globales

const addError = document.querySelector('.addError');
const pintarRest = document.querySelector('.rest');
const contentRest = document.querySelector('#contentRest');

// capturando eventos y aplicando funciones

const button = document.querySelector('#presubtn');
const buttonGasto = document.getElementById('gastobtn');
button.addEventListener('click', addBudge);
buttonGasto.addEventListener('click', showSpend)

// valida e imprime el presupuesto en pantalla
function addBudge (e) {

	let presupuesto = document.getElementById('presupuesto').value;
	const budge = document.getElementById('contentBudge');
	presupuesto = parseInt(presupuesto);
	
	e.preventDefault();		
	if (presupuesto < 1 ) {
		showError('Debe contener un presupuesto inicial o un valor mayor a 0')

	} else {
		 budge.textContent = presupuesto;
		 			 
	}
		
}

// valida y muestra el restante y el gasto
function showSpend (e) {
	let cantidadGasto = document.querySelector('#gasto-cantidad').value;
	const gastoNombre = document.querySelector('#gasto-nombre').value;
	
	e.preventDefault();	
	if (cantidadGasto.value < 1 || gastoNombre.length === 0) {
	    showError('Complete todos los campos');
	} else {
		 printRemaining(cantidadGasto);
		 addSpend(cantidadGasto, gastoNombre);
	}
	
}

// imprime el restante
function printRemaining (gasto) {
	   let presupuesto = document.getElementById('presupuesto').value;
	   presupuesto = parseInt(presupuesto);
	   gasto = parseInt(gasto);
	   
	   let acumulador = 0
	   acumulador = acumulador + gasto;
	   restante = presupuesto - acumulador;
	   contentRest.textContent = restante;
	   pintarRest.style.display = 'flex';
	 
}

function addSpend (cant, nombre) {
	  const mostrar = document.createElement('div');
	  mostrar.classList.add('gastos');
	  
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
