//variables globales
const pintarRest = document.querySelector('.rest');
const contentRest = document.querySelector('#contentRest');
const form = document.getElementById('form');

// capturando eventos y aplicando funciones

const button = document.querySelector('#presubtn');
const buttonGasto = document.getElementById('gastobtn');
button.addEventListener('click', addBudge);
buttonGasto.addEventListener('click', showSpend)

// valida e imprime el presupuesto en pantalla
function addBudge (e) {

	let presupuesto = Number(document.getElementById('presupuesto').value);
	const budge = document.getElementById('contentBudge');
	
	e.preventDefault();		
	if (presupuesto < 1 || presupuesto == '') {
		showError('Debe contener un presupuesto inicial o un valor mayor a 0')

	} else {
		 budge.textContent = presupuesto;
		 			 
	}
		
}

// valida y muestra el restante y el gasto
function showSpend (e) {
	let cantidadGasto = Number(document.querySelector('#gasto-cantidad').value);
	const gastoNombre = document.querySelector('#gasto-nombre').value;
	
	e.preventDefault();	
	if (cantidadGasto.value < 1 || gastoNombre.length == 0) {
	    showError('Complete todos los campos');
	} else {
		 printRemaining(cantidadGasto);
		 addSpend(gastoNombre, cantidadGasto);
		 
	}
	
}

// imprime el restante
function printRemaining (gasto) {
	   let presupuesto = Number(document.getElementById('presupuesto').value);
	   
	   let acumulador = 0
	   acumulador = acumulador + gasto;
	   restante = presupuesto - acumulador;
	   contentRest.textContent = restante;
	   pintarRest.style.display = 'flex';
	 
}

function addSpend (nombre, cant) {
	  const mostrar = document.createElement('div');
	  mostrar.classList.add('gastos');

	  mostrar.innerHTML = `
	  <span class ='gasto-span'> ${nombre} : ${cant} </span> <i class="fas fa-times-circle"></i>  
	  `;
	  document.querySelector('.card').appendChild(mostrar);
}
// muestra el error de validacion  por 2.5 segundos.
function showError (msg) {
	
	const messageError = document.createElement('p');
	messageError.textContent = msg;

	messageError.classList.add('border', 'border-danger','text-danger','error');
	const errors = document.querySelectorAll('.error')

	if (errors.length === 0) {
       document.querySelector('.addError').appendChild(messageError);
	}
	setTimeout(() => {	

		messageError.remove();	
	}, 2500);
}
